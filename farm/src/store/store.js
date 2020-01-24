import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import market from './modules/market'
import predict from './modules/predict'
import createPersistedState from 'vuex-persistedstate'
import cart from './modules/cart'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    market,
    predict,
    cart
  },
  plugins: [createPersistedState()]
})
