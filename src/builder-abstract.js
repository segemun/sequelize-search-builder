const rc = require('rc');
const qs = require('qs');
const defaultConfig = require('../config');

const config = rc('sequelize-search-builder', defaultConfig);

class BuilderAbstract {
  constructor(Sequelize, request = {}) {
    if (new.target === BuilderAbstract) {
      throw new TypeError('Cannot construct BuilderAbstract instances directly');
    }

    this.Sequelize = Sequelize;
    this.request = BuilderAbstract.prepareRequest(request);
    this.config = config;
  }

  static prepareRequest(request = {}) {
    if (typeof request === 'string') {
      return qs.parse(request);
    }

    return request;
  }
}

module.exports = BuilderAbstract;
