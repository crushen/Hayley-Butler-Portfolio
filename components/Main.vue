<template>
  <main>
    <bio />
    <collections />
  </main>
</template>

<script>
import bio from '@/components/sections/Bio'
import collections from '@/components/sections/Collections'

export default {
  components: {
    bio,
    collections
  }
}
</script>

<style scoped>
main {
  position: relative;
  z-index: 10;
}
</style>
