const rc = require('rc');
const qs = require('qs');
const merge = require('lodash.merge');
const defaultConfig = require('../config');

const config = rc('sequelize-search-builder', defaultConfig);

class BuilderAbstract {
  /**
   * @param {Object} Sequelize
   * @param {(Object|string)} request
   */
  constructor(Sequelize, request = {}) {
    if (new.target === BuilderAbstract) {
      throw new TypeError('Cannot construct BuilderAbstract instances directly');
    }

    this.Sequelize = Sequelize;
    this.request = BuilderAbstract.prepareRequest(request);
    this.setConfig(config);
  }

  /**
   * Set Builder configs
   *
   * @param {Object} value - config options
   *
   * @returns {this}
   */
  setConfig(value) {
    if (value !== null && typeof value === 'object') {
      this.config = merge(this.config, value);
    } else {
      console.error('Config parameter should be an object');
    }

    return this;
  }

  /**
   * Transform request to request object
   * @param {(Object|string)} request
   *
   * @returns {Object}
   */
  static prepareRequest(request = {}) {
    if (typeof request === 'string') {
      return qs.parse(request, { ignoreQueryPrefix: true });
    }

    return request || {};
  }
}

module.exports = BuilderAbstract;
