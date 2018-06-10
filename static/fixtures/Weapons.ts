import { Category, Style } from '~/domains/constants'
import { Weapon } from '~/domains/Skill';

// Rift Walkers default weapons
const titan_fist = new Weapon(
  1,
  'Titan Fist',
  'Punch an adjacent tile, damaging and pushing it.',
  "weapons/titan_fist.png",
  Category.Prime, Style.Active
);
const taurus_cannon = new Weapon(
  2,
  'Taurus Cannon',
  'Fires a powerful projectile that damages and pushes its target.',
  "weapons/taurus_cannon.png",
  Category.Brute, Style.Active
);
const artemis_artillery = new Weapon(
  3,
  'Artemis Artillery',
  'Powerful artillery strike, damaging a single tile and pushing adjacent tiles.',
  "weapons/artemis_artillery.png",
  Category.Ranged, Style.Active
);

// Rusting Hulks default weapons
const aerial_bombs = new Weapon(
  4,
  'Aerial Bombs',
  'Fly over a target, dropping an explosive smoke bomb.',
  "weapons/aerial_bombs.png",
  Category.Brute, Style.Active
);
const rocket_artillery = new Weapon(
  5,
  'Rocket Artillery',
  'Fires a pushing artillery and creates Smoke behind the shooter.',
  "weapons/rocket_artillery.png",
  Category.Ranged, Style.Active
);
const storm_generator = new Weapon(
  6,
  'Storm Generator',
  'All Smoke deals damage to enemy units every turn.',
  "weapons/storm_generator.png",
  Category.Any, Style.Passive
);
const repulse = new Weapon(
  7,
  'Repulse',
  'Push all adjacent tiles.',
  "weapons/repulse.png",
  Category.Science, Style.Active
);

export default {
  titan_fist, taurus_cannon, artemis_artillery,
  aerial_bombs, rocket_artillery, storm_generator, repulse
}