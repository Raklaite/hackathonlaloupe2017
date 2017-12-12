import 'element-ui/lib/theme-default/index.css'
import Vue from 'vue'
import example from '../components/example.vue'
import cart from '../components/cart.vue'
import products from '../components/products.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: example, name: 'home' },
  { component: products, path: '/products' },
  { component: cart, path: '/cart' }

]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
 function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
