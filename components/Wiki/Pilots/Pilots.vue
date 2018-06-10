<template>
  <div class="pilots" v-if="isOpen">
    <div v-for="(pilot, idx) in pilots" :key="idx">
      <pilot
        :pilot="pilot"
      />
    </div>
  </div>
</template>

<script>
import Pilot from './Pilot.vue'
  export default {
    props: {
      pilots: Array,
      isOpen: Boolean
    },
    components: {
      Pilot
    }
  }
</script>