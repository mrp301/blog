export const state = () => {
  posts: []
};

export const mutations = {
  setPosts(state, { posts }) {
    state.posts = posts;
  },
};

export const actions = {
  nuxtServerInit({ commit }, { app, error }) {
    return app.$contentful.getEntries({
      content_type: 'post',
      order: '-sys.updatedAt'
    }).then(({ items }) => {
      commit('setPosts', { posts: items })
    }).catch(e => {
      return error({ statusCode: 403 })
    })
  },
};

export const getters = {
  getCurrentPost(state, id) {
    return state.posts.find(({ sys: { space: { sys }}}) => {
      sys.id === id;
    });
  },
};
