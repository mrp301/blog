<template>
  <div>
    <headerTmp />
      <mainVisual v-if='$store.state.currentPath.currentPath === "/"' />
      <div class='container l-container'>
        <nuxt/>
        <sideBar class='l-sideBar' />
      </div>
    <footerTmp />
    <mainVisual v-if='$store.state.currentPath.currentPath !== "/"' />
  </div>
</template>

<script>
import headerTmp from '~/components/headerTmp'
import footerTmp from '~/components/footerTmp'
import sideBar from '~/components/sideBar'
import mainVisual from '~/components/mainVisual'

export default {
  components: {
    headerTmp,
    footerTmp,
    sideBar,
    mainVisual
  },
}

</script>

<!-- scopedをつけるとこのファイル内でしたcssが有効にならない -->
<style scoped>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.container {
  max-width: 1000px;
  padding: 32px 16px;
  margin: 0 auto;
}

.l-container {
  display: flex;
  justify-content: center;
  align-items: end;
}

.l-sideBar {
  margin-left: 16px;
}

/* smartPhone */
@media screen and (max-width: 640px) {

  .container {
    padding-right: 2%;
    padding-left: 2%;

    & > * {
      margin-bottom: 16px;
    }
  }

  .l-container {
    display: block;
  }

  .l-sideBar {
    margin-left: 0;
  }
}
</style>
