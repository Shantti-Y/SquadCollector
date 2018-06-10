<template>
  <div class="squad-list">
    <div v-for="(squad, idx) in squads" :key="idx">
      <squad
        :squad="squad"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'nuxt-class-component'

  import Squad from './Squad.vue'

  const AppProps = Vue.extend({
    props: {
      squads: Array
    }
  })

  @Component({
    components: {
      Squad
    }
  })
  export default class SquadList extends AppProps {
  }
</script>