import { Special } from '~/domains/Skill';

const natural_armor = new Special(
  1,
  'Natural Armor',
  'Weapon damage to this unit is reduced by 1. All other damage (Push, Blocking, Fire, etc.) is unaffected.',
  "specials/natural_armor.png"
);

const flying = new Special(
  2,
  'Flying',
  'Flying units can move over any terrain tile.',
  "specials/flying.png"
);

export default {
  natural_armor, flying
}