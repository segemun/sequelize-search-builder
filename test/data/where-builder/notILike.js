const Sequelize = require('sequelize');

module.exports = [
  {
    it: 'Not Like operator simple (key[notILike]=value)',
    request: {
      key: {
        notILike: 'value',
      },
    },
    expected: {
      key: {
        [Sequelize.Op.notILike]: 'value',
      },
    },
  },
  {
    it: 'Not Like simple with association (key.key[notILike]=value)',
    request: {
      'key.key': {
        notILike: 'value',
      },
    },
    expected: {
      '$key.key$': {
        [Sequelize.Op.notILike]: 'value',
      },
    },
  },
  {
    it: 'Not Like operator multi (key1[notILike]=value1&key2[notILike]=value2)',
    request: {
      key1: {
        notILike: 'value1',
      },
      key2: {
        notILike: 'value2',
      },
    },
    expected: {
      key1: {
        [Sequelize.Op.notILike]: 'value1',
      },
      key2: {
        [Sequelize.Op.notILike]: 'value2',
      },
    },
  },
];
