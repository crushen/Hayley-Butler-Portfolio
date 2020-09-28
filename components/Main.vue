<template>
  <main>
    <bio />
    <solo-pieces />
    <collections />
    <exhibitions />
    <contact />
  </main>
</template>

<script>
import bio from '@/components/sections/Bio'
import soloPieces from '@/components/sections/SoloPieces'
import collections from '@/components/sections/Collections'
import exhibitions from '@/components/sections/Exhibitions'

export default {
  components: {
    bio,
    soloPieces,
    collections,
    exhibitions
  }
}
</script>

<style scoped>
main {
  position: relative;
  z-index: 10;
}
</style>
