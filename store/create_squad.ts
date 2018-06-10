import Vuex from 'vuex'

import { Classes, Constants } from '~/domains/index'
const { Category } = Constants

import * as Mechs from '~/static/fixtures/Mechs'
import * as Pilots from '~/static/fixtures/Pilots'

import { Mech } from '~/domains/Unit';
import { Squad } from '~/domains/Squad';

const sortMechsByClass = (category) => {
  const keys = Object.keys(Mechs).filter(mech => Mechs[mech].category == category)
  return keys.map(key => Mechs[key])
}

const prime_class = {
  name: 'Prime Class',
  mechs: sortMechsByClass(Category.Prime)
}
const brute_class = {
  name: 'Brute Class',
  mechs: sortMechsByClass(Category.Brute)
}
const ranged_class = {
  name: 'Ranged Class',
  mechs: sortMechsByClass(Category.Ranged)
}
const science_class = {
  name: 'Science Class',
  mechs: sortMechsByClass(Category.Science)
}

const create_squads = {
  state: {
    squad: new Squad(''),
    mech_collection: [
      prime_class,
      brute_class,
      ranged_class,
      science_class
    ]
  },
  actions: {
    addMechToSquad ({ commit, state }, mech :Mech){
      if (state.squad.hasThreeMechs()){
        commit('addMechToSquad', mech)
      }else{
        console.log('Return Error Message by commiting mutation')
      }
    },
    reduceMechFromSquad(context, mech: Mech) {
      context.commit('reduceMechFromSquad', mech)
    },
    updateMechName(context, value :string) {
      context.commit('updateMechName', value)
    },
    initializeSquad(context){
      context.commit('initializeSquad')
    }
  },
  mutations: {
    addMechToSquad(state, mech :Mech) {
      state.squad.attachMech(mech)
    },
    reduceMechFromSquad(state, mech :Mech) {
      state.squad.detachMech(mech)
    },
    updateMechName(state, value :string) {
      state.squad.name = value
    },
    initializeSquad(state) {
      state.squad = new Squad('')
    }
  }
}

export default create_squads