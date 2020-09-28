<template>
  <section id="exhibitions" class="section-padding whole-screen">
    <div class="content">
      <div class="section-title">
        <h2>EXHIBITIONS</h2>
        <div class="line" />
      </div>

      <gallery v-if="exhibitions" :exhibitions="exhibitions" />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import gallery from '@/components/galleries/Exhibitions'

export default {
  components: {
    gallery
  },
  computed: {
    ...mapState(['exhibitions'])
  },
  mounted() {
    this.$store.dispatch('getExhibitions')
  }
}
</script>

<style lang="scss" scoped>
#exhibitions {
  background: $light-font;
  color: $background;
}

// desktop
@media screen and (min-width: 1000px) {
  .section-padding {
    padding: 100px 0;
  }
}
</style>
