const Sequelize = require('sequelize');

module.exports = [
  {
    it: 'Ne operator simple (key[ne]=value)',
    request: {
      key: {
        ne: 'value',
      },
    },
    expected: {
      key: {
        [Sequelize.Op.ne]: 'value',
      },
    },
  },
  {
    it: 'Ne simple with association (key.key[ne]=value)',
    request: {
      'key.key': {
        ne: 'value',
      },
    },
    expected: {
      '$key.key$': {
        [Sequelize.Op.ne]: 'value',
      },
    },
  },
  {
    it: 'Ne operator multi (key1[ne]=value1&key2[ne]=value2)',
    request: {
      key1: {
        ne: 'value1',
      },
      key2: {
        ne: 'value2',
      },
    },
    expected: {
      key1: {
        [Sequelize.Op.ne]: 'value1',
      },
      key2: {
        [Sequelize.Op.ne]: 'value2',
      },
    },
  },
];
