<template lang="pug">
  v-app-bar(
      clipped-left
      app
    )
      template(v-if="$nuxt.$route.name === 'results'")
        v-app-bar-nav-icon.d-lg-none(@click.stop="toggleVisibility(true)")
      nuxt-link(to="/")
        v-img.mr-4(
          :src="require('~/assets/logo_esri_colombia_negro.png')"
          max-height="40"
          max-width="180"
          contain
        )
      v-toolbar-title.headline.font-weight-bold.text-wrap Biblioteca
      v-spacer
      v-toolbar-items
        v-container
          v-btn(
            color="primary"
            to="/login"
          ) Login
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      toggleVisibility: 'drawer/toggleVisibility'
    })
  }
}
</script>
