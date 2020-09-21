<template>
  <header>
    <div class="background" :style="{backgroundImage: `url(${require('@/assets/backgrounds/dark.png')})`}" />
    <div class="overlay" />
    <div class="content">
      <h1>{{ output1 }} <br> {{ output2 }}</h1>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      text1 :'Hayley',
      text2: 'Betty Butler',
      output1: '',
      output2: '',
      i: 0
    }
  },
  methods: { 
    outText1() {
      if (this.i < this.text1.length) {
        this.output1 += this.text1.charAt(this.i)
        this.i++
        setTimeout(this.outText1, 50)
      }
    },
    outText2() {
      if (this.i < this.text2.length) {
        this.output2 += this.text2.charAt(this.i)
        this.i++
        setTimeout(this.outText2, 50)
      }
    }
  },
  mounted() {
    if(this.$route.fullPath === '/') {
      setTimeout(() => {
        document.querySelector('.overlay').style.height = '100%'
      }, 500)

      setTimeout(() => {
        this.i = 0
        this.outText1()
      }, 1000)

      setTimeout(() => {
        this.i = 0
        this.outText2()
      }, 1500)

      setTimeout(() => {
        document.querySelector('.overlay').style.height = '0'
        document.querySelector('.background').classList.add('scale')
      }, 2700)
    } else {
      this.output1 = this.text1
      this.output2 = this.text2

      document.querySelector('.background').classList.add('scale')      
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;

  .background {
    width: 100%;
    height: 100vh;
    background-size: 126%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: 0;
    transform: scale(1.3);
    transition: cubic-bezier(.51, 1, .25, .90) 0.6s;

    &.scale {
      opacity: 1;
      transform: scale(1);
    }
  }

  .overlay {
    width: 100%;
    height: 0;
    background: black;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    transition: cubic-bezier(.51, 1, .25, .90) 0.6s;
  }

  .content {
    padding-top: 35vh;
  }

  h1 {
    color: $light-font;
    position: fixed;
    z-index: 10;
  }
}
</style>
