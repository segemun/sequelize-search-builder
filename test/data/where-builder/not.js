const { Op } = require('sequelize');

module.exports = [
  {
    it: 'Not for null (key[not]=null)',
    request: {
      key: {
        not: 'null',
      },
    },
    expected: {
      key: {
        [Op.not]: null,
      },
    },
  },
];
