<template>
  <div class='articleList-container'>
    <mainVisual></mainVisual>
    <p class='articleList-header'>記事一覧</p>
    <articleList v-for="post in posts" :key="post.fields.slug" :post="post"></articleList>
  </div>
</template>

<script>
import articleList from '~/components/articleList'

export default {

  components: {
    articleList,
  },

  asyncData ({ app }) {
     return app.$contentful.getEntries({
         //作った順
         order: '-sys.createdAt',
       })
       .then(({ items }) => {
         return {
           //postsと言うkeyにitemsと言う変数を挿入する
           posts: items
         }
       })
   },
  // htmlのheadに挿入されるやつ
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
