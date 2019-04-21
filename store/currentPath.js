export const state = () => ({
  currentPath: '/'
})

export const mutations = {
  setData(state, value) {
    state.currentPath = value;
  }
}
