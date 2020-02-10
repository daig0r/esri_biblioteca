<template lang="pug">
  v-app
    AppBar
    v-content.white
      nuxt
</template>
<script>
import AppBar from '~/components/AppBar.vue'
export default {
  components: { AppBar }
}
</script>
