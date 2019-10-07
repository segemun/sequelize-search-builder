const Sequelize = require('sequelize');

module.exports = [
  {
    it: 'Gt operator simple (key[gt]=value)',
    request: {
      key: {
        gt: 'value',
      },
    },
    expected: {
      key: {
        [Sequelize.Op.gt]: 'value',
      },
    },
  },
  {
    it: 'Gt simple with association (key.key[gt]=value)',
    request: {
      'key.key': {
        gt: 'value',
      },
    },
    expected: {
      '$key.key$': {
        [Sequelize.Op.gt]: 'value',
      },
    },
  },
  {
    it: 'Gt operator multi (key1[gt]=value1&key2[gt]=value2)',
    request: {
      key1: {
        gt: 'value1',
      },
      key2: {
        gt: 'value2',
      },
    },
    expected: {
      key1: {
        [Sequelize.Op.gt]: 'value1',
      },
      key2: {
        [Sequelize.Op.gt]: 'value2',
      },
    },
  },
];
