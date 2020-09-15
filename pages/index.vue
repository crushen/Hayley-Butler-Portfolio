<template>
  <div class="home">
    <app-header />
    <app-main />
  </div>
</template>

<script>
import appHeader from '@/components/Header'
import appMain from '@/components/Main'

export default {
  components: {
    appHeader,
    appMain
  }
}
</script>
