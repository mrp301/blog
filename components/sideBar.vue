<template>
  <div class='sideBar l-sideBar'>
    <div class='profile l-bottom-midium'>
      <div class='profile-header'></div>
      <div class='profile-icon l-profile-icon'><img src='../assets/img/profile.jpg'></div>
      <div class='profile-body'>
        <div class='profile-name l-profile-name'>mrble</div>
        <div class='profile-info'>まーぶると読みます。可愛い絵がすき 東方、プリパラ、プリチャン、みらいちゃん</div>
      </div>
    </div>

    <div class='sideBar-item l-bottom-midium'>
      <h2 class='sideBar-heading'>About</h2>
      <p>仕事から趣味まで、身の回りの出来事を書きまくるだけのブログ</p>
    </div>
    <div class='sideBar-item'>
      <h2 class='sideBar-heading'>カテゴリー</h2>
      <ul>
        <li>テクノロジー</li>
        <li>イラスト</li>
        <li>日記</li>
      </ul>
    </div>
  </div>
</template>

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

  .l-sideBar {
    margin-left: 16px;
  }

  .profile {
    position: relative;
    background: #fff;

    .profile-header {
      height: 80px;
      background: #55c500;
      background-image: url('../assets/img/header.png');
      background-repeat:no-repeat;
      background-size: cover;

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

</style>
