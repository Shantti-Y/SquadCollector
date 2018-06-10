<template>
  <div class="mechs" v-if="isOpen">
    <div v-for="(mech, idx) in mechs" :key="idx">
      <mech
        :mech="mech"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'nuxt-class-component'

  import Mech from "./Mech.vue"

  const AppProps = Vue.extend({
    props: {
      mechs: Array,
      isOpen: Boolean
    }
  })

  @Component({
    components: {
      Mech
    }
  })
  export default class Mechs extends AppProps{
  }
</script>