const { Op } = require('sequelize');

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
        [Op.ne]: 'value',
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
        [Op.ne]: 'value',
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
        [Op.ne]: 'value1',
      },
      key2: {
        [Op.ne]: 'value2',
      },
    },
  },
];
