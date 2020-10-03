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
