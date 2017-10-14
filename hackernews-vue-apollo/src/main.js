// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 1
import {
  ApolloClient,
  createBatchingNetworkInterface
} from 'apollo-client'
import 'tachyons'
import Vue from 'vue'
// 2
import VueApollo from 'vue-apollo'

import App from './App'

Vue.config.productionTip = false

// 3
const networkInterface = createBatchingNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj8nyb2bx0e440142pv1vlr5s'
})

// 4
const apolloClient = new ApolloClient({
  networkInterface,
  connectToDevTools: true
})

// 5
Vue.use(VueApollo)

// 6
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 7
  apolloProvider,
  render: h => h(App)
})
