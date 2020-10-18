<template>
  <section id="solo-pieces" class="section-padding whole-screen light-page">
    <transition name="fade" mode="out-in">
      <image-modal
        v-if="modalActive"
        :images="soloPieces"
        @close="modalActive = false" />
    </transition>

    <div class="content">
      <div class="section-title">
        <h2>SOLO PIECES</h2>
        <div class="line" />
      </div>

      <gallery
        v-if="soloPieces"
        :soloPieces="soloPieces"
        @openModal="modalActive = true" />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import gallery from '@/components/galleries/SoloPieces'
import imageModal from '@/components/modals/ImageModal'

export default {
  components: {
    gallery,
    imageModal
  },
  data() {
    return {
      modalActive: false
    }
  },
  computed: {
    ...mapState(['soloPieces'])
  },
  mounted() {
    this.$store.dispatch('getSoloPieces')
  }
}
</script>
