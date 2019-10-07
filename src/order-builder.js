const BuilderAbstract = require('./builder-abstract');

class OrderBuilder extends BuilderAbstract {
  getQuery() {
    const { request } = this;
    const query = [];

    Object.keys(request).forEach((key) => {
      const value = key.split('.');
      value.push(request[key]);
      query.push(value);
    });

    return query;
  }
}

module.exports = OrderBuilder;
