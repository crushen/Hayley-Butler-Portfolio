<template>
  <section id="biography" class="section-padding whole-screen">
    <div class="content">
      <div class="section-title">
        <h2>BIOGRAPHY</h2>
        <div class="line" />
      </div>

      <div class="text margin top">
        <p>A South London artist, singer/songwriter. Working with a variety of mediums to create pieces of work that explore emotion, colour, texture and light.</p> 
        <p>Her art, words and music interrogate what it is to be human.</p>
        <p>A South London artist, singer/songwriter. Working with a variety of mediums to create pieces of work that explore emotion, colour, texture and light.</p> 
        <p>Her art, words and music interrogate what it is to be human.</p> 
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
section {
  background: $background;
}

.section-title {
  .line {
    background: $light-font;
  }
}

.text {
  max-width: 450px;
}

p {
  &:not(:first-of-type) {
    margin-top: 24px;
  }
}
</style>
