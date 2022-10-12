const state = () => ({
    properties: [],
    property:[]
  })

  const mutations = {
    SET_PROPERTIES(state, response) {
    state.properties = response
  },
  SET_PROPERTY(state, response) {
    console.log(response)
  state.property = response
},
  }
  const actions = {
    getProperties({ commit }) {
      return this.$axios
      .$get(`properties/`)
        .then((response) => {
          commit('SET_PROPERTIES', response)
          return response
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getProperty({ commit }, id) {
      return this.$axios
      .$get(`properties/${id}/`)
        .then((response) => {
          commit('SET_PROPERTY', response)
          return response
        })
        .catch((error) => {
          console.log(error)
        })
    },
}

  export default { state, mutations, actions }