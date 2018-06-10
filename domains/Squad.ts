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

  attachMech(mech :Mech){
    this.mechs.push(mech)
  }

  detachMech(mech :Mech){
    const idx = this.findMechIndex(mech.id)
    if(idx != undefined){
      this.mechs.splice(idx, 1)
    }
  }

  changePilot(pilot :Pilot){
    this.pilot = pilot
  }

  initializeMechs (mechs: Array<Mech>) {
    mechs.forEach(mech => {
      this.attachMech(mech)
    })
  }

  isAssignable () {
    return this.mechs.length == 3 && this.pilot != undefined
  }

  hasLessThanThreeMechs () {
    return this.mechs.length <= 3
  }

  private findMechIndex(id :number){
    return this.mechs.findIndex(mech => mech.id === id)
  }
}