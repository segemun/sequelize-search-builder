const { Op } = require('sequelize');

module.exports = [
  {
    it: 'Regexp operator simple (key[regexp]=value)',
    request: {
      key: {
        regexp: 'value',
      },
    },
    expected: {
      key: {
        [Op.regexp]: 'value',
      },
    },
  },
];
