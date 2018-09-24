<template>
  <div class='articleList l-articleList'>
    <div class='articleList-thumbnail l-right-small'>
      <div v-if="thumbnailChack(post.fields.thumbnail)">
        <img v-bind:src="post.fields.thumbnail.fields.file.url">
      </div>
      <div v-else>
        <img src='../assets/img/uesr_icon_sample.png'>
      </div>
    </div>
    <div class='articleList-body'>
      <nuxt-link class='articleList-title' :to="{ name: 'slug', params: { slug: post.fields.slug }}">{{ post.fields.title }}</nuxt-link>
      <div class='articleList-info'>記事の情報</div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },

  methods: {
    thumbnailChack : function(post) {
      try {
        post.fields;
        return true;
      } catch(e) {
        return false;
      }
    }
  }

}
</script>

<style lang='scss' scoped>

  .articleList {
    padding: 16px;
    border-bottom: 1px solid #e8e8e8;

    &:last-child {
      border-bottom: none;
    }

    & > a {
      text-decoration: none;
    }

    .articleList-thumbnail {
      width: 40px;
      height: 40px;

      & img {
        width: 100%;
        border-radius: 2px;
      }
    }

    .articleList-body {
      line-height: 1.4;

      .articleList-title {
        color: #777;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 4px;
        display: block;
      }

      .articleList-info {
        color: #999;
        font-size: 12px;
      }
    }
  }

  .l-articleList {
    display: flex;
  }

</style>
