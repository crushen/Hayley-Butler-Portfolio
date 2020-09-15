export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@400;600;700&display=swap' }
    ]
  },
  modules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: [ '~/assets/styles/variables.scss', '~/assets/styles/main.scss' ]
  },
  router: {
    scrollBehavior(to) {
      if(to.hash) {
        return window.scrollTo({ 
          top: document.querySelector(to.hash).offsetTop + window.innerHeight,
          behavior: 'smooth' 
        })
      }
      return window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [],
  build: {}
}
