const Sequelize = require('sequelize');

module.exports = [
  {
    it: 'iRegexp operator simple (key[regexp]=value)',
    request: {
      key: {
        iRegexp: 'value',
      },
    },
    expected: {
      key: {
        [Sequelize.Op.iRegexp]: 'value',
      },
    },
  },
];
