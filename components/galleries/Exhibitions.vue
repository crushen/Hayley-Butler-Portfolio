<template>
  <section class="gallery">
    <ul>
      <li
        v-for="exhibition in exhibitions"
        :key="exhibition.id"
        class="grid-container margin top">
        <div
          class="grid item-1"
          data-aos="custom-animation">
          <div class="title">
            <h3>{{ exhibition.title }}</h3>
            <h4>{{ exhibition.subTitle }}</h4>
          </div>

          <div
            v-if="exhibition.description"
            class="text">
            <p>{{ exhibition.description }}</p>
          </div>
        </div>

        <img
          v-for="(image, index) in exhibition.images"
          :key="image.id"
          :src="image.url"
          alt=""
          class="grid"
          :class="`item-${index + 2}`"
          data-aos="custom-animation">
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    exhibitions: { required: true, type: Array }
  }
}
</script>

<style lang="scss" scoped>
.title {
  max-width: 450px;

  h3 {
    font-weight: 600;
    color: $background;
  }

  h4 {
    margin-top: 8px;
    color: $background;
  }
}

.text {
  max-width: 450px;
  margin: 32px 0;
  font-style: italic;

  p {
    font-size: 14px;
    color: $background;

    &:not(:first-of-type) {
      margin-top: 8px;
    }
  }
}

img {
  width: 100%;
  margin-top: 24px;

  &:first-of-type {
    margin-top: 40px;
  }
}

// tablet
@media screen and (min-width: 600px) {
  .text {
    p {
      font-size: 16px;

      &:not(:first-of-type) {
        margin-top: 16px;
      }
    }
  }

  img {
    margin-top: 32px;

    &:first-of-type {
      margin-top: 64px;
    }
  }
}

// desktop
@media screen and (min-width: 1000px) {
  .grid-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    gap: 80px 40px;

    &:not(:first-of-type) {
      &.margin {
        &.top {
          margin-top: 200px;
        }
      }
    }
  }

  .grid {
    margin: 0;
    align-self: start;
    grid-column: span 2;

    &.item-1 {
      grid-column: 1 / 4;
    }

    &.item-2 {
      grid-column: 4 / 7;
      margin: 0;
      padding-left: 40px;
    }

    // &:nth-of-type(3n) {
    //   margin-top: 80px;
    // }
  }
}
</style>
