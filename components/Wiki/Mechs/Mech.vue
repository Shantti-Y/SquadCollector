<template>
  <div class="mech">
    <div>
      <router-link :to="{path: `${mech.id}`}" append>
        <img :src="require(`~/assets/images/${mech.thumbnail}`)" :alt="mech.name">
        <p class="mech-name">{{ mech.name }}</p>
        <p class="mech-class">{{ mech.category }} class</p>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  const AppProps = Vue.extend({
    props: {
      mech: Object
    }
  })

  export default class Mech extends AppProps{
  }
</script>