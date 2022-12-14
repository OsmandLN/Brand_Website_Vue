import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    shoppingItems: [],
    // form
    nextStepBtnDisabled: false
  },
  getters: {},
  mutations: {
    setProductsInfo(state, payload) {
      state.products = payload
    },
    addItems(state, payload) {
      if (state.shoppingItems.findIndex((item) => item.id === payload.id) !== -1) {
        alert('此商品已在購物袋中!')
        // eslint-disable-next-line
        return
      } else {
        state.shoppingItems.push(payload)
        // save into storage
        localStorage.setItem('toBuyItems', JSON.stringify(state.shoppingItems))

        console.log('shoppingItems', state.shoppingItems)
      }
    },
    removeItems(state, payload) {
      state.shoppingItems = state.shoppingItems.filter((unwantedItem) => unwantedItem.id !== payload.id)
      console.log('payload', payload)
    },
    increaseItemUnits(state, payload) {
      const bagItem = state.shoppingItems.find((item) => item.id === payload.id)
      bagItem.units++
    },
    decreaseItemUnits(state, payload) {
      const bagItem = state.shoppingItems.find((item) => item.id === payload.id)
      bagItem.units--
    },
    isNextStepBtnDisabled(state, payload) {
      state.nextStepBtnDisabled = payload
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
  modules: {}
})
