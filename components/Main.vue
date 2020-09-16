<template>
  <main>
    <bio />
    <collections />
    <solo-pieces />
  </main>
</template>

<script>
import bio from '@/components/sections/Bio'
import collections from '@/components/sections/Collections'
import soloPieces from '@/components/sections/SoloPieces'

export default {
  components: {
    bio,
    collections,
    soloPieces
  }
}
</script>

<style scoped>
main {
  position: relative;
  z-index: 10;
}
</style>
