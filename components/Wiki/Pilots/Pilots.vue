<template>
  <div class="pilots" v-if="isOpen">
    <div v-for="(pilot, idx) in pilots" :key="idx">
      <pilot
        :pilot="pilot"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'nuxt-class-component'

  import Pilot from './Pilot.vue'

  const AppProps = Vue.extend({
    props: {
      pilots: Array,
      isOpen: Boolean
    }
  })

  @Component({
    components: {
      Pilot
    }
  })
  export default class Pilots extends AppProps{
  }
</script>