# Sequelize Search Builder
## About
This is a lightweight library to convert search request (e.g. HTTP) to Sequelize ORM query.

## Installation
```bash
npm install --save sequelize-search-builder
```

## Usage
Example based on Express framework.

Direct generation of where/order/limit/offset query
```javascript
const router  = require('express').Router(),
    models = require('../models'),
    searchBuilder = require('sequelize-search-builder');

router.get('/search', async (req, res, next) => {
    // Set req.query param to Search Builder constructor
    const search = new searchBuilder(models.Sequelize, req.query),
        whereQuery  = search.getWhereQuery(),
        orderQuery  = search.getOrderQuery(),
        limitQuery  = search.getLimitQuery(),
        offsetQuery = search.getOffsetQuery();
    
    res.json({
        data: await models.product.findAll({
            include: [{ all: true, nested: true, duplicating: false }],
            where:  whereQuery,
            order:  orderQuery,
            limit:  limitQuery,
            offset: offsetQuery,
            logging: console.log,
        })
    });
});
```
Full query generation example (getFullQuery method)
```javascript
res.json({
    data: await models.product.findAll(search.getFullQuery({
        include: [{ all: true, nested: true, duplicating: true }],
    }))
});
```

You can set HTTP query string as second parameter for Seach Builder constructor (it will parse by 'qs' library to object).

## Request Examples

#### Equal:
```javascript
// HTTP:
?filter[name]=John&filter[surname]=Smith
// req.query:
{ filter: { name: 'John', surname: 'Smith' } }
// getWhereQuery()
{ name: 'John', surname: 'Smith' }
```

#### Equal (OR):
```javascript
// HTTP:
?filter[name]=John&filter[surname]=Smith&filter[_condition]=or
// req.query:
{ filter: { name: 'John', surname: 'Smith', _condition: 'or', } }
// getWhereQuery()
{ [Symbol(or)]: {name: 'John', surname: 'Smith'} }
```

#### Conditions:
```javascript
// HTTP:
filter[age][gt]=100&filter[age][lt]=10&filter[age][_condition]=or&filter[name][iLike]=%john%&filter[_condition]=or
// req.query
{
  filter: {
    age: {
      gt: 100,
      lt: 10,
      _condition: 'or',
    },
    name: {
      iLike: '%john%',
    },
    _condition: 'or',
  },
}
// getWhereQuery()
{
  [Op.or]: {
    [Op.or]: [{
      age: {
        [Op.gt]: 100,
      },
    }, {
      age: {
        [Op.lt]: 10,
      },
    }],
    name: {
      [Op.like]: '%john%',
    },
  },
}
```

If _condition parameter is absent - "and" will be used by default

#### Order:
```javascript
// HTTP:
?filter[name]=desc
// req.query:
{ order: { name: 'desc' } }
// getOrderQuery()
[ [ 'name', 'desc' ] ]
```

You can find more examples in the tests of the project (test/index.js)

Git repository with DB tests: https://github.com/segemun/sequelize-search-builder-db-tests

## Allowed query conditions
| Request Option|Sequelize Symbol         |Description |
|---------------|-------------------------|------------|
| eq (=)        | = (no Symbol)           | Equal
| gt            | Op.gt         | Greater than
| gte           | Op.gte        | Greater than or equal
| lt            | Op.lt         | Less than
| lte           | Op.lte        | Less than or equal
| ne            | Op.ne         | Not equal
| between       | Op.between    | Between [value1, value2]
| notBetween    | Op.notBetween | Not Between [value1, value2]
| in            | Op.in         | In value list [value1, value2, ...]
| notIn         | Op.notIn      | Not in value list [value1, value2, ...]
| like          | Op.like       | Like search (%value, value%, %value%)
| notLike       | Op.notLike    | Not like search (%value, value%, %value%)
| iLike         | Op.iLike      | case insensitive LIKE (PG only)
| notILike      | Op.notILike   | case insensitive NOT LIKE (PG only)
| regexp        | Op.regexp     | Regexp (MySQL and PG only)
| notRegexp     | Op.notRegexp  | Not Regexp (MySQL and PG only)
| iRegexp       | Op.iRegexp    | iRegexp (case insensitive) (PG only)
| notIRegexp    | Op.notIRegexp | notIRegexp (case insensitive) (PG only)

## Configuration

You can redefine configuration variables in rc file

Just create .sequelize-search-builderrc file in root folder of your project

Or use setter for 'config' parameter (setConfig)

RC file example: 

```javascript
{
  "logging": false,
  "fields": {
    "filter" : "filter",
    "order"  : "order",
    "limit"  : "limit",
    "offset" : "offset"
  },
  "default-limit": 10
}
```

Setter example:

```javascript
new searchBuilder(models.Sequelize, req.query)
    .setConfig({
        logging: true,
    });
```

## Front-End
You can use [Sequelize Search Builder Client](http://github.com/segemun/sequelize-search-builder-client) module for the generation request http search string on the client side.

## Contribute
You are Welcome =)
Keep in mind:
```sh
npm run test
```
