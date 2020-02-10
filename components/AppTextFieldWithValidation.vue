<template lang="pug">
  ValidationProvider(
    :name="$attrs.label || $attrs.hint"
    :rules="rules"
    :mode="$attrs.mode"
    v-slot="{ errors }"
  )
    v-text-field(
      v-model="innerValue"
      v-bind="$attrs"
      v-on="$listeners"
      :label="$attrs.label || $attrs.hint"
      :error-messages="errors"
    )
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider
  },
  props: {
    value: {
      type: null,
      default: ''
    },
    rules: {
      type: [Object, String],
      default: ''
    }
  },
  data() {
    return {
      innerValue: ''
    }
  },
  watch: {
    innerValue(newVal) {
      this.$emit('input', newVal)
    },
    value(newVal) {
      this.innerValue = newVal
    }
  },
  created() {
    if (this.value) {
      this.innerValue = this.value
    }
  }
}
</script>
