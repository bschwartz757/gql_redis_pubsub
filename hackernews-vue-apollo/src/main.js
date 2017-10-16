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
import router from './router'
import App from './App'
import {
  GC_USER_ID,
  GC_AUTH_TOKEN
} from './constants/settings'
import {
  SubscriptionClient,
  addGraphQLSubscriptions
} from 'subscriptions-transport-ws'
Vue.config.productionTip = false

// 3
const networkInterface = createBatchingNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj8nyb2bx0e440142pv1vlr5s'
})

const wsClient = new SubscriptionClient('wss://subscriptions.us-west-2.graph.cool/v1/cj8nyb2bx0e440142pv1vlr5s', {
  reconnect: true,
  connectionParams: {
    authToken: localStorage.getItem(GC_AUTH_TOKEN)
  }
})

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
)

networkInterface.use([{
  applyBatchMiddleware (req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }
    const token = localStorage.getItem(GC_AUTH_TOKEN)
    req.options.headers.authorization = token ? `Bearer ${token}` : null
    next()
  }
}])

const apolloClient = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
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

// 1
let userId = localStorage.getItem(GC_USER_ID)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  apolloProvider,
  router,
  // 2
  data: {
    userId
  },
  render: h => h(App)
})
