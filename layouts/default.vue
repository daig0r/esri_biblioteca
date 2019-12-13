<template lang="pug">
  v-app
    v-app-bar(app)
      nuxt-link(to="/")
        v-img.mx-4(
          :src="require('~/assets/logo_esri_colombia_negro.png')"
          max-height="40"
          max-width="180"
          contain
        )
      v-toolbar-title.headline.font-weight-bold Biblioteca
      v-spacer
      v-toolbar-items
        v-container
          v-btn(color="primary") Login
    v-content
        nuxt
</template>
