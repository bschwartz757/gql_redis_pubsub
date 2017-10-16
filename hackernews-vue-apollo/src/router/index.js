import Vue from 'vue'
import Router from 'vue-router'

import AppLogin from '../components/AppLogin'
import CreateLink from '../components/CreateLink'
import LinkList from '../components/LinkList'
// 1
import Search from '../components/Search'

Vue.use(Router)

export default new Router({
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
    },
    // 2
    {
      path: '/search',
      component: Search
    }
  ],
  mode: 'history'
})
