<template>
  <div class="squad">
    <p class="squad-name" @click="toggleSquadMenu">{{ squad.name }}</p>
    <mechs
      :mechs="squad.mechs"
      :isOpen="isOpen"
    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'nuxt-class-component'

  import Mechs from "./Mechs.vue"

  const AppProp = Vue.extend({
    props: {
      squad: Object
    }
  })

  @Component({
    components: {
      Mechs
    }
  })
  export default class Squad extends AppProp{
    isOpen :boolean = false

    toggleSquadMenu(){
      this.isOpen = !this.isOpen
    }
  }
</script>