import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import market from './modules/market'
import seeds from './modules/seeds'
import fertilizers from './modules/fertilizers'
import predict from './modules/predict'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    market,
    fertilizers,
    seeds,
    predict
  },
  plugins: [createPersistedState()]
})
