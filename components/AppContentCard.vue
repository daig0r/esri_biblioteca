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
              p(v-for="detail in details")
                v-list-item
                  v-list-item-content
                    v-list-item-title.font-weight-medium.body-2 {{ detail.label }}
                    v-list-item-subtitle {{ detail.value }}
            v-row
              v-list-item(v-if="topics")
                v-list-item-content
                  v-list-item-title.font-weight-medium.body-2.mb-1 Temas
                  v-list-item-subtitle
                      v-chip.mr-2(
                        v-for="topic in topics"
                        label
                        outlined
                      ) {{ topic }}
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
    },
    details: {
      type: Array,
      required: true
    },
    topics: {
      type: Array,
      required: false
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
