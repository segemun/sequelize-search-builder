const BuilderAbstract = require('./builder-abstract');
const helper = require('./helper');

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
    } else {
      conditionQuery = query;
    }

    return conditionQuery;
  }

  _getFieldQuery(fieldKey, values) {
    const { Sequelize } = this;
    const fieldQuery = [];

    Object.keys(values)
      .filter(key => helper.isComparableField(key))
      .forEach((key) => {
        const value = values[key];
        switch (key) {
          case 'eq':
            fieldQuery.push(
              helper.getEqualOp(fieldKey, value),
            );
            break;
          case 'gt':
          case 'gte':
          case 'lt':
          case 'lte':
          case 'ne':
          case 'like':
          case 'notLike':
          case 'iLike':
          case 'notILike':
            fieldQuery.push({
              [fieldKey]: {
                [Sequelize.Op[key]]: value,
              },
            });
            break;
          case 'between':
          case 'notBetween':
          case 'in':
          case 'notIn':
            if (Array.isArray(value)) {
              fieldQuery.push({
                [fieldKey]: {
                  [Sequelize.Op[key]]: value,
                },
              });
            }
            break;
          default:
            helper.log('error', `${key} operator is missing`);
            break;
        }
      });

    if (fieldQuery.length > 1) {
      return this._getConditionQuery(fieldQuery, values);
    }

    return fieldQuery[0];
  }
}

module.exports = WhereBuilder;
