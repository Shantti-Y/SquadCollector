<template>
  <div id="pilots">
    <div v-for="(group, idx) in groups" :key="idx">
      <group
        :group="group"
      />
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'

  import Group from "~/components/Wiki/Pilots/Group.vue"

  export default {
    computed: {
      groups() { return this.$store.state.wiki.groups }
    },
    components: {
      Group
    }
  }
</script>