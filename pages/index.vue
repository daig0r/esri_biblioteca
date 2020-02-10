<template lang="pug">
  v-container
    v-row(justify="center")
      AppSearchBar
</template>

<script>
import AppSearchBar from '~/components/AppSearchBar.vue'
export default {
  components: { AppSearchBar }
}
</script>
