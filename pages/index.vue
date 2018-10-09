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

  watchQuery: ['category'],
  components: {
    articleList,
  },

  //app = context.appの略
  //app.$contentful
  asyncData ({ app, query }) {
    const params = {
      content_type: 'post',
      order: '-sys.updatedAt'
    }

    if (query.category) {
      params['fields.category[in]'] = query.category
    }


    // if (query.name === 'イラスト') {
    //   params.content_type = 'post'
    //   params.query = 'emo'
    //
    //   //params.limit = 1
    //
    //   //params['fields.category[match]'] = 'イラスト'
    // }

    return app.$contentful.getEntries(params)
    // return app.$contentful.getEntries({

     //多分テーブル指定してる
    // content_type: 'post',

    //マッチするか調べる（＝＝と同じっすよ）
    // 'params.slug': 'update',
    //'fields.category[match]': 'update',

    //全てのクエリから検索する
    // 'query': 'update',
    //作った順

  // })
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
