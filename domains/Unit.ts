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
}

export const MechMethods = {
  attachWeapon(mech, weapon) {
    mech.weapons.push(weapon);
  },

  detachWeapon(mech, weapon) {
    const idx = mech.findWeaponIndex(weapon.id)
    if (idx != undefined) {
      mech.weapons.splice(idx, 1)
    }
  },

  changeSpecial(mech, special?) {
    mech.special = special
  },

  showCategory(mech) {
    return `${mech.category} class`
  },

  hasLessThanTwoWeapons(mech) {
    return mech.weapons.length < 2
  },

  findWeaponIndex(mech, id) {
    return mech.weapons.findIndex(weapon => weapon.id === id)
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