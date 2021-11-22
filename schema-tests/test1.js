/*
 * @Descripttion: 纵有千古，横有八荒，前途似海，来日方长。
 * @version: 1.0
 * @Author: 番茄
 * @Date: 2021-11-22 11:48:26
 * @LastEditors: 番茄
 * @LastEditTime: 2021-11-22 15:36:57
 */
/*
 * @Descripttion: 纵有千古，横有八荒，前途似海，来日方长。
 * @version: 1.0
 * @Author: 番茄
 * @Date: 2021-11-22 10:59:05
 * @LastEditors: 番茄
 * @LastEditTime: 2021-11-22 11:24:55
 */
const Ajv = require('ajv')
const localize = require('ajv-i18n');
// const schema = {
//   type: 'string',
//   minLength: 10
// }

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      // format: 'test'
      test: false
    },
    age: {
      type: 'number',
    },
    pets: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    isWorker: {
      type: 'boolean',
    },
  },
  required: ['name', 'age'],
}

const ajv = new Ajv()
// ajv.addFormat('test', (data) => {
//   console.log(data);
//   return data === 'fanqie'
// })
ajv.addKeyword('test', {
  macro () {
    return {
      minLength: 10
    }
  }
  // validate (schema, data) {
  //   if (schema) return true
  //   else return schema.length === 6
  // }
})
const validate = ajv.compile(schema)
const valid = validate({
  name: 'fanqie',
  age: 18,
  pets: ['123', '456'],
  isWorker: false,
})
if (!valid) {
  localize.zh(validate.errors);
  console.log(validate.errors)
}
