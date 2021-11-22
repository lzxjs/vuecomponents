/*
 * @Descripttion: 纵有千古，横有八荒，前途似海，来日方长。
 * @version: 1.0
 * @Author: 番茄
 * @Date: 2021-11-22 11:48:26
 * @LastEditors: 番茄
 * @LastEditTime: 2021-11-22 11:48:27
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

// const schema = {
//   type: 'string',
//   minLength: 10
// }

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      maxLength: 5,
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
const validate = ajv.compile(schema)
const valid = validate({
  name: 'fanqi',
  age: 18,
  pets: ['123', '456'],
  isWorker: false,
})
if (!valid) console.log(validate.errors)
