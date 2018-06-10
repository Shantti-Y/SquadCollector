<template>
  <div class="main">
      <header-nav 
        @header-clicked="toggleSidebar"
      />
      <nuxt />
      <side-nav 
        :isOpen="isSidebarOpen"
        @header-clicked="toggleSidebar"
      />
  </div>
</template>

<script>
  // TODO: Rename the file 'default' to 'main_layout'
  import HeaderNav from './header.vue'
  import SideNav from './sidebar.vue'
  export default {
    data() {
      return {
        isSidebarOpen: false
      }
    },
    methods: {
      toggleSidebar(){
        this.isSidebarOpen = !this.isSidebarOpen
      }
    },
    components: {
      HeaderNav,
      SideNav
    }
  }
</script>

<style scoped>
  .main {
    height: 100%;
  }
</style>

