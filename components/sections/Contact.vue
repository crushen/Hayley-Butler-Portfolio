<template>
  <section id="contact" class="section-padding whole-screen dark-page">
    <div class="content">
      <div class="section-title">
        <h2>CONTACT</h2>
        <div class="line" />
      </div>

      <div class="margin top flex-container" data-aos="custom-animation">
        <div>
          <p>Based in Tooting, South London.</p> 
        </div>

        <div>
          <p>Phone: <a href="tel:07429545446" target="_blank" rel="noopener">07429545446</a></p>
          <p>Email: <a href="mailto:hayleybettybutler@gmail.com" target="_blank" rel="noopener">hayleybettybutler@gmail.com</a></p>
          <p>Instagram: <a href="https://www.instagram.com/hayloveart/?hl=en" target="_blank" rel="noopener">@hayloveart</a></p>
          <p>LinkedIn: <a href="https://www.instagram.com/hayloveart/?hl=en" target="_blank" rel="noopener">@hayloveart</a></p>  
        </div>

        <div class="developer-link">
          <p>Website by <a href="https://www.charlotterushen.dev" target="_blank" rel="noopener">Charlotte Rushen</a></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
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

a {
  color: $light-font;
}

.flex-container {
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.developer-link {
  padding-top: 60px;

  p, a {
    font-size: 12px;
    color: darken($color: $light-font, $amount: 20%);
  }
}
</style>
