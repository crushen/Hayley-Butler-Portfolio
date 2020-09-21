export default {
  mode: 'universal',
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Hayley Betty Butler',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A South London artist, singer/songwriter. Working with a variety of mediums to create pieces of work that explore emotion, colour, texture and light.' }
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
  css: [ 'aos/dist/aos.css' ],
  plugins: [{ src: '~/plugins/aos.js', mode: 'client'}],
  components: true,
  buildModules: [],
  build: {}
}
