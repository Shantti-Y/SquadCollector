<template>
  <div id="mechs">
    <div v-for="(squad, idx) in squads" :key="idx">
      <squad
        :squad="squad"
      />
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'

  import Squad from "~/components/Wiki/Mechs/Squad.vue"

  export default {
    computed: {
      squads() { return this.$store.state.wiki.squads }
    },
    components: {
      Squad
    }
  }
</script>