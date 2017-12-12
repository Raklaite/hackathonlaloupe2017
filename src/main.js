import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/fr'
import VueRouter from 'vue-router'
import App from './App.vue'
import DataTables from 'vue-data-tables'
import routes from './routes/routes'
import store from './components/mainStore'
import 'es6-promise/auto'
// import axios from 'axios'
// import swal from 'sweetalert2/src/sweetalert2.all.js'

Vue.use(ElementUI, { locale })
Vue.config.productionTip = false
Vue.use(DataTables)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(App)

const router = new VueRouter({
  routes: routes
})

router.beforeEach((to, from, next) => { // Router naviguation Guard
  console.log(to, from, next)
  console.log(store.state)
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
