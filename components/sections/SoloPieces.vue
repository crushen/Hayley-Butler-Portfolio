<template>
  <section id="solo-pieces" class="section-padding whole-screen">
    <div class="content">
      <div class="section-title">
        <h2>SOLO PIECES</h2>
        <div class="line" />
      </div>

      <gallery :soloPieces="soloPieces" />
    </div>
  </section>
</template>

<script>
import gallery from '@/components/galleries/SoloPieces'
import img1 from '@/assets/backgrounds/dark.png'
import img2 from '@/assets/backgrounds/normal.png'

export default {
  components: {
    gallery
  },
  data() {
    return {
      soloPieces: [
        {
          title: 'Organa',
          subTitle: 'A study on how delicate and vulnerable we are. Looking at the inside out.',
          img: img1,
        },
        {
          title: 'Organa',
          subTitle: 'A study on how delicate and vulnerable we are. Looking at the inside out.',
          img: img2,
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#solo-pieces {
  background: $light-font;
  color: $background;
}
</style>
