import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListPage from '@/routes/product/List'
import DetailPage from '@/routes/product/Detail'
import CartPage from '@/routes/cart'

import UserPage from '@/routes/user'
import UserInfo from '@/routes/user/Info'
import UserHome from '@/routes/user/Home'

Vue.use(Router)

export default new Router({
  //mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'ListPage',
      component: ListPage
    },
    {
      path: '/detail/:id',
      name: 'DetailPage',
      component: DetailPage
    },
    {
      path: '/cart',
      name: 'CartPage',
      component: CartPage
    },
    {
      path: '/user',
      name: 'UserPage',
      component: UserPage,
      children:[
        {
          path:"info",
          component:UserInfo
        },
        {
          path:"",
          component:UserHome
        }
      ]
    },
    {
      path:"/404",
      name:"/404",
      component:{template:"<h1>404</h1>"}
    },
    {
      path:"*",
      redirect:"/404"
    }
  ]
})
