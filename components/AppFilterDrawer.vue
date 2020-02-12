<template lang="pug">
  v-navigation-drawer(
      v-model="drawer"
      width="300px"
      clipped
      app
    )
      v-container
        p.title.mb-0 Filtrar
      v-divider
      v-list(
        expand
        tile
        nav
      )
        v-list-group.mb-0(
          value="true"
          no-action
        )
          template(v-slot:activator)
            v-list-item-title.mb-0 Tipo de contenido
          v-container.pt-0
            v-checkbox.mt-0(
              hide-details
              label="Libro"
            )
            v-checkbox.mt-0(
              hide-details
              label="Revista"
            )
        v-list-group(
          value="true"
          no-action
        )
          template(v-slot:activator)
              v-list-item-title Idioma
          v-container.pt-0
            v-checkbox.mt-0(
              hide-details
              label="Ingles"
            )
            v-checkbox.mt-0(
              hide-details
              label="Español"
            )

</template>
<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      visibility: 'drawer/getVisibility'
    }),
    drawer: {
      get() {
        return this.visibility
      },
      set(newValue) {
        this.toggleVisibility(newValue)
      }
    }
  },
  methods: {
    ...mapMutations({
      toggleVisibility: 'drawer/toggleVisibility'
    })
  }
}
</script>
