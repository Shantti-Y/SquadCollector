<template>
  <div>
    {{ pilot.name }}
    <img :src="require(`~/assets/images/${pilot.thumbnail}`)" :alt="pilot.name">
    {{ pilot.grade }}
    <div v-for="ability in pilot.abilities" :key="ability.id">
      {{ ability.name }}
      {{ ability.description }}
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'

  export default {
    data () {
      return {
        pilot: {}
      }
    },
    created () {
      const id = this.$route.params.id
      this.pilot = this.$store.getters.findPilotById(id)
    }
  }
</script>