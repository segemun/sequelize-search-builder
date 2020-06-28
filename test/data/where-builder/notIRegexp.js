const { Op } = require('sequelize');

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
        [Op.notIRegexp]: 'value',
      },
    },
  },
  {
    it: 'notIRegexp operator simple (key[notIRegexp]=value) string',
    request: 'filter[key][notIRegexp]=value',
    expected: {
      key: {
        [Op.notIRegexp]: 'value',
      },
    },
  },
];
