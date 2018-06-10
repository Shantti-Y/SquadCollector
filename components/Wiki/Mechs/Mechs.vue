<template>
  <div class="mechs" v-if="isOpen">
    <div v-for="(mech, idx) in mechs" :key="idx">
      <mech
        :mech="mech"
      />
    </div>
  </div>
</template>

<script>
import Mech from "~/components/Wiki/Mechs/Mech.vue"
  export default {
    props: {
      mechs: Array,
      isOpen: Boolean
    },
    components: {
      Mech
    }
  }
</script>