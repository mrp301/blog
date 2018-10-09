//モジュールモードで記載されている
export const state = () => ({
  count: 'stateの値！'
})

export const mutations = {
  setData(state, value) {
    state.count = value;
  }
}
