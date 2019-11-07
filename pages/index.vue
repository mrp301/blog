<template>
  <div class="articleList-container">
    <p class="articleList-header">記事一覧</p>
    <articleList v-for="post in posts" :key="post.fields.slug" :post="post" />
  </div>
</template>

<script>
import articleList from '~/components/articleList'
export default {
  watchQuery: ['category'],
  components: {
    articleList,
  },
  asyncData ({ app, query }) {
    const params = {
      content_type: 'post',
      order: '-sys.updatedAt'
    }
    if (query.category) {
      params['fields.category[in]'] = query.category
    }
    return app.$contentful.getEntries(params).then(({ items }) => {
      return {
        posts: items
      }
    })
  },
  computed: {
    getAsset() {

      return "あ"
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

<style>

.articleList-container {
  width: 600px;
  background: #fff;
}

.articleList-header {
  padding: 16px;
  border-bottom: 1px solid #e8e8e8;
  line-height: 1;
  font-weight: bold;
  color: #777;
}

/* smartPhone */
@media screen and (max-width: 640px) {

  .articleList-container {
    width: 100%;
  }
}

</style>
