<template>
  <div id="categories">
    <h2>Choose Mech</h2>
    <div v-for="collection in mech_collection" :key="collection.name">
      {{ collection.name }}
      <div v-for="mech in collection.mechs"
        :key="mech.id"
        @click.left="addMechToSquad(mech)"
        @click.right.prevent="reduceMechFromSquad(mech)"
        >
        {{ mech.name }}
        <img :src="require(`~/assets/images/${mech.thumbnail}`)" :alt="mech.name">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  const AppProps = Vue.extend({
    props: {
      mech_collection: Array
    }
  })
  export default class Categories extends AppProps {

    addMechToSquad(mech){
      this.$store.dispatch('addMechToSquad', mech)
    }
    reduceMechFromSquad(mech){
      this.$store.dispatch('reduceMechFromSquad', mech)
    }
  }  
</script>

<style>

</style>
