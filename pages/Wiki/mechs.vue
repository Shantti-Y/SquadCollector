<template>
  <div id="mechs">
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

  import Squad from "~/components/Wiki/Mechs/Squad.vue"

  @Component({
    components: {
      Squad
    }
  })
  export default class MechsPage extends Vue {
    get squads() {
      return this.$store.state.wiki.squads
    }
    
  }
</script>