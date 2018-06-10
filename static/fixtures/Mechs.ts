import { Category, Color } from '~/domains/constants'
import { Mech } from '~/domains/Unit';
import Weapon from '~/static/fixtures/Weapons';
import Special from '~/static/fixtures/Specials';

// Rift Walkers
const combat = new Mech(
  1,
  "Combat Mech",
  3, 3,
  "mechs/combat_mech.png",
  Category.Prime, Color.Green
);
combat.attachWeapon(Weapon.titan_fist);

const cannon = new Mech(
  2,
  "Cannon Mech",
  3, 3,
  "mechs/cannon_mech.png",
  Category.Brute, Color.Green
);
cannon.attachWeapon(Weapon.taurus_cannon);

const artilliery = new Mech(
  3,
  "Artillery Mech",
  2, 3,
  "mechs/artilliery_mech.png",
  Category.Ranged, Color.Green
);
artilliery.attachWeapon(Weapon.artemis_artillery);

// Rusting Hulks
const jet = new Mech(
  4,
  "Jet Mech",
  2, 4,
  "mechs/jet_mech.png",
  Category.Brute, Color.Orange
);
jet.attachWeapon(Weapon.aerial_bombs);
jet.changeSpecial(Special.flying);

const rocket = new Mech(
  5,
  "Rocket Mech",
  3, 3,
  "mechs/rocket_mech.png",
  Category.Ranged, Color.Orange
);
rocket.attachWeapon(Weapon.rocket_artillery);
rocket.attachWeapon(Weapon.storm_generator);

const pulse = new Mech(
  6,
  "Pulse Mech",
  3, 4,
  "mechs/pulse_mech.png",
  Category.Science, Color.Orange
);
pulse.attachWeapon(Weapon.repulse);

export {
  combat, cannon, artilliery,
  jet, rocket, pulse
}
