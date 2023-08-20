export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode: 'spa',
  target: 'static',
  head: {
    title: 'DevBop - No-code deploy applications and CI/CD into AWS in minutes',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content:
          'No-code deploy applications into AWS and get a CI/CD pipeline in mere minutes. Reduce manual effort and accelerate your project timelines. Focus on creating, while we handle the complexities of AWS.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/thumb.png',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'DevBop - No-code deploy applications and CI/CD into AWS in minutes',
      },
      {
        name: 'og:site_name',
        content: 'web developer',
      },
      {
        prefix: 'og: https://ogp.me/ns#',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'No-code deploy applications into AWS and get a CI/CD pipeline in mere minutes. Reduce manual effort and accelerate your project timelines. Focus on creating, while we handle the complexities of AWS.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        // src: "https://tools.luckyorange.com/core/lo.js?site-id=16b22b4b",
        src: "https://tools.luckyorange.com/core/lo.js?site-id=0160a45a",
        body: true,
      },
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-VPQ5LQDC9H",
        async: true,
      },
      // Import analytics.js file
      { src: "/js/analytics.js" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~/assets/scss/main.scss', lang: 'scss' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    [
      'nuxt-social-meta',
      {
        url: '',
        title: 'DevBop - No-code deploy applications and CI/CD into AWS in minutes',
        site_name: 'DevBop',
        description:
          'No-code deploy applications into AWS and get a CI/CD pipeline in mere minutes. Reduce manual effort and accelerate your project timelines. Focus on creating, while we handle the complexities of AWS.',
        img: 'thumb.png',
        img_size: { width: '800px', height: '600px' },
        locale: 'en_US',
        twitter_card: 'DevBop - No-code deploy applications and CI/CD into AWS in minutes',
        theme_color: '#ffffff',
      },
    ],
  ],


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
