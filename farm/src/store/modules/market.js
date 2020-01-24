const state = {
  market: [
    {
      item: 'ABC',
      id: 1,
      cost: '7800',
      available: '2500',
      desc: 'the best discription of the crop'
    },
    {
      item: 'CDE',
      id: 2,
      cost: '7800',
      available: '2500',
      desc: 'the best discription of the crop'
    },
    {
      item: 'EFG',
      id: 3,
      cost: '7800',
      available: '2500',
      desc: 'the best discription of the crop'
    },
    {
      item: 'GIC',
      id: 4,
      cost: '7800',
      available: '2500',
      desc: 'the best discription of the crop'
    },
    {
      item: 'IJK',
      id: 5,
      cost: '7800',
      available: '2500',
      desc: 'the best discription of the crop'
    },
    {
      item: 'KCM',
      id: 6,
      cost: '7800',
      available: '2500',
      desc: 'the best discription of the crop'
    },
    {
      item: 'MNO',
      id: 7,
      cost: '7800',
      available: '2500',
      desc: 'the best discription of the crop'
    },
    {
      item: 'OPC',
      id: 8,
      cost: '7800',
      available: '2500',
      desc: 'the best discription of the crop'
    },
    {
      item: 'QRS',
      id: 9,
      cost: '7800',
      available: '2500',
      desc: 'the best discription of the crop'
    },
    {
      item: 'STUC',
      id: 10,
      cost: '7800',
      available: '2500',
      desc: 'the best discription of the crop'
    },
    {
      item: 'UVW',
      id: 11,
      cost: '7800',
      available: '2500',
      desc: 'the best discription of the crop'
    },
    {
      item: 'UVWC',
      id: 12,
      cost: '7800',
      available: '2500',
      desc: 'the best discription of the crop'
    }
  ]
}

const getters = {
  Market: state => state.market
}

const actions = {
  AddCrop ({commit}, crop) {
    commit('NewCrop', crop)
  }
}

const mutations = {
  NewCrop (state, crop) {
    state.market.push(crop)
  }
}

export default {
  state, getters, actions, mutations
}
