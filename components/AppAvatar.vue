<template lang="pug">
  v-avatar(:size="size" :color="avatarColor" right)
    v-img(v-if="message.profilePic" :src="message.profilePic" alt="avatar")
    span.white--text(v-else :style='textSyle') {{ initials }}
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      required: true
    },
    message: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      avatarColor: 'indigo'
    }
  },
  computed: {
    initials() {
      return this.message.text.toUpperCase()
    },
    textSyle() {
      return {
        fontSize: `${this.size * 0.4}px`
      }
    }
  }
}
</script>
