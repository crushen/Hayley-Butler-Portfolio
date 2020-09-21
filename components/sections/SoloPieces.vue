<template>
  <section id="solo-pieces" class="section-padding whole-screen">
    <div class="content">
      <div class="section-title">
        <h2>SOLO PIECES</h2>
        <div class="line" />
      </div>

      <gallery v-if="soloPieces" :soloPieces="soloPieces" />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import gallery from '@/components/galleries/SoloPieces'

export default {
  components: {
    gallery
  },
  computed: {
    ...mapState(['soloPieces'])
  },
  mounted() {
    this.$store.dispatch('getSoloPieces')
  }
}
</script>

<style lang="scss" scoped>
#solo-pieces {
  background: $light-font;
  color: $background;
}

.section-padding {
  padding: 64px 0;
}

// desktop
@media screen and (min-width: 600px) {
  .section-padding {
    padding: 100px 0;
  }
}
</style>
