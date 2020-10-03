<template>
  <nuxt-link class='articleList l-articleList' :to="{ name: 'slug', params: { slug: post.sys.id } }">
    <div class='articleList-thumbnail l-right-small'>
      <img :src="thumbnailCheck(post.fields.thumbnail) ? post.fields.thumbnail.fields.file.url : 'img/no_image.png'">
    </div>
    <div class='l-articleList-body'>
      <div class='articleList-body'>
        <div class='articleList-title'>{{ post.fields.title }}</div>
        <div class='articleList-info'>
          更新日:<time v-bind:datetime="post.sys.UpdateAt">{{ displayUpdateAt }}</time>
        </div>
      </div>
      <div class='articleList-label'>
        <div v-if="categoryCheck(post.fields.category)">
          <div :to="{name: 'index', query: {category: post.fields.category[0]} }">
            <span class='label' v-for='value in post.fields.category' :key='value.category'>{{ value }}</span>
          </div>
        </div>
        <div v-else>
          <span class='label'>カテゴリなし</span>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
import dateformat from 'dateformat';
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
  computed: {
    displayUpdateAt () {
      return dateformat(new Date(this.post.sys.updatedAt), 'yyyy年m月d日');
    }
  },
  methods: {
    thumbnailCheck(post) {
      try {
        post.fields;
        return true;
      } catch(e) {
        return false;
      }
    },
    categoryCheck(post) {
      try {
        post.fields;
        return true;
      } catch(e) {
        return false;
      }
    },
  }
}
</script>
