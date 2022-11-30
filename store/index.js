const state = () => ({
    properties: [],
    property:[],
    services: [
      {
        id: 1,
        poster: 'https://images.unsplash.com/photo-1629016943072-0bf0ce4e2608?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
        name: "Land Sale & Leasing",
        description: 'We will focus on facilities management function and co-ordination, and you will focus on your business.'
      },
      {
        id: 2,
        name: "Property Management",
        poster: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        description: 'We will focus on facilities management function and co-ordination, and you will focus on your business.'
      },
      {
        id: 3,
        poster: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80',
        name: "Property Valuation",
        description: 'We will focus on facilities management function and co-ordination, and you will focus on your business.'
      },
    ],
    testimonials: [
      {
        id: 1,
        poster: 'https://images.unsplash.com/photo-1560856218-0da41ac7c66a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        name: "Kelvin Kimemia",
        description: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to.'
      },
      {
        id: 2,
        poster: 'https://images.unsplash.com/photo-1560856218-0da41ac7c66a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        name: "Kelvin Kimemia",
        description: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to '
      },
      {
        id: 3,
        poster: 'https://images.unsplash.com/photo-1560856218-0da41ac7c66a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        name: "Kelvin Kimemia",
        description: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to '
      },
      {
        id: 4,
        poster: 'https://images.unsplash.com/photo-1560856218-0da41ac7c66a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        name: "Kelvin Kimemia",
        description: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to '
      },
    ],
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