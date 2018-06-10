import { Mech } from '~/domains/Unit'
import { Pilot } from '~/domains/Pilot'

export class Squad {
  name :string
  readonly original :boolean
  private mechs :Mech[] = new Array<Mech>()
  private pilot? :Pilot

  constructor(name :string, original :boolean = false){
    this.name = name
    this.original = original
  }
}

export const SquadMethods = {
  attachMech(squad, mech) {
    squad.mechs.push(mech)
  },

  detachMech(squad, mech) {
    const idx = this.findMechIndex(squad, mech.id)
    if (idx != undefined) {
      squad.mechs.splice(idx, 1)
    }
  },

  changePilot(squad, pilot) {
    squad.pilot = pilot
  },

  initializeMechs(squad, mechs) {
    mechs.forEach(mech => {
      this.attachMech(squad, mech)
    })
  },

  isAssignable(squad) {
    // && squad.pilot != undefined
    return squad.mechs.length == 3 && squad.name != ""
  },

  hasLessThanThreeMechs(squad) {
    return squad.mechs.length < 3
  },

  findMechIndex(squad, id) {
    return squad.mechs.findIndex(mech => mech.id === id)
  }
}