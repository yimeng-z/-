import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '../views/homepage.vue'
import Classify from '../views/classify.vue'
import Cart from '../views/cart.vue'
import User from '../views/user.vue'
import Sigin from '../components/sigin.vue'
import Gift from '../components/gift.vue'
import Bargain from '../components/bargain.vue'
import Special from '../components/special.vue'
import Goods from '../components/goods.vue'
import Login from '../components/login.vue'
import Zhuan from '../components/zhuan.vue'
import Detal from '../components/detal.vue'
Vue.use(Router)

export default new Router({
  mode:"history",
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      component: Homepage
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/user',
      component: User
    },
    {
      path:"/sigin",
      component:Sigin
    },
    {
      path:"/gift",
      component:Gift
    },
    {
      path:"/bargain",
      component:Bargain
    },
    {
      path:"/special",
      component:Special
    },
    {
      path:"/goods/:id?",
      component:Goods
    },
    {
      path:"/login",
      component:Login
    },
    {
      path:"/zhuan/:id?",
      component:Zhuan
    },
    {
      path:"/detal/:id?",
      component:Detal
    }
  ]
})
