import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios' // U can use Axios here if u need to

Vue.use(Vuex)
const URI = 'https://c0rs.herokuapp.com/https://www.datakick.org/api/items'
var state = {
  'date': '02/03/1998', // state can be whatever u want Boolean , Object , Array , String
  'userName': 'Tony',
  'lastName': 'Stark',
  todos: [],
  cart: [],
  products: [],
  sharedTodos: []
}
const getters = {
  sharedTodos: state => state.sharedTodos,
  all: state => state.todos,
  completed: state => state.todos.filter(todo => todo.completed),
  pending: state => state.todos.filter(todo => !todo.completed),
  date: state => state.date, // getters serv's to get the state
  brandNames: state => state.products.map(product => product.brand_name),
  totalAmount: state => {
    let amount = 0
    state.cart.forEach(item => (amount += item.price * item.count))
    return amount
  }
}
const mutations = {
  ATTACHED: (state) => {
    state.date = Date.now()
    console.log('DATE', state.date)
  },
  addProduct ({ products }, product) {
    products.push(product)
  },
  addToCart ({ cart, products }, product) {
    const itemIndex = cart.findIndex(item => item.id === product.id)

    if (itemIndex === -1) {
      cart.push({ ...product, count: 1 })
    } else {
      cart[itemIndex].count++
    }

    product.remaining > 1
      ? product.remaining--
      : products.splice(products.indexOf(product), 1)
  },
  deductItemCount ({ cart }, product) {
    const itemIndex = cart.findIndex(item => item.id === product.id)

    cart[itemIndex].count > 1
      ? cart[itemIndex].count--
      : cart.splice(itemIndex, 1)
  },
  removeItem ({ cart }, product) {
    const itemIndex = cart.findIndex(item => item.id === product.id)

    cart.splice(itemIndex, 1)
  },
  clearCart (state) {
    state.cart = []
  },
  // TODOS Mutations
  addTodo ({
    todos
  }, text) {
    todos.push({
      text,
      completed: false
    })
  },
  removeTodo: ({ todos }, todo) => {
    todos.splice(todos.indexOf(todo), 1)
  },
  exportTodo: ({ todos }, todo) => {
    state.sharedTodos.push(todo)
  },
  markTodo ({
    todos
  }, todo) {
    todos[todos.indexOf(todo)].completed = !todo.completed
  },
  markAllTodo ({
    todos
  }, completed) {
    todos.forEach(todo => (todo.completed = completed))
  },
  clearCompleted ({
    todos
  }) {
    todos.map(
      todo => (todo.completed ? todos.splice(todos.indexOf(todo), 1) : null)
    )
  }

}
const actions = {
  ATTACH_DATE: ({
    commit
  }) => { //
    commit('ATTACHED')
  },
  fetchProducts ({ commit, getters }) {
    fetch(URI)
      .then(res => res.json())
      .then(data => {
        // Get the last 50 products
        const products = data.slice(50)

        products.forEach(product => {
          // Commit only non-existing products with a size
          if (
            !getters.brandNames.includes(product.brand_name) &&
            product.size
          ) {
            commit('addProduct', {
              brand_name: product.brand_name,
              name: product.name,
              id: product.gtin14,
              remaining: 10,
              price:
                Math.floor(parseInt(product.size) * 5 / Math.random()) * 10
            })
          }
        })
      })
  }
}
export default new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
})
