<template>
  <div class="container">
    <dialog open>
      <button @click="$emit('close')" class="close">
        <img src="@/assets/icons/cross.svg" alt="" class="icon">
      </button>

      <div class="img-container">
        <transition name="fade" mode="out-in">
          <img :src="images[selected].image.url" alt="" :key="images[selected].image.url">
        </transition>
      </div>

      <div class="controls">
        <button @click="prev" class="left">
          <img src="@/assets/icons/arrow-left.svg" alt="" class="icon">
        </button>

        <button @click="next" class="right">
          <img src="@/assets/icons/arrow-right.svg" alt="" class="icon">
        </button>
      </div>
    </dialog>
  </div>
</template>

<script>
export default {
  props: {
    images: { type: Array, required: true }
  },
  data() {
    return {
      selected: 0
    }
  },
  methods: {
    next() {
      this.selected ++
    },
    prev() {
      this.selected --
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: calc(100vh - 72px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
}

dialog {
  width: 100%;
  min-height: calc(100vh - 72px);
  border: none;
  position: relative;
}

button {
  border: none;
  outline: none;
  background: transparent;

  &.close {
    width: 24px;
    position: absolute;
    top: 16px;
    right: 5%;
    z-index: 30;
  }
}

.icon {
  width: 20px;
}

.controls {
  width: 100%;
  padding: 0 5%;
  position: absolute;
  bottom: 16px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 30;
}

.img-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 90%;
  }
}
</style>
