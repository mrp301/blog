<template>
  <div>
    <headerTmp></headerTmp>
      <!-- この中にpageの中身が入る -->
      <div class='container l-container'>
        <nuxt/>
        <sideBar></sideBar>
      </div>
    <footerTmp></footerTmp>
  </div>
</template>

<script>
  import headerTmp from '~/components/headerTmp'
  import footerTmp from '~/components/footerTmp'
  import sideBar from '~/components/sideBar'

  export default {
    components: {
      headerTmp,
      footerTmp,
      sideBar
    }
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
  width: 1000px;
  padding: 32px 16px;
  margin: 0 auto;
}

.l-container {
  display: flex;
  justify-content: center;
  align-items: end;
}
</style>
