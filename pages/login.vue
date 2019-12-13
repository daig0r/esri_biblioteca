<template lang="pug">
    v-container(fluid)
        v-row(
            align="center"
            justify="center"
        )
            v-col(
                cols="12"
                sm="8"
                md="6"
                lg="4"
            )
                v-card(
                    elevation="12"
                )
                    v-toolbar(
                        color="primary"
                        dark
                        flat
                    )
                        v-toolbar-title Login
                    v-card-text
                        v-form
                            v-text-field(
                                label="Email"
                                prepend-icon="mdi-account"
                            )
                            v-text-field(
                                :type="showPass ? 'text' : 'password'"
                                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                                prepend-icon="mdi-lock"
                                label="Constraseña"
                                @click:append="showPass = !showPass"
                            )
                    v-card-actions
                        v-spacer      
                        v-btn(
                            color="primary"
                        ) Login  

</template>

<script>
export default {
  data() {
    return {
      showPass: false
    }
  }
}
</script>
