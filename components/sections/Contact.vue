<template>
  <section id="contact" class="section-padding whole-screen">
    <div class="content">
      <div class="section-title">
        <h2>CONTACT</h2>
        <div class="line" />
      </div>

      <div class="links">
        <p>Email: 
          <a href="mailto:hayley.butler83@gmail.com" target="_blank">
            hayley.butler83@gmail.com
          </a>
        </p>
        <p>Instagram: 
          <a href="https://www.instagram.com/hayloveart/?hl=en" target="_blank">
            @hayloveart
          </a>
        </p>  
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

p {
  &:not(:first-of-type) {
    margin-top: 24px;
  }
}

.section-title {
  .line {
    background: $light-font;
  }
}

.links {
  margin-top: 64px;
}

a {
  color: $light-font;
}
</style>
