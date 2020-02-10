<template lang="pug">
  v-card.mb-2(
    tile
    flat
  )
    v-row(no-gutters)
      v-col(
        cols="12"
        md="8"
        lg="7"
      )
        v-list(
          two-line
          subheader
        )
          v-subheader
            v-chip(
              color="primary"
              label 
            ) Libro
          v-list-item
            v-list-item-avatar(
              color="grey"
              size="120"
              tile
            )
            v-list-item-content
              v-list-item-title.headline.text-wrap Free Software, Free Society
              v-list-item-subtitle Richard Stallman
              v-card-text 
                | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      v-col
        v-list(two-line)
          v-container
            v-row
              p
                v-list-item
                  v-list-item-content
                    v-list-item-title.font-weight-medium.body-2 Publicador
                    v-list-item-subtitle GNU Press
              p
                v-list-item
                  v-list-item-content
                    v-list-item-title.font-weight-medium.body-2 Año de Publicación
                    v-list-item-subtitle 2002
              p
                v-list-item
                  v-list-item-content
                    v-list-item-title.font-weight-medium.body-2 Idioma
                    v-list-item-subtitle Ingles
              p
                v-list-item
                  v-list-item-content
                    v-list-item-title.font-weight-medium.body-2 Fuente
                    v-list-item-subtitle Biblioteca Esri Colombia
            v-row
              v-list-item
                v-list-item-content
                  v-list-item-title.font-weight-medium.body-2 Temas
                  v-list-item-subtitle
                      v-chip.mr-2(
                        label
                        outlined
                      ) Software
                      v-chip(
                        label
                        outlined
                      ) Free
</template>

<script>
export default {
  data() {
    return {
      data: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12) !important;
}
</style>
