const state = {
  jobs: [
    {
      name: 'ABC',
      id: 1
    },
    {
      name: 'CDE',
      id: 2
    },
    {
      name: 'EFG',
      id: 3
    },
    {
      name: 'GIC',
      id: 4
    },
    {
      name: 'IJK',
      id: 5
    },
    {
      name: 'KCM',
      id: 6
    },
    {
      name: 'MNO',
      id: 7
    },
    {
      name: 'OPC',
      id: 8
    },
    {
      name: 'QRS',
      id: 9
    },
    {
      name: 'STUC',
      id: 10
    },
    {
      name: 'UVW',
      id: 11
    },
    {
      name: 'UVWC',
      id: 12
    }
  ],
  viewJob: []
}

const getters = {
  allJobs: state => state.jobs,
  viewPro: state => state.viewJob
}

const actions = {
  fetchJobs ({commit}, jobs) {
    commit('setJobs', jobs)
  },
  addJobs ({commit}, job) {
    commit('newJob', job)
  },
  fetchJob ({commit}, job) {
    commit('setJob', job)
  }
}

const mutations = {
  setJobs (state, jobs) {
    state.projects = jobs
  },
  newJob (state, job) {
    state.projects.push(job)
  },
  setJob (state, job) {
    state.viewJob = state.jobs.filter(p => job.name === p.name)
  }
}

export default {
  state, getters, actions, mutations
}
