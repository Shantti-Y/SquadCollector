module.exports = {
  build: {
    vendor: ['vuex-class', 'nuxt-class-component', 'element-ui'],
    babel: {
      plugins: [
        'transform-decorators-legacy',
        'transform-class-properties'
      ]
    }
  },
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/font-awesome',
    '@/modules/typescript'
  ],
  plugins: [
    '@/plugins/element-ui'
  ],
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
}