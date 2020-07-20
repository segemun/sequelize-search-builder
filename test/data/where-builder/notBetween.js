const { Op } = require('sequelize');

module.exports = [
  {
    it: 'Not Between operator simple (key[notBetween][]=1&key[notBetween][]=2)',
    request: {
      key: {
        notBetween: [1, 2],
      },
    },
    expected: {
      key: {
        [Op.notBetween]: [1, 2],
      },
    },
  },
  {
    it: 'Not Between simple with association (key.key[notBetween][]=1&key.key[notBetween][]=2)',
    request: {
      'key.key': {
        notBetween: [1, 2],
      },
    },
    expected: {
      '$key.key$': {
        [Op.notBetween]: [1, 2],
      },
    },
  },
  {
    it: 'Not Between operator multi (key1[notBetween][]=1&key1[notBetween][]=2&key2[notBetween][]=1&key2[notBetween][]=2)',
    request: {
      key1: {
        notBetween: [1, 2],
      },
      key2: {
        notBetween: [1, 2],
      },
    },
    expected: {
      key1: {
        [Op.notBetween]: [1, 2],
      },
      key2: {
        [Op.notBetween]: [1, 2],
      },
    },
  },
];
