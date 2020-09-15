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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap' }
    ]
  },
  modules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: [ '~/assets/styles/variables.scss', '~/assets/styles/main.scss' ]
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [],
  build: {}
}
