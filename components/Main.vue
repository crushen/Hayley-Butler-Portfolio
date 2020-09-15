<template>
  <main>
    <bio />
  </main>
</template>

<script>
import bio from '@/components/sections/Bio'

export default {
  components: {
    bio
  }
}
</script>

<style scoped>
main {
  position: relative;
  z-index: 10;
}
</style>
