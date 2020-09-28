<template>
  <section id="collections" class="section-padding bottom whole-screen light-page">
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
