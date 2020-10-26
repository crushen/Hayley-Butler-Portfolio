<template>
  <section class="gallery">
    <transition name="fade" mode="out-in">
      <image-modal
        v-if="images.length"
        :images="images"
        @close="images = []" />
    </transition>

    <ul class="grid-container margin">
      <li
        v-for="(item, index) in soloPieces"
        :key="item.images.id"
        class="grid margin top"
        :class="`item-${index + 2}`"
        data-aos="custom-animation">
        <div class="title small">
          <h3>{{ item.images.title }}</h3>
          <h4>{{ item.images.subTitle }}</h4>
        </div>

        <img @click="images = item.images.images" :src="item.images.images[0].url" alt="">

        <div class="title big">
          <h3>{{ item.images.title }}</h3>
          <h4>{{ item.images.subTitle }}</h4>
        </div>

        <div class="description">
          <p>{{ item.images.details }}</p>
        </div>

        <div class="enquire-button">
          <a
            :href="`mailto:hayleybettybutler@gmail.com?subject=${item.images.title}`"
            target="_blank"
            rel="noopener">
            Enquire
          </a>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import imageModal from '@/components/modals/ImageModal'

export default {
  props: {
    soloPieces: { required: true, type: Array }
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
p {
  color: $background;
}

img {
  width: 100%;
  margin: 32px 0;
}

// tablet
@media screen and (min-width: 600px) {
  img {
    margin: 40px 0;
  }
}

// desktop
@media screen and (min-width: 1000px) {
  img {
    margin: 0;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 80px;
    margin-top: 100px;
  }

  .grid {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .margin {
    &.top {
      margin-top: 0;
    }
  }
}
</style>
