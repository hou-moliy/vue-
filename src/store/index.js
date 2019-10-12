/*
* Vuex最核心的管理对象store
* */
import Vue from 'vue'
import Vuex from 'vuex'
// eslint-disable-next-line no-unused-vars
import state from './state.js'
// eslint-disable-next-line no-unused-vars
import mutations from './mutations.js'
// eslint-disable-next-line no-unused-vars
import actions from './actions.js'
// eslint-disable-next-line no-unused-vars
import getters from './getters.js'
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
