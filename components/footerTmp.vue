<template>
  <footer>
    <div class='footer-container'>
      <div class='footer l-footer'>
        <ul class='footer-list'>
          <li><a href=''>© 2011-2018 Increments Inc.</a></li>
          <li><a href=''>利用契約</a></li>
          <li><a href=''>ガイドライン</a></li>
          <li><a href=''>プライバシー</a></li>
          <li><a href=''>ヘルプ</a></li>
        </ul>
        <ul class='footer-list'>
          <li><a href=''>qiitaとは</a></li>
          <li><a href=''>ユーザー</a></li>
          <li><a href=''>タグ</a></li>
          <li><a href=''>投稿</a></li>
          <li><a href=''>ブログ</a></li>
          <li><a href=''>API</a></li>
          <li><a href=''>Yuuta:Team</a></li>
          <li><a href=''>ご意見</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang='scss' scoped>
  .footer-container {
    background: #f6f6f6;
    padding: 8px 16px 16px;

    .footer {
      width: 1100px;
      height: 56px;
      margin: 0 auto;
    }

    .l-footer {
      display: flex;
      justify-content: space-between;
    }

    .footer-list {
      display: flex;
      align-items: center;

      li {
        margin-right: 8px;
        align-items: center;

        &:last-child {
          margin-right: 0;
        }

        a {
          font-size: 12px;
          color: #888;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>
