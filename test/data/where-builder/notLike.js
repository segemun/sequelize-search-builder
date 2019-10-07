const Sequelize = require('sequelize');

module.exports = [
  {
    it: 'Not Like operator simple (key[notLike]=value)',
    request: {
      key: {
        notLike: 'value',
      },
    },
    expected: {
      key: {
        [Sequelize.Op.notLike]: 'value',
      },
    },
  },
  {
    it: 'Not Like simple with association (key.key[notLike]=value)',
    request: {
      'key.key': {
        notLike: 'value',
      },
    },
    expected: {
      '$key.key$': {
        [Sequelize.Op.notLike]: 'value',
      },
    },
  },
  {
    it: 'Not Like operator multi (key1[notLike]=value1&key2[notLike]=value2)',
    request: {
      key1: {
        notLike: 'value1',
      },
      key2: {
        notLike: 'value2',
      },
    },
    expected: {
      key1: {
        [Sequelize.Op.notLike]: 'value1',
      },
      key2: {
        [Sequelize.Op.notLike]: 'value2',
      },
    },
  },
];
