import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: []
  },
  getters: {
  },
  mutations: {
    setProductsInfo(state, payload) {
      state.products = payload
    }
  },
  actions: {
    fetchProductsInfo(context, payload) {
      axios.get('datas/products.json')
        .then((response) => {
          // console.log('response', response)
          context.commit('setProductsInfo', response.data.results)
          // console.log('response.data.results', response.data.results)
        })
        .catch((error) => {
          console.log('error', error)
        })
    }
  },
  modules: {
  }
})
