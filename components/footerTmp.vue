<template>
  <footer>
    <div class='footer-container'>
      <div class='footer l-footer'>
        <ul class='footer-list footer-list-start'>
          <li><a href=''>© 2018 Hishinuma Inc.</a></li>
          <li><a href=''>利用契約</a></li>
          <li><a href=''>ガイドライン</a></li>
        </ul>
        <ul class='footer-list footer-list-end'>
          <li><a target='_blank' href='https://github.com/hishinuma616/blog'>github</a></li>
          <li><a target='_blank' href='https://twitter.com/tubdaka616'>twitter</a></li>
          <li><a href=''>タグ</a></li>
          <li><a href=''>Yuuta:Team</a></li>
          <li><a href=''>ご意見</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang='scss' scoped>

.footer-container {
  width: 100%;
  background: #f6f6f6;
  padding: 8px 16px 16px;

  .footer {
    max-width: 1000px;
    height: 56px;
    margin: 0 auto;
    padding: 0 32px;
  }

  .l-footer {
    display: flex;
    justify-content: space-between;
  }

  .footer-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    &.footer-list-start {
      width: 60%;
    }

    &.footer-list-end {
      justify-content: flex-end;
      width: 40%;
    }

    li {
      margin-right: 8px;
      align-items: center;

      a {
        font-size: 1.2rem;
        color: #888;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

/* smartPhone */
@media screen and (max-width: 640px) {

  .footer-container {
    padding-right: 3%;
    padding-left: 3%;

    .footer {
      height: auto;
      padding: 0;
    }

    .l-footer {
      display: block;
    }

    .footer-list {
      flex-wrap: wrap;

      &.footer-list-start,
      &.footer-list-end {
        width: 100%;
      }

      &.footer-list-end {
        justify-content: flex-start;
      }
    }
  }
}
</style>
