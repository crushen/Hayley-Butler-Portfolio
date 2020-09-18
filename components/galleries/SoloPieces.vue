<template>
  <section class="gallery">
    <ul class="grid-container margin">
      <li
        v-for="(item, index) in soloPieces"
        :key="item.title"
        class="grid margin top"
        :class="`item-${index + 2}`">
        <div class="title small">
          <h3>{{ item.title }}</h3>
          <h4>{{ item.subTitle }}</h4>
        </div>

        <img :src="item.img" alt="">

        <div class="title big">
          <h3>{{ item.title }}</h3>
          <h4>{{ item.subTitle }}</h4>
        </div>

        <div class="description">
          <p>Alcohol Ink on Yupo Paper</p>
          <p>2019</p>
        </div>

        <div class="enquire-button">
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
  max-width: 450px;

  &.big {
    display: none;
  }

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

// tablet
@media screen and (min-width: 600px) {
  img {
    margin: 40px 0;
  }
}

// desktop
@media screen and (min-width: 1000px) {
  .title {
    max-width: 450px;

    &.big {
      display: block;
    }

    &.small {
      display: none;
    }

    h3 {
      margin-top: 16px;
    }

    h4 {
      margin: 8px 0 24px 0;
    }
  }

  img {
    margin: 0;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 80px;
  }

  .grid {
    margin: 0;
    align-self: end;
  }
}
</style>
