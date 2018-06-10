<template>
  <div>
    {{ mech.name }}
    {{ mech.health }}
    {{ mech.move }}
    <img :src="require(`~/assets/images/${mech.thumbnail}`)" :alt="mech.name">
    {{ mech.color }}
    <div v-for="weapon in mech.weapons" :key="weapon.id">
      {{ weapon.name }}
      {{ weapon.description }}
      <img :src="require(`~/assets/images/${weapon.thumbnail}`)" :alt="weapon.name">
      {{ weapon.category }}
      {{ weapon.style }}
    </div>
    <div v-for="special in mech.specials" :key="special.id">
      {{ special.name }}
      {{ special.description }}
      <img :src="require(`~/assets/images/${special.thumbnail}`)" :alt="special.name">
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'

  export default {
    data () {
      return {
        mech: {}
      }
    },
    created () {
      const id = this.$route.params.id
      this.mech = this.$store.getters.findMechById(id)
    }
  }
</script>