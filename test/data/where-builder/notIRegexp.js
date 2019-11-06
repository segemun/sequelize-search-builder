const Sequelize = require('sequelize');

module.exports = [
  {
    it: 'notIRegexp operator simple (key[notIRegexp]=value)',
    request: {
      key: {
        notIRegexp: 'value',
      },
    },
    expected: {
      key: {
        [Sequelize.Op.notIRegexp]: 'value',
      },
    },
  },
  {
    it: 'notIRegexp operator simple (key[notIRegexp]=value) string',
    request: 'filter[key][notIRegexp]=value',
    expected: {
      key: {
        [Sequelize.Op.notIRegexp]: 'value',
      },
    },
  },
];
