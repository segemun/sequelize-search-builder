const Sequelize = require('sequelize');

module.exports = [
  {
    it: 'Lte operator simple (key[lte]=value)',
    request: {
      key: {
        lte: 'value',
      },
    },
    expected: {
      key: {
        [Sequelize.Op.lte]: 'value',
      },
    },
  },
  {
    it: 'Lte simple with association (key.key[lte]=value)',
    request: {
      'key.key': {
        lte: 'value',
      },
    },
    expected: {
      '$key.key$': {
        [Sequelize.Op.lte]: 'value',
      },
    },
  },
  {
    it: 'Lte operator multi (key1[lte]=value1&key2[lte]=value2)',
    request: {
      key1: {
        lte: 'value1',
      },
      key2: {
        lte: 'value2',
      },
    },
    expected: {
      key1: {
        [Sequelize.Op.lte]: 'value1',
      },
      key2: {
        [Sequelize.Op.lte]: 'value2',
      },
    },
  },
];
