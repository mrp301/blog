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
  transition: background .1s;

  &:last-child {
    border-bottom: none;
  }

  .articleList-thumbnail {
    width: 10%;
    max-width: 50px;
    min-width: 40px;
    height: 10%;
    max-height: 50px;
    min-height: 40px;
    border: solid 1px #e8e8e8;
    line-height: 0;

    & img {
      width: 100%;
      border-radius: 2px;
    }
  }

  &:hover {
    background: #e8e8e8;
  }

  .l-articleList-body {
    display: flex;
    width: 90%;
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
</style>
