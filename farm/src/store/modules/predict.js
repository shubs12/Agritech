import axios from 'axios'

const state = {
  crops: '',
  Fertilizer: ''
}

const getters = {
  Crop: state => state.crops,
  Fertiliser: state => state.Fertilizer
}

const actions = {
  predictor ({commit}, predict) {
    commit('preCrops', predict)
  },
  ferpred ({commit}, predict) {
    commit('preFer', predict)
  }
}

const mutations = {
  preCrops (state, predict) {
    axios.post('http://localhost:5000/crop/', predict, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        alert(response.data)
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  preFer (state, predict) {
    axios.post('http://localhost:5000/test/', predict, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        alert(response.data)
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export default {
  state, getters, actions, mutations
}
