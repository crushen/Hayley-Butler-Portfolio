<template>
  <main>
    <bio />
    <solo-pieces />
    <collections />
    <contact />
  </main>
</template>

<script>
import bio from '@/components/sections/Bio'
import soloPieces from '@/components/sections/SoloPieces'
import collections from '@/components/sections/Collections'

export default {
  components: {
    bio,
    soloPieces,
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
