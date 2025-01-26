const { Op } = require('sequelize');

module.exports = [
  {
    it: 'Is for null (key[is]=null)',
    request: {
      key: {
        is: 'null',
      },
    },
    expected: {
      key: {
        [Op.is]: null,
      },
    },
  },
];
