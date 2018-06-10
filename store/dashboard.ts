import Vuex from 'vuex'

import { Squad } from '~/domains/Squad'

const dashboard = {
  state: {
    squads: new Array<Squad>()
  },
  actions: {
    submitNewSquad(context, squad){
      if (squad.isAssignable()){
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