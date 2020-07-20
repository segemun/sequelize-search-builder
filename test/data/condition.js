const { Op } = require('sequelize');

module.exports = [
  {
    it: 'Condition with one field with _condition AND parameter',
    request: {
      key: {
        gt: 10,
        lt: 100,
        _condition: 'and',
      },
    },
    expected: {
      [Op.and]: [
        {
          key: {
            [Op.gt]: 10,
          },
        },
        {
          key: {
            [Op.lt]: 100,
          },
        },
      ],
    },
  },
  {
    it: 'Condition with one field with _condition AND parameter (string)',
    request: 'filter[key][gt]=10&filter[key][lt]=100&filter[key][_condition]=and',
    expected: {
      [Op.and]: [
        {
          key: {
            [Op.gt]: '10',
          },
        },
        {
          key: {
            [Op.lt]: '100',
          },
        },
      ],
    },
  },
  {
    it: 'Condition with one field without _condition AND parameter',
    request: {
      key: {
        gt: 10,
        lt: 100,
      },
    },
    expected: {
      [Op.and]: [
        {
          key: {
            [Op.gt]: 10,
          },
        },
        {
          key: {
            [Op.lt]: 100,
          },
        },
      ],
    },
  },
  {
    it: 'Condition with one field without _condition AND parameter (string)',
    request: 'filter[key][gt]=10&filter[key][lt]=100&filter[key]',
    expected: {
      [Op.and]: [
        {
          key: {
            [Op.gt]: '10',
          },
        },
        {
          key: {
            [Op.lt]: '100',
          },
        },
      ],
    },
  },
  {
    it: 'Condition with one field with _condition OR parameter',
    request: {
      key: {
        gt: 10,
        lt: 100,
        _condition: 'or',
      },
    },
    expected: {
      [Op.or]: [
        {
          key: {
            [Op.gt]: 10,
          },
        },
        {
          key: {
            [Op.lt]: 100,
          },
        },
      ],
    },
  },
  {
    it: 'Condition with several fields with _condition OR parameter',
    request: {
      key1: {
        gt: 10,
        lt: 100,
        _condition: 'or',
      },
      key2: {
        like: '%value%',
      },
      _condition: 'or',
    },
    expected: {
      [Op.or]: {
        [Op.or]: [{
          key1: {
            [Op.gt]: 10,
          },
        }, {
          key1: {
            [Op.lt]: 100,
          },
        }],
        key2: {
          [Op.like]: '%value%',
        },
      },
    },
  },
  {
    it: 'Condition with several fields with _condition OR parameter (string)',
    request: 'filter[key1][gt]=10&filter[key1][lt]=100&filter[key1][_condition]=or&filter[key2][like]=%value%&filter[_condition]=or',
    expected: {
      [Op.or]: {
        [Op.or]: [{
          key1: {
            [Op.gt]: '10',
          },
        }, {
          key1: {
            [Op.lt]: '100',
          },
        }],
        key2: {
          [Op.like]: '%value%',
        },
      },
    },
  },
];
