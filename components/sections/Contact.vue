<template>
  <section id="contact" class="section-padding whole-screen dark-page">
    <div class="content">
      <img src="@/assets/logo.png" alt="" class="logo">
      <div class="section-title">
        <h2>CONTACT</h2>
        <div class="line" />
      </div>

      <div class="margin top bottom flex-container" data-aos="custom-animation">
        <div>
          <p>Open for commissions!</p>
          <p>Please contact me to discuss ordering your very own made to order piece of art. The process is fully collaborative, we will discuss your colour scheme, finish and budget. I look forward to hearing from you.</p> 
        </div>

        <div class="contact">
          <p>Phone: <a href="tel:07429545446" target="_blank" rel="noopener">07429545446</a></p>
          <p>Email: <a href="mailto:hayleybettybutler@gmail.com" target="_blank" rel="noopener">hayleybettybutler@gmail.com</a></p>
          <p>Instagram: <a href="https://www.instagram.com/hayloveart/?hl=en" target="_blank" rel="noopener">@hayloveart</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/hayleybutler83/?originalSubdomain=uk" target="_blank" rel="noopener">@HayleyButler</a></p>  
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
.content {
  position: relative;
}

.logo {
  width: 80px;
  position: absolute;
  top: -35px;
  right: 0;
}

p {
  &:not(:first-of-type) {
    margin-top: 20px;
  }
}

.section-title {
  .line {
    background: $light-font;
  }
}

.contact {
  margin-top: 20px;
}

a {
  color: $light-font;
}

.flex-container {
  min-height: 55vh;
  padding-bottom: 64px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.developer-link {
  position: absolute;
  bottom: 0;

  p, a {
    font-size: 12px;
    color: darken($color: $light-font, $amount: 20%);
  }
}

// desktop
@media screen and (min-width: 1000px) {
  .flex-container {
    padding-bottom: 100px;
  }
}
</style>
