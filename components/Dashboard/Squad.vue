<template>
  <div class="squad">
    <b-card
      :header="squad.name"
      align="center"
       class="mb-2">
        <div
          v-for="(mech, idx) in squad.mechs"
          :key="idx"
          class="mech-info">
          <div class="mech-thumbnail">
            <img :src="require(`~/assets/images/${mech.thumbnail}`)" :alt="mech.name">
          </div>
          
          <p class="mech-name">{{ mech.name }}</p>
        </div>
    </b-card>
  </div>
</template>

<script>
  export default {
    props: {
      squad: Object
    }
  }  
</script>

<style scoped>
  .mech-info {
    display: inline-block;
    width: 60px;
    margin: 0 8px;
  }
  .mech-thumbnail {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    width: 55px;
    height: 55px;
    border: 2px solid #cccccc;
    margin: 0 auto;
  }

  .mech-name {
    font-size: 16px;
  }

</style>
