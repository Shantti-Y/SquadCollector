<template>
  <div id="pilots">
    <div v-for="(group, idx) in groups" :key="idx">
      <group
        :group="group"
      />
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import Component from 'nuxt-class-component'

  import Group from "~/components/Wiki/Pilots/Group.vue"

  @Component({
    components: {
      Group
    }
  })
  export default class PilotsPage extends Vue {
    get groups() {
      return this.$store.state.wiki.groups
    }
  }
</script>