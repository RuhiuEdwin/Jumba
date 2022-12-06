const state = () => ({
    properties: [],
    property:[],
    services: [
      {
        id: 1,
        poster: 'https://images.unsplash.com/photo-1629016943072-0bf0ce4e2608?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
        name: "Land Sale & Leasing",
        description: 'Our land portfolio kis diverse, we sell prime commercial plot, Residential plot, agricultural land all in urban cities andupcounty. Our minimum size being 1/8 Acre scaling up to 400 Acres . We take pride having the best and most flexible prices in the market'
      },
      {
        id: 2,
        name: "Property Management",
        poster: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        description: 'We manage estates, apartments, flats etc. Our experienced team offer professional and top notch service so ypu can focus on you and other busineses. We collect rent revenue, source tenants, provide record keeping prepare and facilitate tenancy agreements.'
      },
      {
        id: 3,
        poster: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80',
        name: "Property Valuation",
        description: 'We team up with government registered propery valuers, planners and land surveyors ensuring we give our clients accurate and best value for their property.'
      },
      {
        id: 4,
        poster: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        name: "Diaspora Partnerships",
        description: 'We are committed to walking the journey of owning property together with our clients living in the diaspora in the most professional, personal and flexible way.'
      },
      {
        id: 5,
        poster: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80',
        name: "Construction & Development",
        description: 'We are a one stop for construction and development. We provide both architectural and structural plans suitable to our client needs. For reidential houses, massionetes, bungalows, apartments and offices, we source construction materials and give expert builders who deliver timely and quality'
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
    values: [
      {
        id: 1,
        poster: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        name: "Integrity",
        description: 'Match behavior with values.'
      },
      {
        id: 2,
        name: "Failure leads to success",
        poster: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        description: 'Learn from mistakes.'
      },
      {
        id: 3,
        poster: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        name: "Speak with good purpose",
        description: 'Speak Honestly and Kindly.'
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