<template>
  <div class="group">
    <p class="group-name" @click="toggleSquadMenu">{{ group.name }}</p>
    <pilots
      :pilots="group.pilots"
      :isOpen="isOpen"
    />
  </div>
</template>

<script>
import Pilots from "~/components/Wiki/Pilots/Pilots.vue"

  export default {
    props: {
      group: Object
    },
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleSquadMenu(){
        this.isOpen = !this.isOpen
      }
    },
    components: {
      Pilots
    }
  }
</script>