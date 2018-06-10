<template>
  <div class="your-squad">
    <h2>Your Mechs</h2>
    <h3>Squad Name</h3>
    <input type="text" v-model="squad_name">
    <div v-for="(selected_mech, idx) in squad.mechs" :key="idx">
      <img :src="require(`~/assets/images/${selected_mech.thumbnail}`)" :alt="selected_mech.name">
    </div>
    <router-link to="/dashboard">
      <button @click="insertYourSquad">Submit</button>
    </router-link>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  // REVIEW vue class componentの使い方を知る
  const AppProps = Vue.extend({
    props: {
      squad :Object
    }
  })
  export default class YourSquad extends AppProps {

    get squad_name() {
      return this.squad.name
    }
    set squad_name(value){
      this.$store.dispatch('updateMechName', value)
    }

    insertYourSquad(){
      this.$store.dispatch('submitNewSquad', this.squad)
    }
  }  
</script>

<style>

</style>
