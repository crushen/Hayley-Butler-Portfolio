<template>
  <section id="collections" class="section-padding whole-screen">
    <div class="content">
      <div class="section-title">
        <h2>COLLECTIONS</h2>
        <div class="line" />
      </div>

      <gallery :collections="collections" />
    </div>
  </section>
</template>

<script>
import gallery from '@/components/galleries/Collections'
import img1 from '@/assets/backgrounds/dark.png'
import img2 from '@/assets/backgrounds/normal.png'

export default {
  components: {
    gallery
  },
  data() {
    return {
      collections: [
        {
          title: 'Organa',
          subTitle: 'A study on how delicate and vulnerable we are. Looking at the inside out.',
          images: [
            {
              img: img2,
              title: 'Lecur'
            },
            {
              img: img2,
              title: 'Cerebrum'
            },
            {
              img: img1,
              title: 'Lecur'
            },
            {
              img: img1,
              title: 'Cerebrum'
            }
          ]
        },
        {
          title: 'Organa',
          subTitle: 'A study on how delicate and vulnerable we are. Looking at the inside out.',
          images: [
            {
              img: img1,
              title: 'Lecur'
            },
            {
              img: img2,
              title: 'Cerebrum'
            },
            {
              img: img2,
              title: 'Lecur'
            },
            {
              img: img2,
              title: 'Cerebrum'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#collections {
  background: $light-font;
  color: $background;
}
</style>
