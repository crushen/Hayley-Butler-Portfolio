<template>
  <nav>
    <ul>
      <li>
        <nuxt-link :to="{ path: '/', hash:'#biography'}">Biography</nuxt-link>
      </li>

      <li>
        <nuxt-link :to="{ path: '/', hash:'#collections'}">Collections</nuxt-link>
      </li>

      <li>
        <nuxt-link :to="{ path: '/', hash:'#solo-pieces'}">Solo Pieces</nuxt-link>
      </li>

      <li>
        <nuxt-link :to="{ path: '/', hash:'#contact'}">Contact</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 72px;
  background: $background;
  position: fixed;
  bottom: 0;
  z-index: 50;
}

ul {
  width: 100%;
  max-width: 450px;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

a {
  font-size: 12px;
  font-weight: 600;
}

// tablet
@media screen and (min-width: 600px) {
  nav {
    height: 80px;
  } 
}
</style>
