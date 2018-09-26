<template>
  <div class='articleList l-articleList'>
    <div class='articleList-thumbnail l-right-small'>
      <div v-if="thumbnailCheck(post.fields.thumbnail)">
        <img v-bind:src="post.fields.thumbnail.fields.file.url">
      </div>
      <div v-else>
        <img src='../assets/img/no_image.png'>
      </div>
    </div>
    <div class='articleList-body'>
      <nuxt-link class='articleList-title' :to="{ name: 'slug', params: { slug: post.fields.slug }}">{{ post.fields.title }}</nuxt-link>
      <div class='articleList-info'>公開日:<time v-bind:datetime="post.fields.date">{{post.fields.date}}</time></div>
    </div>
    <div class='l-articleList-label'>
      <div v-if="categoryCheck(post.fields.category)">
        <span class='label l-right-xsmall' v-for='value in post.fields.category' :key='value.category'>{{ value }}</span>
      </div>
      <div v-else>
        <span class='label'>カテゴリなし</span>
      </div>
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

  computed: {
    categoryReplace() {
      console.log('スラッグ' + this.post.fields.category);
      //console.log(this.post.fields.category);
      //this.post.fields.category.splice(0, 1);
      //console.log(this.post.fields.category);
      //const post =  JSON.stringify(this.post.fields.category);
      //return this.post.fields.category.replace('\"', '');
      return this.post.fields.category;
      //return post;
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

.articleList {
  padding: 16px;
  border-bottom: 1px solid #e8e8e8;

  &:last-child {
    border-bottom: none;
  }

  & a {
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

  .l-articleList-label {
    position: absolute;
    top: 16px;
    right: 16px;

    & span {
      vertical-align: top;
    }
  }
}

.l-articleList {
  position: relative;
  display: flex;
}

</style>
