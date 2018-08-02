import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

// const moduleA = {
//   namespaced: true,
//   state: { counta: 0 },
//   mutations: {
//     increment (state) {
//       // 这里的 `state` 对象是模块的局部状态
//       state.counta++
//     }
//   },
//   actions: {
//     incrementIfOddOnRootSum ({ state, commit, rootState }) {
//       console.log(rootState)
//       if ((state.counta + rootState.a.counta) % 2 === 0) {
//         commit('increment')
//       }
//     }
//   },

//   getters: {
//     doubleCount (state) {
//       return state.counta * 2
//     }
//   }
// }

// const moduleB = {
//   namespaced: true,
//   state: { countb: 10 },
//   mutations: {
//     increment (state) {
//       // 这里的 `state` 对象是模块的局部状态
//       state.countb++
//     }
//   },
//   actions: {
//     incrementIfOddOnRootSum ({ state, commit, rootState }) {
//       console.log(rootState.b, rootState.a, rootState.city)
//       if ((state.countb + rootState.b.countb) % 2 === 0) {
//         commit('increment')
//       }
//     }
//   },

//   getters: {
//     doubleCount (state) {
//       return state.countb * 2
//     }
//   }
// }

export default new Vuex.Store({
  state,
  mutations
  // modules: {
  //   a: moduleA,
  //   b: moduleB
  // }
})
