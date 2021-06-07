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
import facebook from './icons/Facebook'
import instagram from './icons/Instagram'
import pinterest from './icons/Pinterest'
import linkedin from './icons/Linkedin'
import twitter from './icons/twitter'
import youtube from './icons/youtube'

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
