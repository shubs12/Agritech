const state = {
  cart: [],
  jobs: [
    {
      name: 'Onion Seeds',
      id: 1,
      price: '99/kg'
    },
    {
      name: 'Rice Seeds',
      id: 2,
      price: '140/kg'
    },
    {
      name: 'Jowar Seeds',
      id: 3,
      price: '110/kg'
    },
    {
      name: 'Maize Seeds',
      id: 4,
      price: '120/kg'
    },
    {
      name: 'Wheat Seeds',
      id: 5,
      price: '90/kg'
    },
    {
      name: 'Bajra Seeds',
      id: 6,
      price: '150/kg'
    },
    {
      name: 'Sugarcane Seeds',
      id: 7,
      price: '100/kg'
    },
    {
      name: 'Arhar Seeds',
      id: 7,
      price: '115/kg'
    },
    {
      name: 'Cotton Seeds',
      id: 8,
      price: '200/kg'
    },
    {
      name: 'Groundnut Seeds',
      id: 9,
      price: '300/kg'
    },
    {
      name: 'Sesame Seeds',
      id: 10,
      price: '80/kg'
    },
    {
      name: 'Banana Seeds',
      id: 11,
      price: '120/kg'
    },
    {
      name: 'Cashewnut Seeds',
      id: 12,
      price: '180/kg'
    }
  ],
  fertilizers: [
    {
      name: 'Plant O Boost',
      id: 1,
      price: '545'
    },
    {
      name: 'Miracle Grow',
      id: 2,
      price: '499'
    },
    {
      name: 'Vermi Compost',
      id: 3,
      price: '400'
    },
    {
      name: 'Pot Meal',
      id: 4,
      price: '270'
    },
    {
      name: 'Grow tabs',
      id: 5,
      price: '60'
    },
    {
      name: 'Jivamrut',
      id: 6,
      price: '120'
    },
    {
      name: 'Processed Organic Manure',
      id: 7,
      price: '150'
    },
    {
      name: 'Sterameal',
      id: 8,
      price: '120'
    },
    {
      name: 'Coco Peat Block',
      id: 9,
      price: '150'
    },
    {
      name: 'Sterameal',
      id: 10,
      price: '80'
    },
    {
      name: 'Grow tabs',
      id: 11,
      price: '50'
    },
    {
      name: 'Bonemeal Powder',
      id: 12,
      price: '100'
    }
  ],
  equipment: [
    {
      name: 'Digging Trowel',
      id: 1,
      price: 250
    },
    {
      name: 'Hand Hoe',
      id: 2,
      price: 265
    },
    {
      name: 'Sickle',
      id: 3,
      price: 350
    },
    {
      name: 'Mini Tiller',
      id: 4,
      price: 8000
    },
    {
      name: 'PitchFork',
      id: 5,
      price: 359
    },
    {
      name: 'Fruit Picker',
      id: 6,
      price: 200
    },
    {
      name: 'Hand Spray',
      id: 7,
      price: 656
    },
    {
      name: 'PickAxe',
      id: 8,
      price: 550
    },
    {
      name: 'Shovel',
      id: 9,
      price: 430
    },
    {
      name: 'Hedge Shear',
      id: 10,
      price: 275
    },
    {
      name: 'Concrete Rake Wirewinding',
      id: 11,
      price: 350
    }
  ]
}

const getters = {
  Cart: state => state.cart,
  Seeds: state => state.jobs,
  Fertilizers: state => state.fertilizers,
  Equipment: state => state.equipment
}

const actions = {
  addCart ({commit}, cart) {
    commit('newCart', cart)
  }
}

const mutations = {
  newCart (state, cart) {
    alert(`${cart.name} added to cart`)
    state.cart.push(cart)
  }
}

export default {
  state, getters, actions, mutations
}
