<template>
  <section id="biography" class="section-padding bottom whole-screen">
    <div class="content">
      <div class="section-title">
        <h2>BIOGRAPHY</h2>
        <div class="line" />
      </div>

      <div
        class="text margin top"
        data-aos="custom-animation">
        <p v-if="biography">{{ biography.text }}</p> 
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['biography'])
  },
  mounted() {
    this.$store.dispatch('getBiography')
  }
}
</script>

<style lang="scss" scoped>
#biography {
  background: $background;
  color: $light-font;
}

.section-title {
  .line {
    background: $light-font;
  }
}

.text {
  max-width: 450px;
}

/deep/ p {
  white-space: pre-wrap;
}
</style>
