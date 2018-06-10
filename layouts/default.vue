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

<script lang="ts">
  import Vue from 'vue'
  import Component from 'nuxt-class-component'

  // TODO: Rename the file 'default' to 'main_layout'
  import HeaderNav from './header.vue'
  import SideNav from './sidebar.vue'

  @Component({
    components: {
      HeaderNav,
      SideNav
    }
  })
  export default class Layout extends Vue{
    isSidebarOpen :boolean = false

    toggleSidebar(){
      this.isSidebarOpen = !this.isSidebarOpen
    }
  }
</script>

<style scoped>
  .main {
    height: 100%;
  }
</style>

