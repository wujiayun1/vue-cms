import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
// 安装vuex
Vue.use(Vuex)
const state ={
   car:JSON.parse(localStorage.getItem('car')||'[]')
}
export default new Vuex.Store({
   state,
   mutations,
   getters
})