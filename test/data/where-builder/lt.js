const Sequelize = require('sequelize');

module.exports = [
  {
    it: 'Lt operator simple (key[lt]=value)',
    request: {
      key: {
        lt: 'value',
      },
    },
    expected: {
      key: {
        [Sequelize.Op.lt]: 'value',
      },
    },
  },
  {
    it: 'Lt simple with association (key.key[lt]=value)',
    request: {
      'key.key': {
        lt: 'value',
      },
    },
    expected: {
      '$key.key$': {
        [Sequelize.Op.lt]: 'value',
      },
    },
  },
  {
    it: 'Lt operator multi (key1[lt]=value1&key2[lt]=value2)',
    request: {
      key1: {
        lt: 'value1',
      },
      key2: {
        lt: 'value2',
      },
    },
    expected: {
      key1: {
        [Sequelize.Op.lt]: 'value1',
      },
      key2: {
        [Sequelize.Op.lt]: 'value2',
      },
    },
  },
];
