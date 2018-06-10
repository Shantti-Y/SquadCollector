import { Grade } from '~/domains/constants';
import { Ability } from '~/domains/Skill';

export class Pilot {
  id :number;
  name :string;
  thumbnail :string;
  abilities: Ability[] = new Array<Ability>();
  grade :Grade;

  constructor(id :number, name :string, thumbnail :string, grade :Grade){
    this.id = id;
    this.name = name;
    this.thumbnail = thumbnail;
    this.grade = grade;
  }
}

export const PilotMethods = {

  attachAbility(pilot, ability) {
    pilot.abilities.push(ability);
  },

  detachAblity(pilot, ability) {
    const idx = pilot.findAbilityIndex(ability.id)
    if (idx != undefined) {
      pilot.abilities.splice(idx, 1)
    }
  },

  // Depends on grade
  hasLessThanThreeAbilities(pilot) {
    return pilot.abilities.length < 3
  },

  findAbilityIndex(pilot, id) {
    return pilot.abilities.findIndex(ability => ability.id === id)
  }
}