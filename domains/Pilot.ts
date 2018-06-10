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

  attachAbility(ability :Ability){
    this.abilities.push(ability);
  }

  detachAblity(ability :Ability){
    const idx = this.findAbilityIndex(ability.id)
    if (idx != undefined) {
      this.abilities.splice(idx, 1)
    }
  }

  // Depends on grade
  hasLessThanThreeAbilities() {
    return this.abilities.length <= 3
  }

  private findAbilityIndex(id: number) {
    return this.abilities.findIndex(ability => ability.id === id)
  }
}