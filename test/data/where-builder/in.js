const { Op } = require('sequelize');

module.exports = [
  {
    it: 'In operator simple (key[in][]=1&key[in][]=2)',
    request: {
      key: {
        in: [1, 2],
      },
    },
    expected: {
      key: {
        [Op.in]: [1, 2],
      },
    },
  },
  {
    it: 'In simple with association (key.key[in][]=1&key.key[in][]=2)',
    request: {
      'key.key': {
        in: [1, 2],
      },
    },
    expected: {
      '$key.key$': {
        [Op.in]: [1, 2],
      },
    },
  },
  {
    it: 'In operator multi (key1[in][]=1&key1[in][]=2&key2[in][]=1&key2[in][]=2&key2[in][]=3)',
    request: {
      key1: {
        in: [1, 2],
      },
      key2: {
        in: [1, 2, 3],
      },
    },
    expected: {
      key1: {
        [Op.in]: [1, 2],
      },
      key2: {
        [Op.in]: [1, 2, 3],
      },
    },
  },
];
