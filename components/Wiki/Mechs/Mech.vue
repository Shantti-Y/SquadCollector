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

<script>
import { mapGetters } from 'vuex'
  export default {
    props: {
      mech: Object
    },
  }
</script>