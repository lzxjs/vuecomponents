/*
 * @Descripttion: 纵有千古，横有八荒，前途似海，来日方长。
 * @version: 1.0
 * @Author: 番茄
 * @Date: 2021-11-19 15:16:05
 * @LastEditors: 番茄
 * @LastEditTime: 2021-11-19 16:04:10
 */
import { defineComponent, reactive } from 'vue'
import Hello from './components/HelloWorld.vue'

function renderHello(num: string) {
  return <Hello msg={num} />
}
export default defineComponent({
  setup() {
    const state = reactive({
      name: 'fanqie',
    })

    return () => {
      return (
        <div>
          123
          <p>{state.name}</p>
          {/* <Hello msg={'123hello'} /> */}
          {renderHello('123')}
        </div>
      )
    }
  },
})
