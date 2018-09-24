<template>
  <div class='container'>
    <div class='articleList-container'>
      <p class='articleList-header'>記事一覧</p>
      <articleList v-for="post in posts" :key="post.fields.slug" :post="post"></articleList>
    </div>
  </div>
</template>

<script>
import articleList from '~/components/articleList'

export default {
  components: {
    articleList
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
      title: "記事一覧"
    }
  }
}
</script>

<style>

  .container {
    padding: 32px 16px;
  }

  .articleList-container {
    width: 800px;
    background: #fff;
    margin: 0 auto;
  }

  .articleList-header {
    padding: 16px;
    border-bottom: 1px solid #e8e8e8;
    line-height: 1;
    font-weight: bold;
    color: #777;
  }

</style>
