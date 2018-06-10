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

<script lang="ts">
  import Vue from 'vue'
  import Component from 'nuxt-class-component'

  import SquadList from '~/components/Dashboard/SquadList.vue'

  @Component({
    components: {
      SquadList
    }
  })
  export default class DashboardPage extends Vue {
    get squads(){
      return this.$store.state.dashboard.squads
    }
  }  
</script>

<style>

</style>
