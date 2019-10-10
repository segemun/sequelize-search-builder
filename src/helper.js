const rc = require('rc');
const defaultConfig = require('../config');

const config = rc('sequelize-search-builder', defaultConfig);

const helpers = {
  isComparableField: key => key[0] !== '_',

  getFieldKey: (key) => {
    let result = key;
    if (key.indexOf('.') !== -1) {
      result = `$${key}$`;
    }

    return result;
  },

  getEqualOp: (key, value) => {
    const query = {
      [key]: value,
    };

    return query;
  },

  log: (mode, message) => {
    if (config.logging) {
      console[mode](message);
    }
  },
};

module.exports = helpers;
