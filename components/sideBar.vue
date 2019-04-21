<template>
  <div class='sideBar l-sideBar'>
    <div class='profile l-bottom-midium'>
      <div class='profile-header'></div>
      <div class='profile-icon l-profile-icon'><img src='../assets/img/profile.jpg'></div>
      <div class='profile-body'>
        <div class='profile-name l-profile-name'>mrble</div>
        <div class='profile-info'>女児です。</div>
      </div>
    </div>

    <div class='sideBar-item l-bottom-midium'>
      <h2 class='sideBar-heading'>About</h2>
      <p>仕事から趣味まで、身の回りの出来事を書きまくるだけのブログ</p>
    </div>
    <div class='sideBar-item'>
      <h2 class='sideBar-heading'>カテゴリー</h2>
      <ul>
        <li v-for="category in categories" :key="category.name">
          <nuxt-link :to="{name: 'index', query: {category: category.name} }">{{ category.name }}({{ category.count }})</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  computed: {
    //postsに記事情報がすでに入ってる
    //this.postsで見れるよ。記事の数だけ要素を持った配列が帰ってくる
    //...mapState(['posts']),

    categories () {
      //記事の数分の配列を持っている。各記事のカテゴリを参照する場合、下記のようになる
      //console.log(this.posts[0].fields.category[0]);
      const categories = []

      //post=> 関数部分の処理を配列の要素全てに適応させた上で配列[post]を生成する
      //このpostはthis.postsを引数として受け取っている
      this.$store.state.posts.map(post => {
        //isArray()オブジェクトが配列ならtrue。
        //オブジェクトが配列じゃない場合true,処理終了
        //「カテゴリなし」対策。配列を持っていない場合弾く
        if (!Array.isArray(post.fields.category)) {
          return
        }
        //find() 配列内で一番最初に条件を満たす要素を取り出す
        //第１引数にコールバック関数。こいつの審議値で判断する。
        //categoryとcategorysは恐らく同じオブジェクトを参照している
        const category = categories.find(category => category.name === post.fields.category[0])
        if (category) {
        //既存のカテゴリの場合、記事数を加算
          category.count = category.count + 1
        } else {
        //新しいカテゴリを発見した場合オブジェクトに新しい要素を記事数1で追加
          categories.push({
            name: post.fields.category[0],
            count: 1
          })
        }
      })
      //name,countプロパティを持っている。
      return categories
    }
  }
}
</script>

<style lang='scss' scoped>

.sideBar {
  width: 200px;

  * p {
    line-height: 1.5;
  }

  .sideBar-item {
    padding: 16px;
    background: #fff;
    font-size: 12px;
  }

  .sideBar-heading {
    font-size: 16px;
    font-weight: 700;
    color: #333;
  }
}

.profile {
  position: relative;
  background: #fff;

  .profile-header {
    height: 80px;
    background: #55c500;
    background-image: url('../assets/img/profileHeader.png');
    background-repeat:no-repeat;
    background-size: cover;
    background-position: center;

    & > img {
      width: 100%;
    }
  }

  /* todo:あとでコンポーネント分ける。ユーザーデータもcontentfulに載せる */

  .profile-icon {
    width: 60px;
    height: 60px;
    border: solid 4px #fff;
    border-radius: 50%;


    & > img {
      width: 100%;
      border-radius: 50%;
    }
  }

  .l-profile-icon {
    position: absolute;
    top: 50px;
    left: 8px;
  }

  .profile-body {
    padding: 0 16px 16px;

    .profile-name {
      font-weight: 600;
      color: #333;
    }

    .l-profile-name {
      margin-left: 60px;
    }

    .profile-info {
      font-size: 12px;
      line-height: 1.5;
    }
  }
}

/* smartPhone */
@media screen and (max-width: 640px) {
  .sideBar {
    width: 100%;
  }
}

</style>
