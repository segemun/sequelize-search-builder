const Sequelize = require('sequelize');

module.exports = [
  {
    it: 'Gte operator simple (key[gte]=value)',
    request: {
      key: {
        gte: 'value',
      },
    },
    expected: {
      key: {
        [Sequelize.Op.gte]: 'value',
      },
    },
  },
  {
    it: 'Gte simple with association (key.key[gte]=value)',
    request: {
      'key.key': {
        gte: 'value',
      },
    },
    expected: {
      '$key.key$': {
        [Sequelize.Op.gte]: 'value',
      },
    },
  },
  {
    it: 'Gte operator multi (key1[gte]=value1&key2[gte]=value2)',
    request: {
      key1: {
        gte: 'value1',
      },
      key2: {
        gte: 'value2',
      },
    },
    expected: {
      key1: {
        [Sequelize.Op.gte]: 'value1',
      },
      key2: {
        [Sequelize.Op.gte]: 'value2',
      },
    },
  },
];
