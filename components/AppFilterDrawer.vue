<template lang="pug">
  v-navigation-drawer(
      v-model="drawer"
      width="300px"
      clipped
      app
  )
    v-container.mt-6
      AppSearchBar.mb-4
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
          v-list-item-title.mb-0 {{ filters.Disponibilidad.label}}
        v-list-item-content.pt-0
          v-container.pt-0
            v-radio-group.mt-0(
              v-model="radioGroup"
              hide-details
            )
              v-radio(
                v-for="filter in filters.Disponibilidad.options"
                :label="filter"
              )
      v-list-group.mb-0(
        v-for="filter in filters"
        value="true"
        no-action
      )
        template(v-slot:activator)
          v-list-item-title.mb-0 {{ filter.label}}
        v-list-item-content.pt-0
          v-container.pt-0
            v-checkbox.mt-0(
              v-for="option in filter.options"
              :label="option"
              hide-details
            )
      v-list-item(
        two-line
      )
        v-list-item-content
          v-list-item-title Tema
          v-container
            AppTextFieldWithValidation.mt-2(
              placeholder="Buscar por tema"
              hide-details
              append-icon="mdi-magnify"
              outlined 
            )

    template(v-slot:append)
      v-container
        v-row(justify="center")
          v-btn(
            color="primary"
            large
          ) Filtrar     
      

</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import AppTextFieldWithValidation from '~/components/AppTextFieldWithValidation.vue'
import AppSearchBar from '~/components/AppSearchBar.vue'

export default {
  components: { AppTextFieldWithValidation, AppSearchBar },
  data() {
    return {
      filters: {
        Disponibilidad: {
          label: 'Disponibilidad',
          options: ['Todos', 'Ubicación física', 'Acceso digital']
        },
        Contenido: {
          label: 'Contenido',
          options: ['Libro', 'Artículo', 'Software']
        },
        Idioma: {
          label: 'Idioma',
          options: ['Español', 'Inglés', 'Aleman', 'Portugués']
        }
      },
      radioGroup: 0
    }
  },
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
