<template>
  <div
    class="social-links"
    :style="{ '--bg-color': bgColor, '--icon-color': iconColor }"
  >
    <a class="social" :href="contacts[contact]" target="_blank" v-for="contact of Object.keys(contacts)" :key="contact">
      <div class="social__bg"></div>
      <div class="social__icon">
        <component :is="contact" />
      </div>
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
    },
    bgColor: {
      type: String,
      default: () => '#ffffff'
    },
    iconColor: {
      type: String,
      default: () => '#000000'
    }
  }
}
</script>

<style lang="scss" scoped>
.social-links {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  .social {
    width: 3rem;
    height: 3rem;
    padding: 0.875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 0.75rem;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    &__bg {
      background-color: var(--bg-color);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      border-radius: 50%;
      left: 0;
      transition: transform 0.6s ease-out;
    }
    &__icon {
      position: relative;
      z-index: 4;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      color: var(--icon-color);
      ::v-deep svg {
        width: auto;
        height: 100%;
      }
    }
    &:hover {
      .social__bg {
        transform: scale(1.1);
      }
    }
  }
}
</style>
