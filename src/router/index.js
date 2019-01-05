import Vue from 'vue'
import Router from 'vue-router'
import homeContainer from '../pages/home'
import memberContainer from '../pages/member'
import searchContainer from '../pages/search'
import shopcarContainer from '../pages/shopcar'
import newListContainer from '../pages/newsList'
// 1.2 安装路由
Vue.use(Router)

export default new Router({
    routes: [
        {path:'/',redirect:'/home'},
        {path:'/home',component:homeContainer},
        {path:'/member',component:memberContainer},
        {path:'/search',component:searchContainer},
        {path:'/shopcar',component:shopcarContainer},
        {path:'/home/newsList',component:newListContainer}
    ],
    linkActiveClass:'mui-active'

})
