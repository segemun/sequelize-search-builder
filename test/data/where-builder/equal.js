const Sequelize = require('sequelize');

module.exports = [
  {
    it: 'Equal simple (key=value)',
    request: {
      key: 'value',
    },
    expected: {
      key: 'value',
    },
  },
  {
    it: 'Equal simple with association (key.key=value)',
    request: {
      'key.key': 'value',
    },
    expected: {
      '$key.key$': 'value',
    },
  },
  {
    it: 'Equal multi (key1=value1&key2=value2)',
    request: {
      key1: 'value1',
      key2: 'value2',
    },
    expected: {
      key1: 'value1',
      key2: 'value2',
    },
  },
  {
    it: 'Equal array (key1=value1&key1=value2)',
    request: {
      key1: ['value1', 'value2'],
    },
    expected: {
      key1: ['value1', 'value2'],
    },
  },
  {
    it: 'Equal operator simple (key[eq]=value)',
    request: {
      key: {
        eq: 'value',
      },
    },
    expected: {
      key: 'value',
    },
  },
  {
    it: 'Equal with OR condition (key1=value1&key2=value2&_condition=or)',
    request: {
      _condition: 'or',
      key1: 'value1',
      key2: 'value2',
    },
    expected: {
      [Sequelize.Op.or]: {
        key1: 'value1',
        key2: 'value2',
      },
    },
  },
  {
    it: 'Equal with AND condition (key1=value1&key2=value2&_condition=and)',
    request: {
      _condition: 'or',
      key1: 'value1',
      key2: 'value2',
    },
    expected: {
      [Sequelize.Op.or]: {
        key1: 'value1',
        key2: 'value2',
      },
    },
  },
  {
    it: 'Equal operator simple with association (key.key[eq]=value)',
    request: {
      'key.key': {
        eq: 'value',
      },
    },
    expected: {
      '$key.key$': 'value',
    },
  },
  {
    it: 'Equal operator multi (key1[eq]=value1&key2[eq]=value2)',
    request: {
      key1: {
        eq: 'value1',
      },
      key2: {
        eq: 'value2',
      },
    },
    expected: {
      key1: 'value1',
      key2: 'value2',
    },
  },
  {
    it: 'Equal operator array (key1[eq]=value1&key1[eq]=value2)',
    request: {
      key1: {
        eq: ['value1', 'value2'],
      },
    },
    expected: {
      key1: ['value1', 'value2'],
    },
  },
  {
    it: 'Equal operator with OR condition (key1[eq]=value1&key2[eq]=value2&_condition=or)',
    request: {
      _condition: 'or',
      key1: {
        eq: 'value1',
      },
      key2: {
        eq: 'value2',
      },
    },
    expected: {
      [Sequelize.Op.or]: {
        key1: 'value1',
        key2: 'value2',
      },
    },
  },
  {
    it: 'Equal operator with AND condition (key1[eq]=value1&key2[eq]=value2&_condition=and)',
    request: {
      _condition: 'and',
      key1: {
        eq: 'value1',
      },
      key2: {
        eq: 'value2',
      },
    },
    expected: {
      [Sequelize.Op.and]: {
        key1: 'value1',
        key2: 'value2',
      },
    },
  },
  {
    it: '(string request) Equal operator with AND condition (?filter[key1][eq]=value1&filter[key2][eq]=value2&filter[_condition]=and)',
    request: 'filter[key1][eq]=value1&filter[key2][eq]=value2&filter[_condition]=and',
    expected: {
      [Sequelize.Op.and]: {
        key1: 'value1',
        key2: 'value2',
      },
    },
  },
  {
    it: '(string request) Equal simple (?key=value)',
    request: 'filter[key]=value',
    expected: {
      key: 'value',
    },
  },
];
