/*
 * @Descripttion: 纵有千古，横有八荒，前途似海，来日方长。
 * @version: 1.0
 * @Author: 番茄
 * @Date: 2021-11-12 15:35:18
 * @LastEditors: 番茄
 * @LastEditTime: 2021-11-17 09:43:22
 */
import { createApp, defineComponent, h, reactive } from 'vue'
// import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'

// h函数是对createVNode的进一步封装使用
// const App = defineComponent({
//   render() {
//     return h('div', { id: 'app' }, [
//       h('img', {
//         src: '',
//       }),
//       h(HelloWorld),
//     ])
//   },
// })

const App = defineComponent({
  setup() {
    const state = reactive({
      name: 'fanqie',
    })

    return () => {
      return h('div', { id: 'app' }, [
        h('img', {
          src: '',
        }),
        h('p', state.name),
      ])
    }
  },
})
createApp(App).mount('#app')
