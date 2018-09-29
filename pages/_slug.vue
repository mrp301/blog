<!-- コンポーネント内のファイルでのthisはappにアクセスできる -->
<template>
  <div class='article'>
    <div class='article-info'>
      <time class='article-date l-right-small' :datetime="post.sys.CreateAt">公開:{{post.fields.date}}</time>
      <time class='article-date l-right-small' :datetime="post.sys.UpdateAt">最終更新:{{ displayUpdateAt }}</time>
      <span v-if="categoryCheck(post.fields.category)" class='label'>{{post.fields.category[0]}}</span>
      <span v-else class='label'>カテゴリなし</span>
    </div>
    <h1>{{post.fields.title}}</h1>
    <div v-html="$md.render(post.fields.content)"></div>
  </div>
</template>

<script>

import dateformat from 'dateformat';

export default {

  computed: {
    displayUpdateAt () {
      return dateformat(new Date(this.post.sys.updatedAt), 'yyyy-mm-dd');
    }
  },

  methods: {
    categoryCheck : function(post) {
      try {
        post.fields;
        return true;
      } catch(e) {
        return false;
      }
    }
  },

  //[asyncData]ページのレンダリング前に処理ができる
  asyncData ({ app, params, error }) {
    //記事の情報持ってくるやつ
    //getEntriesで引数を送っている。
    return app.$contentful.getEntries({
        //table名
        content_type: 'post',
        'fields.slug[in]': params.slug,
        //ロードする記事数
        limit: 1

      //promiseの記述。非同期処理が全て終わったら動くやつ。
      }).then(entries => {
        if (entries.items.length === 0) {
          return error({ statusCode: 404 })
        }
        return {
          post: entries.items[0]
        }
      }).catch(error => {
        return error({ statusCode: 500 })
      })
  },
  head () {
    return {
      title: this.post.fields.title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: this.post.fields.title },
      ]
    }
  }
}
</script>

<style lang='scss'>
.article {
  background: #fff;
  max-width: 700px;
  width: 100%;
  padding: 32px;

  .article-info {

    & > * {
      vertical-align: middle;
    }

    .article-date {
      color: #777;
      font-size: 1.2rem;
    }
  }
}

@media screen and (max-width: 640px) {

  .article {
    padding-right: 3%;
    padding-left: 3%;
  }
}
</style>
