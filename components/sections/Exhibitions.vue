<template>
  <section id="exhibitions" class="section-padding bottom whole-screen light-page">
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
