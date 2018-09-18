<!-- コンポーネント内のファイルでのthisはappにアクセスできる -->
<template>
<div>
  <h1>{{post.fields.title}}</h1>
  <div v-html="$md.render(post.fields.content)"></div>
</div>
</template>

<script>
export default {
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
      ]
    }
  }
}
</script>
