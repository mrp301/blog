<template>
  <header>
    <div class='header-container'>
      <div class='header l-header'>
        <div class='header-start'>
          <div class='l-right-small'>
            <nuxt-link to='/' class='header-logo'><img src='../assets/img/logo_white.png' alt='yuutaロゴ'></nuxt-link>
          </div>
          <div class='header-menu l-right-large'></div>
          <!-- <div class='header-community'>コミュニティ</div> -->
        </div>
        <!-- <div class='header-end'>
          <a href='' class='header-btn l-header-btn'>ユーザ登録</a>
          <a href='' class='header-link'>ログイン</a>
        </div> -->
      </div>
    </div>
  </header>
</template>

<style lang='scss' scoped>
.header-container {
  width: 100%;
  color: #fff;
  font-size: 1.2rem;
  background: #55c500;

  .header {
    max-width: 1000px;
    height: 56px;
    margin: 0 auto;
    padding: 0 32px;

    .header-start,
    .header-end {
      display: flex;
      align-items: center;
      width: 50%;
    }

    .header-end {
      justify-content: flex-end;
    }

    .header-logo {
      display: block;
    }

    .header-link {
      font-size: 1.2rem;
      color: #fff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        text-decoration-color: #fff;
      }
    }

    .header-btn {
      color: #fff;
      font-size: 1.2rem;
      text-decoration: none;
      border: solid 2px #fff;
      border-radius: 4px;
      padding: 4px 16px;
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

/* smartPhone */
@media screen and (max-width: 640px) {
  .header-container {
    .header {
      padding: 0 3%;

      .header-start {
        width: 30%;
      }
      .header-end {
        width: 70%;
      }

      .header-community {
        display: none;
      }
    }
  }
}
</style>
