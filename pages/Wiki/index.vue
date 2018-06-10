<template>
  <div id="wiki">
    <h1>Wiki</h1>
    <div v-for="(path, idx) in paths" :key="idx">
      <router-link
        :to="path.url"
      append>
      {{ path.name }}
      </router-link>
    </div>
    
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default class WikiPage extends Vue{
    paths = [
          {
            name: "Mechs",
            url: "mechs"
          },
           {
            name: "Pilots",
            url: "pilots"
          }
        ]
  }
</script>