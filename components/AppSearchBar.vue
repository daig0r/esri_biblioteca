<template lang="pug">
ValidationObserver(ref="form")
  v-form(submit.prevent="")
    v-container
      v-row(
        align="center"
        justify="center"
        no-gutters
      )
        v-col(cols="3")
          v-select.right-border(
            v-model="resource"
            :items="items"
            placeholder="Contenido"
            hide-selected
            hide-details
            outlined
          )
        v-col
          AppTextFieldWithValidation.right-border.left-border(
            v-model="search"
            mode="lazy"
            label="busqueda"
            placeholder="¿Qué estás buscando?"
            rules="required"
            hide-details
            single-line
            outlined
          )
        v-col(
          cols="auto"
        )
          v-btn.right-border-radius(
            color="error"
            height="56"
            depressed
            tile
            to="/search"
          )
            v-icon mdi-magnify
  
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import AppTextFieldWithValidation from '~/components/AppTextFieldWithValidation.vue'

export default {
  components: { AppTextFieldWithValidation, ValidationObserver },
  data() {
    return {
      search: '',
      resource: '',
      items: [
        'Todos',
        'Autor',
        'Título',
        'Materia',
        'Serie',
        'No. Topografico',
        'ISBN'
      ]
    }
  }
}
</script>

<style scoped>
.right-border >>> fieldset {
  border-right: 1px solid #d3d3d3 !important;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.left-border >>> fieldset {
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.v-btn {
  /* border-color: rgba(0, 0, 0, 0.24) !important; */
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
