// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 导入mui.css
import './lib/mui/css/mui.css'
// 导入扩展字体的css
import './lib/mui/css/icons-extra.css'

Vue.use(MintUI)
/* eslint-disable no-new */
 new Vue({
  el: '#app',
  router,
 render:h=>h(App)
})