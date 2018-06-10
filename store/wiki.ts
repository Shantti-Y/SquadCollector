import Vuex from 'vuex'
import * as Mechs from '~/static/fixtures/Mechs'
import { Squad } from '~/domains/Squad'
import { Mech } from '~/domains/Unit'
import * as Pilots from '~/static/fixtures/Pilots'

const rift_walkers = new Squad('Rift Walkers', true)
rift_walkers.initializeMechs([Mechs.combat, Mechs.cannon, Mechs.artilliery])
const rusting_hulks = new Squad('Rusting Hulks', true)
rusting_hulks.initializeMechs([Mechs.jet, Mechs.rocket, Mechs.pulse])

const squads = [
  rift_walkers,
  rusting_hulks
]

const time_travelers = {
  id: 1,
  name: "Time Travelers",
  pilots: [
    Pilots.ralph_karlsson,
    Pilots.harold_schmidt,
    Pilots.abe_isamu,
    Pilots.bethany_jones,
    Pilots.henry_kwan
  ]
}

const groups = [
  time_travelers
]

const wiki = {
  state: {
    squads,
    groups
  },
  getters: {
    findMechById: (state) => (id) => {
      const key = Object.keys(Mechs).find((key, idx) => {
        return Mechs[key].id == id
      })
      return key != undefined ? Mechs[key] : null
    },
    findPilotById: (state) => (id) => {
      const key = Object.keys(Pilots).find((key, idx) => {
        return Pilots[key].id == id
      })
      return key != undefined ? Pilots[key] : null
    }
  }
}

export default wiki