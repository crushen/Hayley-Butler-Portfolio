<template>
  <nav>
    <ul>
      <li>
        <nuxt-link :to="{ path: '/', hash:'#bio'}">Bio</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  background: $background;
  position: fixed;
  bottom: 0;
  z-index: 50;
}
</style>
