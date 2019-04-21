export default function({ store, route }) {
  store.commit('currentPath/setData', route.path)
}
