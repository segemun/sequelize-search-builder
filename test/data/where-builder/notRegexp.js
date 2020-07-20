const { Op } = require('sequelize');

module.exports = [
  {
    it: 'Not Regexp operator simple (key[notRegexp]=value)',
    request: {
      key: {
        notRegexp: 'value',
      },
    },
    expected: {
      key: {
        [Op.notRegexp]: 'value',
      },
    },
  },
];
