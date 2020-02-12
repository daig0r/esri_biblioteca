<template lang="pug">
  v-card.mb-2(
    tile
    flat
  )
    v-row(no-gutters)
      v-col(
        cols="12"
        md="8"
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
            .d-flex.flex-column.flex-sm-row
              v-list-item-avatar(
                tile
                height="250px"
                width="180px"
              )
                v-img(
                  :src="cover"
                  alt="cover"
                  contain
                )
              v-list-item-content
                v-list-item-title.headline.text-wrap {{ title }}
                v-list-item-subtitle
                  span.text-wrap.comma(v-for="author in authors") {{ author }}
                v-card-text {{ synopsis }}
      v-col
        v-list(two-line)
          v-container.pt-0.pt-sm-3
            v-row
              // TODO: hacer esto dinamico
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
                      // TODO: hacer esto dinamico
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
  props: {
    title: {
      type: String,
      required: true
    },
    authors: {
      type: Array,
      required: true
    },
    synopsis: {
      type: String,
      required: false,
      default: ''
    },
    cover: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12) !important;
}

.comma + .comma:before {
  content: ', ';
}
</style>
