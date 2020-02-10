<template lang="pug">
  v-container

    v-row(
      align="start"
      justify="center"
    )
      v-col.mr-sm-8.pa-2(
        cols="auto"
        align="center"
      )
        p.mb-10.font-weight-medium.headline Mi perfil
        AppAvatar(size="160" :message="data")

      v-col.mt-sm-10.pa-2(
        cols="12"
        sm="7"
        xl="5"
      )
        v-card(elevation="6")
          v-toolbar(
            color='primary'
            dark
          )
            v-card-title.headline Información de contacto

          v-card-text
            ValidationObserver(ref="form")
              v-form(submit.prevent="")
                v-container
                  v-row
                    v-col.py-0(cols="12" md="6")
                      AppTextFieldWithValidation(
                        v-model="name"
                        :clearable="editable"
                        :readonly="!editable"
                        :filled="editable"
                        rules="required|alpha_spaces"
                        hint="Nombre"
                        persistent-hint
                        solo  
                        flat
                        dense
                        required
                      )
                      AppTextFieldWithValidation(
                        v-model="email"
                        :clearable="editable"
                        :readonly="!editable"
                        :filled="editable"
                        rules="required|email"
                        hint="Correo"
                        persistent-hint
                        solo  
                        flat
                        dense
                        required
                      )
                      AppTextFieldWithValidation(
                        v-model="company"
                        :clearable="editable"
                        :readonly="!editable"
                        :filled="editable"
                        rules="required"
                        hint="Empresa"
                        persistent-hint
                        solo  
                        flat
                        dense
                        required
                      )
                    v-col.py-0
                      AppTextFieldWithValidation(
                        v-model="lastName"
                        :clearable="editable"
                        :readonly="!editable"
                        :filled="editable"
                        rules="required|alpha_spaces"
                        hint="Apellidos"
                        persistent-hint
                        solo  
                        flat
                        dense
                        required
                      )
                      AppTextFieldWithValidation(
                        v-model="user"
                        :clearable="editable"
                        :readonly="!editable"
                        :filled="editable"
                        rules="required|alpha_dash"
                        hint="Usuario"
                        persistent-hint
                        solo  
                        flat
                        dense
                        required
                      )

          v-divider
          
          v-card-actions
            v-spacer
            v-btn(
              color="primary"
              text
              @click="editProfile"
            ) Editar perfil

</template>

<script>
import { ValidationObserver } from 'vee-validate'
import AppTextFieldWithValidation from '~/components/AppTextFieldWithValidation.vue'
import AppAvatar from '~/components/AppAvatar.vue'

export default {
  components: {
    AppAvatar,
    AppTextFieldWithValidation,
    ValidationObserver
  },
  data() {
    return {
      editable: false,
      name: 'Daigo',
      lastName: 'R',
      email: 'ahhhh@esri.co',
      company: 'Esri Colombia',
      user: 'daig0r',
      data: {
        profilePic: '',
        text: 'D R'
      }
    }
  },
  methods: {
    editProfile() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return
        }
        this.editable = !this.editable
      })
    }
  }
}
</script>
