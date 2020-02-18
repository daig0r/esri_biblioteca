<template lang="pug">
v-container
  ValidationObserver(ref="form")
    v-form(submit.prevent="")
      v-row(
        justify="center"
        no-gutters
      )
        v-col
          AppTextFieldWithValidation.right-border(
            v-model="search"
            mode="lazy"
            label="busqueda"
            placeholder="¿Qué estás buscando?"
            rules="required"
            hide-details
            single-line
            outlined
          )
        v-col(cols="auto")
          v-btn.right-border-radius(
            to="/search"
            color="error"
            height="56"
            depressed
            tile
          )
            v-icon(medium) mdi-magnify
  
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
.right-border-radius {
  /* border-color: rgba(0, 0, 0, 0.24) !important; */
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
