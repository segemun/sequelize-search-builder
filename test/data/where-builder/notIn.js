const Sequelize = require('sequelize');

module.exports = [
  {
    it: 'Not In operator simple (key[notIn][]=1&key[notIn][]=2)',
    request: {
      key: {
        notIn: [1, 2],
      },
    },
    expected: {
      key: {
        [Sequelize.Op.notIn]: [1, 2],
      },
    },
  },
  {
    it: 'Not In simple with association (key.key[notIn][]=1&key.key[notIn][]=2)',
    request: {
      'key.key': {
        notIn: [1, 2],
      },
    },
    expected: {
      '$key.key$': {
        [Sequelize.Op.notIn]: [1, 2],
      },
    },
  },
  {
    it: 'Not In operator multi (key1[notIn][]=1&key1[notIn][]=2&key2[notIn][]=1&key2[notIn][]=2&key2[notIn][]=3)',
    request: {
      key1: {
        notIn: [1, 2],
      },
      key2: {
        notIn: [1, 2, 3],
      },
    },
    expected: {
      key1: {
        [Sequelize.Op.notIn]: [1, 2],
      },
      key2: {
        [Sequelize.Op.notIn]: [1, 2, 3],
      },
    },
  },
];
