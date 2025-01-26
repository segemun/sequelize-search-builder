/* global describe it */
const isEqual = require('lodash.isequal');
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
const iLikeData = require('./data/where-builder/iLike');
const notILikeData = require('./data/where-builder/notILike');
const regexpData = require('./data/where-builder/regexp');
const notRegexpData = require('./data/where-builder/notRegexp');
const iRegexpData = require('./data/where-builder/iRegexp');
const notIRegexpData = require('./data/where-builder/notIRegexp');
const isData = require('./data/where-builder/is');
const notData = require('./data/where-builder/not');

const conditionData = require('./data/condition');

const orderData = require('./data/order-builder');

function compareDataset(row, request, expected, methodName) {
  it(row.it, (done) => {
    const searchBuilder = new SearchBuilder(Sequelize, request);
    const query = searchBuilder[methodName]();

    expect(isEqual(query, expected)).to.equal(true);
    done();
  });
}

function compareWhereDataset(row) {
  const request = (typeof row.request === 'object') ? { filter: row.request } : row.request;
  compareDataset(row, request, row.expected, 'getWhereQuery');
}

function compareOrderDataset(row) {
  const request = (typeof row.request === 'object') ? { order: row.request } : row.request;
  compareDataset(row, request, row.expected, 'getOrderQuery');
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
    describe('iLike operator', () => {
      iLikeData.forEach(compareWhereDataset);
    });
    describe('Not iLike operator', () => {
      notILikeData.forEach(compareWhereDataset);
    });
    describe('Regexp operator', () => {
      regexpData.forEach(compareWhereDataset);
    });
    describe('Not Regexp operator', () => {
      notRegexpData.forEach(compareWhereDataset);
    });
    describe('iRegexp operator', () => {
      iRegexpData.forEach(compareWhereDataset);
    });
    describe('notIRegexp operator', () => {
      notIRegexpData.forEach(compareWhereDataset);
    });
    describe('is operator', () => {
      isData.forEach(compareWhereDataset);
    });
    describe('not operator', () => {
      notData.forEach(compareWhereDataset);
    });
  });

  describe('Conditions', () => {
    conditionData.forEach(compareWhereDataset);
  });

  describe('OrderBuilder', () => {
    orderData.forEach(compareOrderDataset);
  });

  describe('LimitBuilder', () => {
    compareDataset({ it: 'Test limit' }, { limit: 100 }, 100, 'getLimitQuery');
    compareDataset({ it: 'Test limit default' }, {}, 10, 'getLimitQuery');
    compareDataset({ it: 'Test limit string' }, { limit: '100' }, 100, 'getLimitQuery');
    compareDataset({ it: 'Test limit string' }, { limit: 'string' }, 10, 'getLimitQuery');
    compareDataset({ it: 'Test limit string' }, { limit: '100_string' }, 100, 'getLimitQuery');
  });

  describe('OffsetBuilder', () => {
    compareDataset({ it: 'Test offset' }, { offset: 10 }, 10, 'getOffsetQuery');
    compareDataset({ it: 'Test limit string' }, { offset: '100' }, 100, 'getOffsetQuery');
    compareDataset({ it: 'Test limit string' }, { offset: 'string' }, null, 'getOffsetQuery');
    compareDataset({ it: 'Test limit string' }, { offset: '100_string' }, 100, 'getOffsetQuery');
  });

  describe('Config setter', () => {
    it('Test custom configs', (done) => {
      const expected = {
        where: { key1: 'value1' },
        order: [['key1', 'desc']],
        limit: 100,
        offset: null,
      };

      const expectedDefaultConfigs = {
        where: null,
        order: [['key1', 'desc']],
        limit: 10,
        offset: null,
      };

      const query = {
        f: { key1: 'value1' },
        order: { key1: 'desc' },
      };

      const config = {
        fields: { filter: 'f' },
        'default-limit': 100,
      };

      let searchBuilder = new SearchBuilder(Sequelize, query);
      searchBuilder.setConfig(config);
      expect(isEqual(searchBuilder.getFullQuery(), expected)).to.equal(true);

      searchBuilder = new SearchBuilder(Sequelize, query);
      expect(isEqual(searchBuilder.getFullQuery(), expectedDefaultConfigs)).to.equal(true);
      done();
    });
  });
});
