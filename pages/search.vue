<template lang="pug">
v-container
  v-row(justify="center")
    v-col(
      cols="11"
      sm="7"
      lg="6"
      xl="4"
    )
      v-card(elevation="6" shaped)
        v-card-text.pt-10.pb-0
          ValidationObserver(ref="form")
            v-form(submit.prevent="")
              AppTextFieldWithValidation(
                v-model="searchText"
                label="Busqueda"
                rules="required"
                placeholder="Palabra o frase clave"
                prepend-inner-icon="mdi-magnify"
                clearable
                outlined
                rounded
                required
              )
              v-radio-group.mt-0.pt-0(
                v-model="isExact"
                label="¿Frase exacta?"
                mandatory
                dense
                row
              )
                v-radio(
                  v-for="radio in radioGroup" :key="radio.value"
                  :value="radio.value"
                  :label="radio.label"
                  color="primary"
                )
              v-container
                v-select.mt-0(
                  v-model="searchField"
                  :items="items"
                  label="Campo"
                  hide-selected
                )
                v-select(
                  v-model="resource"
                  :items="items"
                  label="Material"
                  hide-selected
                )
                v-select(
                  v-model="library"
                  :items="items"
                  label="Biblioteca"
                  hide-selected
                )

        v-card-actions
          v-row.mb-2(
            justify="center"
          )
            v-btn(
              color="primary"
              @click="basicSearch"
              to="/results"
            ) Buscar
            v-btn(
              color="error"
              @click="reset"
            ) Limpiar

</template>

<script>
import { ValidationObserver } from 'vee-validate'
import AppTextFieldWithValidation from '~/components/AppTextFieldWithValidation.vue'

export default {
  components: { AppTextFieldWithValidation, ValidationObserver },
  data() {
    return {
      searchText: '',
      isExact: false,
      searchField: '',
      library: '',
      resource: '',
      radioGroup: [
        {
          label: 'No',
          value: false
        },
        {
          label: 'Si',
          value: true
        }
      ],
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
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.searchText = ''
      this.isExact = false
      this.searchField = this.items[0]
      this.library = this.items[0]
      this.resource = this.items[0]
    },
    reset() {
      this.init()
      this.$refs.form.reset()
    },
    basicSearch() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return
        }
        this.reset()
      })
    }
  }
}
</script>
