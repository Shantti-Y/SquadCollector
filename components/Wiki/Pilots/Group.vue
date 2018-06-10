<template>
  <div class="group">
    <p class="group-name" @click="toggleSquadMenu">{{ group.name }}</p>
    <pilots
      :pilots="group.pilots"
      :isOpen="isOpen"
    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'nuxt-class-component'

  import Pilots from "./Pilots.vue"

  const AppProp = Vue.extend({
    props: {
      group: Object
    }
  })

  @Component({
    components: {
      Pilots
    }
  })
  export default class Group extends AppProp {
    isOpen :boolean = false
    
    toggleSquadMenu(){
      this.isOpen = !this.isOpen
    }
    
  }
</script>