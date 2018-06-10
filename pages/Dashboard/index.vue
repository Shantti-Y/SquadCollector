<template>
  <div id="dashboard">
    <h1>Welcome to Sqaud Collection</h1>
    <div class="cards">
      <squad-list 
        :squads="squads"
      />
    </div>
  </div>
</template>

<script>
  import SquadList from '../../components/Dashboard/SquadList.vue'
  export default {
    computed: {
      squads(){ return this.$store.state.dashboard.squads }
    },
    components: {
      SquadList
    }
  }  
</script>

<style>

</style>
