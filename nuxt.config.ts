// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  css: [
    '@/assets/css/global.css'
  ],
  meta: {
    title: 'Pokemon Browser',
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/icons/pokeball.svg' },
    ]
  }

})
