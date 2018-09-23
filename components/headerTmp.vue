<template>
  <header>
    <div class='header-container'>
      <div class='header l-header'>
        <div class='header-start'>
          <div class='l-right-small'>
            <nuxt-link to='/' class='header-logo'><img src='../assets/img/logo_white.png' alt='yuutaロゴ'></nuxt-link>
          </div>
          <div class='header-menu l-right-large'></div>
          <div class='header-community'>コミュニティ</div>
        </div>
        <div class='header-end'>
          <a href='' class='header-btn l-header-btn'>ユーザ登録</a>
          <a href='' class='header-link'>ログイン</a>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang='scss' scoped>
  .header-container {
    color: #fff;
    font-size: 12px;
    background: #55c500;

    .header {
      max-width: 1100px;
      height: 56px;
      margin: 0 auto;

      .header-start,
      .header-end {
        display: flex;
        align-items: center;
      }

      .header-logo {
        display: block;
      }

      .header-link {
        font-size: 12px;
        color: #fff;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
          text-decoration-color: #fff;
        }
      }

      .header-btn {
        color: #fff;
        font-size: 12px;
        text-decoration: none;
        border: solid 2px #fff;
        border-radius: 4px;
        padding: 8px 16px;
        transition: background-color .08s;

        &:hover {
          background-color: rgba(255, 255, 255, .3);
        }
      }

      .l-header-btn {
        margin-right: 16px;
      }
    }

    .l-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
