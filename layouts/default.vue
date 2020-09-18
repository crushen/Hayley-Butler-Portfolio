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
  },
  mounted() {
    window.addEventListener('scroll', () => {
      const lines = document.querySelectorAll('.line')

      lines.forEach(line => {
        line.distanceToTop = line.getBoundingClientRect().top

        if(line.distanceToTop < 500) {
          line.style.width = '100%'
        }
      })
    })
  }
}
</script>

<style lang="scss">
html {
  color: $light-font;
  font-family: 'Poppins', 'Open Sans', Arial, sans-serif;
  font-weight: 400;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  font-size: 16px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

// tablet
@media screen and (min-width: 600px) {
  *,
  *::before,
  *::after {
    font-size: 18px;
  }
}
</style>
