<template>
  <section id="collections" class="section-padding whole-screen">
    <div class="content">
      <div class="section-title">
        <h2>COLLECTIONS</h2>
        <div class="line" />
      </div>

      <gallery v-if="collections" :collections="collections" />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import gallery from '@/components/galleries/Collections'

export default {
  components: {
    gallery
  },
  computed: {
    ...mapState(['collections'])
  },
  mounted() {
    this.$store.dispatch('getCollections')
  }
}
</script>

<style lang="scss" scoped>
#collections {
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
