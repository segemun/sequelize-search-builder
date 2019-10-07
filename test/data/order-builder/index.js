module.exports = [
  {
    it: 'Order by one field (order[key]=value)',
    request: {
      key: 'value',
    },
    expected: [
      ['key', 'value'],
    ],
  },
];
