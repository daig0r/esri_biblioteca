<template lang="pug">
  v-container
    v-row(
      align="center"
      justify="center"
    )
      v-col(
        cols="12"
        sm="9"
        md="6"
        lg="5"
        xl="3"
      )
        v-card(elevation="6")
          v-toolbar(
              color="primary"
              dark
              flat
          )
            v-toolbar-title Inicia sesión

          v-card-text.pt-10
            v-form
              AppTextFieldWithValidation(
                v-model="email"
                mode="lazy"
                rules="required|email"
                label="Email"
                prepend-inner-icon="mdi-account"
                outlined
                required
              )
              AppTextFieldWithValidation(
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                mode="lazy"
                rules="required"
                label="Constraseña"
                prepend-inner-icon="mdi-lock"
                outlined
                required
                @click:append="showPassword = !showPassword"
              )

            v-card-actions
              v-row(justify="center")
                v-btn(
                  large
                  color="success"
                  to="/profile"
                ) Inicia sesión  

</template>

<script>
import { ValidationObserver } from 'vee-validate'
import AppTextFieldWithValidation from '../components/AppTextFieldWithValidation.vue'

export default {
  components: { AppTextFieldWithValidation, ValidationObserver },
  data() {
    return {
      email: '',
      showPassword: false,
      password: ''
    }
  }
}
</script>
