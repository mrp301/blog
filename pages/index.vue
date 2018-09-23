<template>
  <div>
    <div v-for="post in posts" :key="post.fields.slug">
      <ul>
        <li><nuxt-link :to="{ name: 'slug', params: { slug: post.fields.slug }}">{{ post.fields.title }}</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  asyncData ({ app }) {
     return app.$contentful.getEntries({
         //作った順
         order: '-sys.createdAt'
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
