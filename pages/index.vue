<template>
  <div class="articleList-container">
    <p class="articleList-header">記事一覧</p>
    <articleList
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>
<script>
import articleList from '~/components/articleList'
export default {
  watchQuery: ['category'],
  components: {
    articleList,
  },
  asyncData({ store }) {
    return {
      posts: store.state.posts,
    }
  },
  head () {
    return {
      title: 'Yuuta',
      titleTemplate: 'Yuuta',
    }
  }
}
</script>
