<template>
  <section class="gallery">
    <ul class="margin bottom">
      <li
        v-for="item in soloPieces"
        :key="item.title"
        class="margin top">
        <div class="title">
          <h3>{{ item.title }}</h3>
          <h4>{{ item.subTitle }}</h4>
        </div>

        <img :src="item.img" alt="">

        <div class="description">
          <p>Alcohol Ink on Yupo Paper</p>
          <p>2019</p>
        </div>

        <div class="button">
          <a
            :href="`mailto:hayley.butler83@gmail.com?subject=${item.title}`"
            target="_blank">
            Enquire
          </a>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    soloPieces: { required: true, type: Array }
  }
}
</script>

<style lang="scss" scoped>
.title {
  h3 {
    font-weight: 600;
  }

  h4 {
    margin-top: 8px;
  }
}

img {
  width: 100%;
  margin: 32px 0;
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
</style>
