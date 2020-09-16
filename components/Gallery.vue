<template>
  <section class="gallery">
    <ul class="container">
      <li
        v-for="collection in collections"
        :key="collection.title">
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

        <div class="button">
          <a
            :href="`mailto:hayley.butler83@gmail.com?subject=${collection.title}`"
            target="_blank">
            Enquire
          </a>
        </div>

        <ul class="images">
          <li
            v-for="(image, index) in collection.images"
            :key="index"
            class="image">
              <img :src="image.img" alt="">
          </li>
        </ul>
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
.container {
  margin-top: 40px;
  
  li {
    &:not(:first-of-type) {
      margin-top: 64px;
    }
  }
}

img {
  width: 100%;
}

.title {
  h3 {
    font-weight: 600;
  }

  h4 {
    margin-top: 8px;
  }
}

.text {
  margin: 32px 0;
  font-style: italic;

  p {
    &:not(:first-of-type) {
      margin-top: 8px;
    }
  }
}

.description {
  text-align: right;
  
  p {
    font-size: 14px;
  }
}

.button {
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;

  a {
    background: $background;
    font-size: 14px;
    color: $light-font;
    padding: 6px 8px;
  }
}

.images {
  margin-top: 40px;

  li:not(:first-of-type) {
    margin-top: 24px;
  }

  figcaption {
    font-size: 14px;
  }
}
</style>
