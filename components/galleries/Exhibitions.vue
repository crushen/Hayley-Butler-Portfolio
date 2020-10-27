<!-- <template>
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
</template> -->



<template>
  <section class="gallery">
    <transition name="fade" mode="out-in">
      <image-modal
        v-if="images.length"
        :images="images"
        @close="images = []" />
    </transition>

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

        <div
          v-for="(image, index) in exhibition.images"
          :key="image.id"
          class="grid margin top"
          :class="`item-${index + 2}`"
          data-aos="custom-animation">
          <div class="title small">
            <h3>{{ image.title }}</h3>
            <h4>{{ image.subTitle }}</h4>
          </div>

          <img
            @click="images = image.images"
            :src="image.images[0].url"
            :alt="`An image from the ${exhibition.title} collection, titled ${image.title}`"
            class="img-btn">

          <div class="title big">
            <h3>{{ image.title }}</h3>
            <h4>{{ image.subTitle }}</h4>
          </div>

          <div class="description">
            <p>{{ image.details }}</p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>




<script>
import imageModal from '@/components/modals/ImageModal'

export default {
  props: {
    exhibitions: { required: true, type: Array }
  },
  components: { imageModal },
  data() {
    return {
      images: []
    }
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
  margin: 32px 0;
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
    margin: 40px 0;
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
  }

  img {
    margin: 0;
  }
}
</style>
