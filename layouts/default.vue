<template>
  <div>
    <app-nav />
    <Nuxt />
  </div>
</template>

<script>
import appNav from '@/components/nav/Nav'

export default {
  components: {
    appNav
  }
}
</script>

<style lang="scss">
html {
  color: $light-font;
  font-family: 'Poppins', 'Open Sans', Arial, sans-serif;
  font-weight: 400;
}

*,
*::before,
*::after {
  font-size: 16px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
