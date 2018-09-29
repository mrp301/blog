<template>
  <div class='mainVisual'>
    <div class='mainVisual-overlay'>
      <div class='mainVisual-inner'>
        <div>
          <h1 class='mainVisual-title l-bottom-xxsmall'>Yuuta</h1>
          <div class='mainVisual-date'>
            <p>最終更新：<time datetime='2018-5-20'>メインビジュアルの説明が入る</time></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>

.mainVisual {
  position: relative;
  max-width: 100%;
  height: 37.5vw;
  max-height: 300px;
  background-image: url(../assets/img/header.png);
  background-size: cover;
  background-position: center;
　background-repeat: no-repeat;
  object-fit: cover;

  .mainVisual-overlay {
    background-color: rgba(0, 0, 0, .5);
    height: 100%;
    width: 100%;
  }

  .mainVisual-inner {
    height: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 16px 12px;
    display: flex;
    align-items: center;

    .mainVisual-title {
      color: #fff;
      font-size: 3.5rem;
      font-weight: bold;
      letter-spacing: .1rem;
      text-shadow: 0 0 3px #666;
    }

    .mainVisual-date {
      color: #ccc;
      font-size: 1.2rem;
    }
  }
}

/* smartPhone */
@media screen and (max-width: 640px) {

  .mainVisual {
    .mainVisual-inner {
      .mainVisual-title {
        font-size: 2.4rem;
      }

    }

  }

}
</style>
