/*
 * @Descripttion: 纵有千古，横有八荒，前途似海，来日方长。
 * @version: 1.0
 * @Author: 番茄
 * @Date: 2021-11-24 15:33:15
 * @LastEditors: 番茄
 * @LastEditTime: 2021-11-24 15:57:59
 */
import { computed, defineComponent } from 'vue'

import { SchemaTypes, FiledPropsDefine } from './types'
// import StringField from './fields/StringField'
import StringField from './fields/StringField'
import NumberField from './fields/NumberField'

import ObjectField from './fields/ObjectField'
import ArrayField from './fields/ArrayField'

import { retrieveSchema } from './utils'

export default defineComponent({
  name: 'SchemaItem',
  props: FiledPropsDefine,
  setup(props) {
    const retrievedSchemaRef = computed(() => {
      const { schema, rootSchema, value } = props
      return retrieveSchema(schema, rootSchema, value)
    })

    return () => {
      const { schema, rootSchema, value } = props

      const retrievedSchema = retrievedSchemaRef.value

      // TODO: 如果type没有指定，我们需要猜测这个type

      const type = schema.type

      let Component: any

      switch (type) {
        case SchemaTypes.STRING: {
          Component = StringField
          break
        }
        case SchemaTypes.NUMBER: {
          Component = NumberField
          break
        }
        case SchemaTypes.OBJECT: {
          Component = ObjectField
          break
        }
        case SchemaTypes.ARRAY: {
          Component = ArrayField
          break
        }
        default: {
          console.warn(`${type} is not supported`)
        }
      }

      return <Component {...props} schema={retrievedSchema} />
    }
  },
})
