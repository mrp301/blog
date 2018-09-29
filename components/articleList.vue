<template>
  <nuxt-link class='articleList l-articleList' :to="{ name: 'slug', params: { slug: post.fields.slug }}">
    <div class='articleList-thumbnail l-right-small'>
      <div v-if="thumbnailCheck(post.fields.thumbnail)">
        <img v-bind:src="post.fields.thumbnail.fields.file.url">
      </div>
      <div v-else>
        <img src='../assets/img/no_image.png'>
      </div>
    </div>
    <div class='l-articleList-body'>
      <div class='articleList-body'>
        <div class='articleList-title'>{{ post.fields.title }}</div>
        <div class='articleList-info'>公開日:<time v-bind:datetime="post.fields.date">{{post.fields.date}}</time></div>
      </div>
      <div class='articleList-label'>
        <div v-if="categoryCheck(post.fields.category)">
          <span class='label' v-for='value in post.fields.category' :key='value.category'>{{ value }}</span>
        </div>
        <div v-else>
          <span class='label'>カテゴリなし</span>
        </div>
      </div>
    </div>
  </nuxt-link>
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
    thumbnailCheck : function(post) {
      try {
        post.fields;
        return true;
      } catch(e) {
        return false;
      }
    },
    categoryCheck : function(post) {
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

<style lang='scss' scoped>

.l-articleList {
  position: relative;
  display: flex;
}

.articleList {
  width: 100%;
  padding: 1.6rem;
  border-bottom: 1px solid #e8e8e8;
  text-decoration: none;

  &:last-child {
    border-bottom: none;
  }

  .articleList-thumbnail {
    width: 40px;
    height: 40px;

    & img {
      width: 100%;
      border-radius: 2px;
    }
  }

  .l-articleList-body {
    display: flex;
    width: 100%;
  }

  .articleList-body {
    line-height: 1.4;
    width: 70%;

    .articleList-title {
      color: #777;
      font-size: 1.6rem;
      font-weight: 700;
      margin-bottom: 4px;
      display: block;
    }

    .articleList-info {
      color: #999;
      font-size: 1.2rem;
    }
  }

  .articleList-label {
    width: 30%;
    display: flex;
    justify-content: flex-end;

    & span {
      vertical-align: top;
    }
  }
}

/* smartPhone */
@media screen and (max-width: 640px) {

}

</style>
