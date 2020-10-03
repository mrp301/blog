<template>
  <div class="article">
    <div class="article-info">
      <time class="article-date l-right-small" :datetime="post.sys.CreateAt">公開:{{ post.fields.date }}</time>
      <time class="article-date l-right-small" :datetime="post.sys.UpdateAt">最終更新:{{ displayUpdateAt }}</time>
      <span v-if="categoryCheck(post.fields.category)" class="label">{{ post.fields.category[0] }}</span>
      <span v-else class="label">カテゴリなし</span>
    </div>
    <h1>{{post.fields.title}}</h1>
    <div v-html="post.fields.content"></div>
  </div>
</template>

<script>
import dateformat from 'dateformat';
import Prism from '~/plugins/prism';
import addClass from '~/plugins/addClass';

export default {
  mounted() {
    Prism.highlightAll();
  },
  computed: {
    displayUpdateAt () {
      return dateformat(new Date(this.post.sys.updatedAt), 'yyyy-mm-dd');
    }
  },
  methods: {
    categoryCheck(post) {
      try {
        post.fields;
        return true;
      } catch(e) {
        return false;
      }
    },
    commit(value){
      return this.$store.commit('slug/setData', value);
    },
  },
  async asyncData ({ app, params, error }) {
    return await app.$contentful.getEntry(params.slug)
    .then((entry) => {
      entry.fields.content = addClass.addClass(app.$md.render(entry.fields.content));
      return { post: entry }
    }).catch((e) => {
      if (e.sys.id === 'NotFound') {
        error({ statusCode: 404, message: 'NotFound' })
      } else {
        error({ statusCode: 500, message: 'システムエラー' })
      }
    });
  },
  head () {
    return {
      title: this.post.fields.title,
      meta: [{ hid: 'og:title', property: 'og:title', content: this.post.fields.title }],
    }
  },
};
</script>
