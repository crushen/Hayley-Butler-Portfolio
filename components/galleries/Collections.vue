<template>
  <section class="gallery">
    <ul>
      <li
        v-for="collection in collections"
        :key="collection.title"
        class="grid-container margin top">
        <div
          class="grid item-1"
          data-aos="custom-animation">
          <div class="title">
            <h3>{{ collection.title }}</h3>
            <h4>{{ collection.subTitle }}</h4>
          </div>

          <div class="text">
            <p>What if I took it all out?</p>
            <p>What if I placed every piece of me on the table and you could inspect each and every pumping vessel?</p>
            <p>How vulnerable I would be laying there.</p>
            <p>An empty carcass. Nothing more than a shell.</p>
            <p>Did you know how fragile I am? Did you smell my weakness? Can you see it now?</p>
          </div>

          <div class="description">
            <p>Alcohol Ink on Yupo Paper</p>
            <p>2019</p>
          </div>

          <div class="enquire-button">
            <a
              :href="`mailto:hayley.butler83@gmail.com?subject=${collection.title}`"
              target="_blank">
              Enquire
            </a>
          </div>
        </div>

        <img
          v-for="(image, index) in collection.images"
          :key="index"
          :src="image.img"
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
    collections: { required: true, type: Array }
  }
}
</script>

<style lang="scss" scoped>
.title {
  max-width: 450px;

  h3 {
    font-weight: 600;
  }

  h4 {
    margin-top: 8px;
  }
}

.text {
  max-width: 450px;
  margin: 32px 0;
  font-style: italic;

  p {
    font-size: 14px;

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
