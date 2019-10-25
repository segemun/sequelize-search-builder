const isEmpty = require('lodash.isempty');
const BuilderAbstract = require('./builder-abstract');
const WhereBuilder = require('./where-builder');
const OrderBuilder = require('./order-builder');

const constructors = {
  filter: WhereBuilder,
  order: OrderBuilder,
};

class SearchBuilder extends BuilderAbstract {
  getWhereQuery() {
    return this.getQueryByType('filter');
  }

  getOrderQuery() {
    return this.getQueryByType('order');
  }

  getQueryByType(type) {
    const request = this.request[this.config.fields[type]];
    return SearchBuilder
      .prepareResponse(new constructors[type](this.Sequelize, request)
        .setConfig(this.config)
        .getQuery());
  }

  getLimitQuery() {
    return SearchBuilder.prepareIntegerQuery(this.request[this.config.fields.limit]) || this.config['default-limit'] || null;
  }

  getOffsetQuery() {
    return SearchBuilder.prepareIntegerQuery(this.request[this.config.fields.offset]) || null;
  }

  getFullQuery(target = {}) {
    return Object.assign({}, target, {
      where: this.getWhereQuery(),
      order: this.getOrderQuery(),
      limit: this.getLimitQuery(),
      offset: this.getOffsetQuery(),
    });
  }

  static prepareResponse(query) {
    return (isEmpty(query) && Object.getOwnPropertySymbols(query).length === 0) ? null : query;
  }

  static prepareIntegerQuery(query) {
    const intQuery = parseInt(query, 10);
    return (Number.isInteger(intQuery) && intQuery >= 0) ? intQuery : null;
  }
}

module.exports = SearchBuilder;
