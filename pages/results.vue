<template lang="pug">
  v-container
    AppFilterDrawer
    v-row(justify="center")
      v-col.mx-xl-10
        v-card.mb-2(
          height="200px"
          flat
        )
          v-card-title.display-1.font-weight-medium Resultados de búsqueda
          v-card-subtitle.subtitle-1 281 contenidos encontrados
          v-card-actions
            v-spacer
            v-col(
              cols="4"
              sm="3"
              md="2"
              xl="1"
            )
              v-select(
                :items="items"
                label="Ordenar"
              ) 

        AppContentCard(
          v-for="n in 5"
          :key="n"
          :title="data.title"
          :authors="data.authors"
          :synopsis="data.synopsis"
          :cover="data.cover"
        )

</template>

<script>
import AppContentCard from '~/components/AppContentCard.vue'
import AppFilterDrawer from '~/components/AppFilterDrawer.vue'

export default {
  components: { AppContentCard, AppFilterDrawer },
  data() {
    return {
      data: {
        title: 'Free Software, Free Society',
        authors: ['Richard Stallman', 'Richard Stallman'],
        synopsis:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        cover: require('~/assets/fsfs.jpg')
      },
      items: [
        'Más reciente',
        'Menos reciente',
        'De la A a la Z',
        'De la Z a la A'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card__title {
  word-break: break-word !important;
}
</style>
