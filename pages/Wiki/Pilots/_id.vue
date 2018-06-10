<template>
  <div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'

  export default class PilotIDPage extends Vue {
    pilot = {}
    
    created () {
      console.log(this)
      //const id = this.$route.params.id
      //this.pilot = this.$store.getters.findMechById(id)
    }
  }
</script>