<template>
  <div class="squad-list">
    <div v-for="(squad, idx) in squads" :key="idx">
      <squad
        :squad="squad"
      />
    </div>
  </div>
</template>

<script>
  import Squad from './Squad.vue'
  export default {
    props: {
      squads: Array
    },
    components: {
      Squad
    }
  }
</script>