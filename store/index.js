//モジュールモードで記載されている
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
  //index.jsでのみ利用可能（モジュールモードの場合は）
  nuxtServerInit({ commit }, { app, error }) {
    //contentfulのapiを叩く
    return app.$contentful.getEntries({
      content_type: 'post'
    }).then(({ items }) => {
      //受け取ったデータをcommit。mutations経由で格納している。
      commit('setPosts', { posts: items })
    }).catch(e => {
      return error({ statusCode: 403 })
    })
  }
}
