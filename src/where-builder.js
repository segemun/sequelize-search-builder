const BuilderAbstract = require('./builder-abstract');
const helper = require('./helper');

const allowedConditions = ['gt', 'gte', 'lt', 'lte', 'ne', 'like', 'notLike', 'iLike', 'notILike', 'regexp', 'notRegexp', 'iRegexp', 'notIRegexp'];
const allowedConditionsArray = ['between', 'notBetween', 'in', 'notIn'];

class WhereBuilder extends BuilderAbstract {
  getQuery() {
    const { request } = this;
    const query = {};

    Object.keys(request).forEach((key) => {
      const fieldValue = request[key];
      const fieldKey = helper.getFieldKey(key);

      if (helper.isComparableField(fieldKey)) {
        if (Array.isArray(fieldValue) || typeof fieldValue === 'string') {
          Object.assign(query, helper.getEqualOp(fieldKey, fieldValue));
        } else if (typeof fieldValue === 'object') {
          Object.assign(query, this._getFieldQuery(fieldKey, fieldValue));
        }
      }
    });

    return this._getConditionQuery(query, request);
  }

  _getConditionQuery(query, request) {
    const { Sequelize } = this;
    let conditionQuery = {};

    if (typeof request._condition === 'string') {
      conditionQuery = {
        [Sequelize.Op[request._condition]]: query,
      };
    } else if (Array.isArray(query) && query.length > 1) {
      conditionQuery = {
        [Sequelize.Op.and]: query,
      };
    } else {
      conditionQuery = query;
    }

    return conditionQuery;
  }

  _getFieldQuery(fieldKey, values) {
    const { Sequelize } = this;
    const fieldQuery = [];

    Object.keys(values)
      .filter(helper.isComparableField)
      .forEach((key) => {
        const value = values[key];

        if (key === 'eq') {
          fieldQuery.push(
            helper.getEqualOp(fieldKey, value),
          );
        } else if (allowedConditions.includes(key)
        || (allowedConditionsArray.includes(key) && Array.isArray(value))) {
          fieldQuery.push({
            [fieldKey]: {
              [Sequelize.Op[key]]: value,
            },
          });
        } else {
          helper.log('error', `${key} operator is missing`);
        }
      });

    return fieldQuery.length > 1 ? this._getConditionQuery(fieldQuery, values) : fieldQuery[0];
  }
}

module.exports = WhereBuilder;
