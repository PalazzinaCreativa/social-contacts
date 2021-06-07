<template>
  <div
    class="social-links"
    :style="{ '--bg-color': bgColor, '--icon-color': iconColor }"
  >
    <a class="social" :href="contacts[contact]" target="_blank" v-for="contact of Object.keys(contacts)" :key="contact">
      <div class="social__bg"></div>
      <div class="social__icon" v-if="getComponent(contact)">
        <component :is="getComponent(contact)" />
      </div>
    </a>
  </div>
</template>

<script>
import Facebook from './icons/Facebook.vue'
import Instagram from './icons/Instagram.vue'
import Pinterest from './icons/Pinterest.vue'
import Linkedin from './icons/Linkedin.vue'
import Twitter from './icons/Twitter.vue'
import Youtube from './icons/Youtube.vue'

const components = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  pinterest: Pinterest,
  linkedin: Linkedin,
  youtube: Youtube
}

export default {
  components: {
    Facebook,
    Instagram,
    Pinterest,
    Linkedin,
    Twitter,
    Youtube
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
  },
  methods: {
    getComponent (contact) {
      return components(contact)
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
    padding: 1.2rem;
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
