import { Category, Color } from '~/domains/constants';
import { Weapon, Special } from '~/domains/Skill';

interface Unit {
  id        :number;
  name      :string;
  health    :number;
  move      :number;
  thumbnail :string; // TODO: this should be another class
}

export class Mech implements Unit {
            id        :number
            name      :string
  readonly  health    :number
  readonly  move      :number
  readonly  thumbnail :string
  readonly  category  :Category
            color     :Color
            weapons: Weapon[] = new Array<Weapon>();
            special?: Special;
  constructor(id :number, name :string, health :number, move :number,
              thumbnail :string, category :Category, color :Color){
    this.id = id;
    this.name = name;
    this.health = health,
    this.move = move;
    this.thumbnail = thumbnail;
    this.category = category;
    this.color = color;
  }

  attachWeapon(weapon :Weapon){
    this.weapons.push(weapon);
  }

  detachWeapon(weapon :Weapon){
    const idx = this.findWeaponIndex(weapon.id)
    if (idx != undefined) {
      this.weapons.splice(idx, 1)
    }
  }

  changeSpecial(special? :Special){
    this.special = special
  }

  showCategory(this :Mech){
    return `${this.category} class`
  }

  hasLessThanTwoWeapons() {
    return this.weapons.length <= 2
  }

  private findWeaponIndex(id: number) {
    return this.weapons.findIndex(weapon => weapon.id === id)
  }
}

export class Vek implements Unit {
            id :number;
  readonly  name :string;
  readonly  health :number;
  readonly  move :number;
  readonly thumbnail :string;
  constructor(id :number, name :string, health :number, move :number, thumbnail :string) {
    this.id = id;
    this.name = name;
    this.health = health,
    this.move = move;
    this.thumbnail = thumbnail;
  }
}