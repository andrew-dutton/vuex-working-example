import axios from 'axios';

const state = {
  todos: []
}

const getters = {
  allTodos: state => state.todos
}

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get('https://api.airtable.com/v0/appes0AhRWhnBvazS/Revenue%20Data?api_key=keyjtlRAZz7fn2hyK')

    commit('setTodos', response.data.records)
  }
}

const mutations = {
  setTodos: (state, todos) => (state.todos = todos)
}

export default {
  state,
  getters,
  actions,
  mutations
}
