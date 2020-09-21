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
  data() {
    return {
      innerWidth: null
    }
  },
  mounted() {
    this.innerWidth = window.innerWidth
    window.addEventListener('resize', () => {
      this.innerWidth = window.innerWidth
    })

    window.addEventListener('scroll', () => {
      const lines = document.querySelectorAll('.line')
      lines.forEach(line => {
        line.distanceToTop = line.getBoundingClientRect().top
        if(this.innerWidth <= 600) {
          if(line.distanceToTop < 500) {
            line.style.width = '100%'
          } else {
            line.style.width = '0'
          }
        } else {
          if(line.distanceToTop < 600) {
            line.style.width = '100%'
          } else {
            line.style.width = '0'
          }
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
  //overflow-x: hidden;
}

[data-aos="custom-animation"] {
  transform: translateY(32px);
  opacity: 0;
  transition-property: transform, opacity;

  &.aos-animate {
    transform: translateY(0);
    opacity: 1;
  }

  // @media screen and (min-width: 768px) {

  // }
}

[data-aos] {
  body[data-aos-easing="custom-easing"] &,
  &[data-aos][data-aos-easing="custom-easing"] {
    transition-timing-function: cubic-bezier(.51, 1, .25, .90);
  }
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
