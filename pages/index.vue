<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(
        cols="9"
        sm="7"
        md="6"
        lg="5"
        xl="4"
      )
        AppSearchBar
</template>

<script>
import AppSearchBar from '~/components/AppSearchBar.vue'
export default {
  components: { AppSearchBar }
}
</script>
