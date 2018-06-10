import { Ability } from '~/domains/Skill';

const experienced = new Ability(
  1,
  "Experienced",
  "Gain +2 bonus XP per kill."
);

const frenzied_repair = new Ability(
  2,
  "Frenzied Repair",
  "Push adjacent tiles when repairing."
);

const armored = new Ability(
  3,
  "Armored",
  "Mech gains Armored."
);

const starting_shield = new Ability(
  4,
  "Starting Shield",
  "Mech starts every mission with a Shield."
);

const maneuverable = new Ability(
  5,
  "Maneuverable",
  "Mech can move through enemy units."
);

export default {
  experienced, frenzied_repair, armored,
  starting_shield, maneuverable
}