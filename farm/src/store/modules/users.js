import router from '../../router'
import axios from 'axios'
const state = {
  users: [],
  login: [],
  loggedIn: false,
  token: '',
  crops: [],
  cart: []
}

const getters = {
  allUsers: state => state.users,
  loggedIn: state => state.login,
  logIn: state => state.loggedIn,
  allCrops: state => state.crops,
  allCart: state => state.cart
}

const actions = {
  addUsers ({commit}, user) {
    commit('newUsers', user)
  },
  login ({commit}, login) {
    commit('newLogin', login)
  },
  logout ({commit}) {
    commit('logot')
  },
  addCrops ({commit}, crop) {
    commit('newCrops', crop)
  },
  getCrops ({commit}) {
    commit('geCrops')
  },
  addCart ({commit}, job) {
    commit('addToCart')
  }
}

const mutations = {
  newUsers (state, user) {
    axios.post('http://localhost:3000/users/', user)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
        alert('shubham')
      })
  },
  newLogin (state, login) {
    axios.post('http://localhost:3000/users/login/', login).then((response) => {
      state.token = response.data.token
      state.login = response.data
      delete state.login.token
      state.loggedIn = true
      console.log(state.login)
      router.push('./profile')
    })
      .catch((error) => {
        console.log(error)
        alert('Combination of Email and Password is * incorrect *')
      })
  },
  logot (state) {
    state.loggedIn = false
    router.push('./')
  },
  newCrops (state, crop) {
    axios.post('http://localhost:3000/users/insert/', crop, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': state.token
      }
    })
      .then((response) => {
        state.crops.push(crop)
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  geCrops (state) {
    axios.get('http://localhost:3000/users/getCrop', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': state.token
      }
    })
      .then((response) => {
        state.crop = response.data
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  addToCart (state, job) {
    state.cart.push(job)
  }
}

export default {
  state, getters, actions, mutations
}
