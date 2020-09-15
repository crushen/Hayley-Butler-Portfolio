<template>
  <header :style="{backgroundImage: `url(${require('@/assets/backgrounds/dark.png')})`}">
    <h1>Hayley <br>Betty Butler</h1>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 100vh;
  background-size: 126%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;

  h1 {
    font-size: 13vw;
    font-weight: 800;
    position: fixed;
    z-index: 0;
  }
}
</style>
