<template>
  <div class="squad">
    <p class="squad-name" @click="toggleSquadMenu">{{ squad.name }}</p>
    <mechs
      :mechs="squad.mechs"
      :isOpen="isOpen"
    />
  </div>
</template>

<script>
import Mechs from "~/components/Wiki/Mechs/Mechs.vue"

  export default {
    props: {
      squad: Object
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
      Mechs
    }
  }
</script>