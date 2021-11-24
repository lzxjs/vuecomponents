/*
 * @Descripttion: 纵有千古，横有八荒，前途似海，来日方长。
 * @version: 1.0
 * @Author: 番茄
 * @Date: 2021-11-24 15:33:15
 * @LastEditors: 番茄
 * @LastEditTime: 2021-11-24 15:56:34
 */
import { defineComponent, PropType, provide } from 'vue'

import { Schema } from './types'

import SchemaItem from './SchemaItem'
import { SchemaFormContextKey } from './context'

// type A = typeof SchemaItem

export default defineComponent({
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true,
    },
    value: {
      required: true,
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
  },
  name: 'SchemaForm',
  setup(props, {}) {
    const handleChange = (v: any) => {
      props.onChange(v)
    }

    const context: any = {
      SchemaItem,
    }

    provide(SchemaFormContextKey, context)

    return () => {
      const { schema, value } = props
      return (
        <SchemaItem
          schema={schema}
          rootSchema={schema}
          value={value}
          onChange={handleChange}
        />
      )
    }
  },
})
