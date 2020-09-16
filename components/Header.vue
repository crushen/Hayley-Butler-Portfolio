<template>
  <header :style="{backgroundImage: `url(${require('@/assets/backgrounds/dark.png')})`}">
    <div class="content">
      <h1>Hayley <br>Betty Butler</h1>
    </div>
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
  position: relative;
  z-index: 0;

  .content {
    height: 100%;
    display: flex;
    align-items: center;
  }

  h1 {
    position: fixed;
    z-index: 0;
  }
}
</style>
