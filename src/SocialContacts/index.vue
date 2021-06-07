<template>
  <div
    class="social"
  >
    <a class="social__icon" :href="contacts[contact]" target="_blank" v-for="contact of Object.keys(contacts)" :key="contact">
      <component :is="contact" />
    </a>
  </div>
</template>

<script>
import facebook from './icons/Facebook.vue'
import instagram from './icons/Instagram.vue'
import pinterest from './icons/Pinterest.vue'
import linkedin from './icons/Linkedin.vue'
import twitter from './icons/Twitter.vue'
import youtube from './icons/Youtube.vue'

export default {
  components: {
    facebook,
    instagram,
    pinterest,
    linkedin,
    twitter,
    youtube
  },
  props: {
    contacts: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.social {
  display: flex;
  &__icon {
    width: 3rem;
    height: 3rem;
    padding: 0.875rem;
    background-color: #fff;
  }
  ::v-deep svg {
    width: auto;
    height: 100%;
  }
}
</style>
