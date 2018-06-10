<template>
  <div class="pilot">
    <div>
      <router-link :to="{path: `${pilot.id}`}" append>
        <img :src="require(`~/assets/images/${pilot.thumbnail}`)" :alt="pilot.name">
        <p class="pilot-name">{{ pilot.name }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      pilot: Object
    },
  }
</script>