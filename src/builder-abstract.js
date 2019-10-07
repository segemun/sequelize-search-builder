const defaultConfig = require('../config');
const config = require('rc')('sequelize-search-builder', defaultConfig);

class BuilderAbstract {
  constructor(Sequelize, request = {}) {
    if (new.target === BuilderAbstract) {
      throw new TypeError('Cannot construct BuilderAbstract instances directly');
    }
    this.Sequelize = Sequelize;
    this.request = request;
    this.config = config;
  }
}

module.exports = BuilderAbstract;
