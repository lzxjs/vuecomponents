/*
 * @Descripttion: 纵有千古，横有八荒，前途似海，来日方长。
 * @version: 1.0
 * @Author: 番茄
 * @Date: 2021-11-19 15:16:05
 * @LastEditors: 番茄
 * @LastEditTime: 2021-11-24 14:39:31
 */
import { defineComponent, Ref, ref } from 'vue'
import MonacoEditor from './components/MonacoEditor'
import { createUseStyles } from 'vue-jss'

function toJson(data: any) {
  return JSON.stringify(data, null, 2)
}

const schema = {
  type: 'string',
}

const useStyles = createUseStyles({
  editor: {
    minHeight: 400,
  },
})

export default defineComponent({
  setup() {
    const schemaRef: Ref<any> = ref(schema)
    const handleCodeChange = (code: string) => {
      let schema: any
      try {
        schema = JSON.parse(code)
      } catch (error) {
        console.log(error)
      }
      schemaRef.value = schema
    }

    const classesRef = useStyles()

    return () => {
      const classes = classesRef.value
      const code = toJson(schemaRef.value)
      return (
        <div>
          <MonacoEditor
            class={classes.editor}
            code={code}
            onChange={handleCodeChange}
            title="schema"
          />
        </div>
      )
    }
  },
})
