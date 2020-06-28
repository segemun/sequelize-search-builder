const { Op } = require('sequelize');

module.exports = [
  {
    it: 'Like operator simple (key[iLike]=value)',
    request: {
      key: {
        iLike: 'value',
      },
    },
    expected: {
      key: {
        [Op.iLike]: 'value',
      },
    },
  },
  {
    it: 'Like simple with association (key.key[iLike]=value)',
    request: {
      'key.key': {
        iLike: 'value',
      },
    },
    expected: {
      '$key.key$': {
        [Op.iLike]: 'value',
      },
    },
  },
  {
    it: 'Like operator multi (key1[iLike]=value1&key2[iLike]=value2)',
    request: {
      key1: {
        iLike: 'value1',
      },
      key2: {
        iLike: 'value2',
      },
    },
    expected: {
      key1: {
        [Op.iLike]: 'value1',
      },
      key2: {
        [Op.iLike]: 'value2',
      },
    },
  },
];
