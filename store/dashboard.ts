import Vuex from 'vuex'

import { Squad, SquadMethods } from '~/domains/Squad'

const dashboard = {
  state: {
    squads: []
  },
  actions: {
    submitNewSquad(context, squad){
      if (SquadMethods.isAssignable(squad)){
        context.commit('submitNewSquad', squad)
      }else{
        console.log('Return Error Message by commiting mutation')
      }
    }
  },
  mutations: {
    submitNewSquad(state, squad) {
      state.squads.push(squad)
    }
  }
}

export default dashboard