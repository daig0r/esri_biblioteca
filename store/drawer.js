export const state = () => ({
  visibility: true
})

export const mutations = {
  toggleVisibility(state, newValue) {
    state.visibility = newValue
  }
}

export const getters = {
  getVisibility: (state) => state.visibility
}
