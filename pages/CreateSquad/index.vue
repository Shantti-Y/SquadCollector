<template>
  <div id="create-squad">
    <h1>Create Squad</h1>

    <your-squad
      :squad="squad"
    />

    <categories
      :mech_collection="mech_collection"
    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'nuxt-class-component'

  import YourSquad from '~/components/CreateSquad/YourSquad.vue'
  import Categories from '~/components/CreateSquad/Categories.vue'

  @Component({
    components: {
      YourSquad,
      Categories
    }
  })

  export default class CreateSquadPage extends Vue {
    squad :Object = this.$store.state.create_squad.squad;
    mech_collection :Array<Object> = this.$store.state.create_squad.mech_collection;

    created() {
      this.$store.dispatch('initializeSquad')
    }
  }
</script>

<style>

</style>
