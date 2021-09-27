import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '../components/homepage/homepage'
import Cart from '../components/cart/cart'
import Self from '../components/self/self'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: Homepage
    }, {
      path: '/cart',
      name: 'cart',
      component: Cart
    }, {
      path: '/self',
      name: 'self',
      component: Self
    }
  ]
})
