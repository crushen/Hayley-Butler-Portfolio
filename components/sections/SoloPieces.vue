<template>
  <section id="solo-pieces" class="section-padding whole-screen light-page">
    <div class="content">
      <div class="section-title">
        <h2>SOLO PIECES</h2>
        <div class="line" />
      </div>

      <gallery
        v-if="soloPieces"
        :soloPieces="soloPieces"
        @open-modal="modalActive = true" />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import gallery from '@/components/galleries/SoloPieces'

export default {
  components: { gallery },
  computed: {
    ...mapState(['soloPieces'])
  },
  mounted() {
    this.$store.dispatch('getSoloPieces')
  }
}
</script>
