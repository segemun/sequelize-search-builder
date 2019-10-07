/* global describe it */
const _ = require('lodash');
const { expect } = require('chai');
const Sequelize = require('sequelize');
const SearchBuilder = require('../src/search-builder');

// Datasets
const equalData = require('./data/where-builder/equal');
const gtData = require('./data/where-builder/gt');
const gteData = require('./data/where-builder/gte');
const ltData = require('./data/where-builder/lt');
const lteData = require('./data/where-builder/lte');
const neData = require('./data/where-builder/ne');
const betweenData = require('./data/where-builder/between');
const notBetweenData = require('./data/where-builder/notBetween');
const inData = require('./data/where-builder/in');
const notInData = require('./data/where-builder/notIn');
const likeData = require('./data/where-builder/like');
const notLikeData = require('./data/where-builder/notLike');

const orderData = require('./data/order-builder');

function compareDataset(row, request, expected, methodName) {
  it(row.it, (done) => {
    const searchBuilder = new SearchBuilder(Sequelize, request);
    const query = searchBuilder[methodName]();

    expect(_.isEqual(query, expected)).to.equal(true);
    done();
  });
}

function compareWhereDataset(row) {
  compareDataset(row, { filter: row.request }, row.expected, 'getWhereQuery');
}

function compareOrderDataset(row) {
  compareDataset(row, { order: row.request }, row.expected, 'getOrderQuery');
}

describe('SearchBuilder', () => {
  describe('WhereBuilder', () => {
    describe('Equal operator (=, eq)', () => {
      equalData.forEach(compareWhereDataset);
    });
    describe('Gt operator', () => {
      gtData.forEach(compareWhereDataset);
    });
    describe('Gte operator', () => {
      gteData.forEach(compareWhereDataset);
    });
    describe('Lt operator', () => {
      ltData.forEach(compareWhereDataset);
    });
    describe('Lte operator', () => {
      lteData.forEach(compareWhereDataset);
    });
    describe('Ne operator', () => {
      neData.forEach(compareWhereDataset);
    });
    describe('Between operator', () => {
      betweenData.forEach(compareWhereDataset);
    });
    describe('Not Between operator', () => {
      notBetweenData.forEach(compareWhereDataset);
    });
    describe('In operator', () => {
      inData.forEach(compareWhereDataset);
    });
    describe('Not In operator', () => {
      notInData.forEach(compareWhereDataset);
    });
    describe('Like operator', () => {
      likeData.forEach(compareWhereDataset);
    });
    describe('Not Like operator', () => {
      notLikeData.forEach(compareWhereDataset);
    });
  });

  describe('OrderBuilder', () => {
    orderData.forEach(compareOrderDataset);
  });
  
  describe('LimitBuilder', () => {
    compareDataset({ it: 'Test limit' }, { limit: 100 }, 100, 'getLimitQuery');
    compareDataset({ it: 'Test limit default' }, {}, 10, 'getLimitQuery');
  });
  
  describe('OffsetBuilder', () => {
    compareDataset({ it: 'Test offset' }, { offset: 10 }, 10, 'getOffsetQuery');
  });
});
