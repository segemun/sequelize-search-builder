const { Op } = require('sequelize');

module.exports = [
  {
    it: 'Like operator simple (key[like]=value)',
    request: {
      key: {
        like: 'value',
      },
    },
    expected: {
      key: {
        [Op.like]: 'value',
      },
    },
  },
  {
    it: 'Like simple with association (key.key[like]=value)',
    request: {
      'key.key': {
        like: 'value',
      },
    },
    expected: {
      '$key.key$': {
        [Op.like]: 'value',
      },
    },
  },
  {
    it: 'Like operator multi (key1[like]=value1&key2[like]=value2)',
    request: {
      key1: {
        like: 'value1',
      },
      key2: {
        like: 'value2',
      },
    },
    expected: {
      key1: {
        [Op.like]: 'value1',
      },
      key2: {
        [Op.like]: 'value2',
      },
    },
  },
];
