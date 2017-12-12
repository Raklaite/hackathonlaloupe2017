<template>
<div id="app">

    <div class="row">
      <div class="col-md-12">
    <h1 class="center">{{ title }}</h1>
    <todo></todo>
    <!-- <router-view></router-view>  // If u wanna use in "vue-router" mode uncomment this line -->
    </div>
     <div class="col-md-12">
       <h1 class="center" >{{ title1 }}</h1>
<example></example>
     </div>
     <h1 class="center" >{{ listeDeCourse }}</h1>
        <div class="col-md-12">
<div>
    <h1>
    </h1>
    <router-link :to="{ path: 'products' }"> Produits </router-link>
    <span>Le router est activé ici</span>
    <router-link :to="{ path: 'cart' }"> Ma liste </router-link>

</div>
<router-view></router-view>
     </div>
  </div>
  </div>
</template>
<script>
import products from './components/products.vue'
import cart from './components/cart.vue'
import example from './components/example'
import todo from './components/todo'
export default {
  components: {
    todo,
    example,
    products,
    cart
  },
  data () {
    return {
      listeDeCourse: 'Ma liste de course',
      title: 'Todo list example',
      title1: 'Navbar and select example'
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  color: #42b983;
}
h1 {
  font-weight: normal;
}
h1>a {
  color: inherit;
  text-decoration: none;
}
ul {
  list-style-type: none;
  padding: 0;
}
li>div {
  margin-top: 10px;
}
#app {
    transition: all 0.5s;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  a {
    color: #42b983;
  }
  h1,
  h2 {
    font-weight: normal;
  }
  div>a {
    display: block;
    font-size: 20px;
    margin: 10px;
  }
</style>
