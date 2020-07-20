const { Op } = require('sequelize');

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
        [Op.lt]: 'value',
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
        [Op.lt]: 'value',
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
        [Op.lt]: 'value1',
      },
      key2: {
        [Op.lt]: 'value2',
      },
    },
  },
];
