export const state = () => {
  return {
    posts: []
  }
}

export const mutations = {
  setPosts(state, { posts }) {
    state.posts = posts
  }
}

export const actions = {
  nuxtServerInit({ commit }, { app, error }) {
    return app.$contentful.getEntries({
      content_type: 'post'
    }).then(({ items }) => {
      commit('setPosts', { posts: items })
    }).catch(e => {
      return error({ statusCode: 403 })
    })
  }
}
