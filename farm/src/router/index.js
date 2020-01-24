import Vue from 'vue'
import Router from 'vue-router'
import signup from '@/components/signup'
import login from '@/components/login'
import profile from '@/components/profile'
import farmop from '@/components/farmop'
import fmarket from '@/components/fmarket'
import home from '@/components/home'
import scheme from '@/components/scheme'
import market from '@/components/market'
import services from '@/components/services'
import croppredict from '@/components/croppredict'
import fertilizerpredict from '@/components/fertilizerpredict'
import cart from '@/components/cart'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/farmop',
      name: 'farmop',
      component: farmop
    },
    {
      path: '/fmarket',
      name: 'fmarket',
      component: fmarket
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/scheme',
      name: 'scheme',
      component: scheme
    },
    {
      path: '/market',
      name: 'market',
      component: market
    },
    {
      path: '/services',
      name: 'services',
      component: services
    },
    {
      path: '/croppredict',
      name: 'croppredict',
      component: croppredict
    },
    {
      path: '/fertilizerpredict',
      name: 'fertilizerpredict',
      component: fertilizerpredict
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ]
})
