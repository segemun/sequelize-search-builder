const { Op } = require('sequelize');

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
        [Op.iRegexp]: 'value',
      },
    },
  },
];
