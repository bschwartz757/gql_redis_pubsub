import Vue from 'vue'
import Router from 'vue-router'
import AppLogin from '../components/AppLogin'
// 1
import CreateLink from '../components/CreateLink'
import LinkList from '../components/LinkList'

Vue.use(Router)

export default new Router({
  // 2
  routes: [
    {
      path: '/',
      component: LinkList
    },
    {
      path: '/create',
      component: CreateLink
    },
    {
      path: '/login',
      component: AppLogin
    }
  ],
    // 3
  mode: 'history'
})
