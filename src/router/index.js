import Vue from 'vue'
import Router from 'vue-router'
import homeContainer from '../pages/home'
import memberContainer from '../pages/member'
import searchContainer from '../pages/search'
import shopcarContainer from '../pages/shopcar'
import newListContainer from '../pages/newsList'
import newInfoContainer from '../pages/newsInfo'
import goodsListContainer from '../pages/goodsList'
import goodsInfoContainer from '../pages/goodsInfo'
// 1.2 安装路由
Vue.use(Router)

export default new Router({
    routes: [
        {path:'/',redirect:'/home'},
        {path:'/home',component:homeContainer},
        {path:'/member',component:memberContainer},
        {path:'/search',component:searchContainer},
        {path:'/shopcar',component:shopcarContainer},
        {path:'/home/newsList',component:newListContainer},
        {path:'/home/newsInfo/:id',component:newInfoContainer},
        {path:'/home/goodsList',component:goodsListContainer},
        {path:'/home/goodsInfo/:id',component:goodsInfoContainer,name:'goodsInfo'},

    ],
    linkActiveClass:'mui-active'

})
