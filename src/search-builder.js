const _ = require('lodash');
const BuilderAbstract = require('./builder-abstract');
const WhereBuilder = require('./where-builder');
const OrderBuilder = require('./order-builder');

class SearchBuilder extends BuilderAbstract {
  getWhereQuery() {
    return SearchBuilder.prepareResponse(new WhereBuilder(this.Sequelize, this.request[this.config.fields.filter])
      .getQuery());
  }

  getOrderQuery() {
    return SearchBuilder.prepareResponse(new OrderBuilder(this.Sequelize, this.request[this.config.fields.order])
      .getQuery());
  }
  
  getLimitQuery() {
    return this.request[this.config.fields.limit] || this.config['default-limit'] || null;
  }
  
  getOffsetQuery() {
    return this.request[this.config.fields.offset] || null;
  }

  getFullQuery(target = {}) {
    const source = {
      where: this.getWhereQuery(),
      order: this.getOrderQuery(),
      limit: this.getLimitQuery(),
      offset: this.getOffsetQuery(),
    };
    console.log(source);
    return Object.assign(target, source);
  }

  static prepareResponse(query) {
    return (_.isEmpty(query) && Object.getOwnPropertySymbols(query).length === 0) ? null : query;
  }
}

module.exports = SearchBuilder;
