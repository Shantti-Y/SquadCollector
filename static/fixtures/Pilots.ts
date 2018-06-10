import { Pilot, PilotMethods } from '~/domains/Pilot';
import { Grade } from '~/domains/constants';
import Ability from '~/static/fixtures/Abilities';

const ralph_karlsson = new Pilot(
  1,
  "Ralph Karlsson",
  'pilots/ralph_karlsson.png',
  Grade.Timetraveler
);
PilotMethods.attachAbility(ralph_karlsson, Ability.experienced);

const harold_schmidt = new Pilot(
  2,
  "Harold Schmidt",
  'pilots/harold_schmidt.png',
  Grade.Timetraveler
);
PilotMethods.attachAbility(harold_schmidt, Ability.frenzied_repair);

const abe_isamu = new Pilot(
  3,
  "Abe Isamu",
  'pilots/abe_isamu.png',
  Grade.Timetraveler
);
PilotMethods.attachAbility(abe_isamu, Ability.armored);

const bethany_jones = new Pilot(
  4,
  "Bethany Jones",
  'pilots/bethany_jones.png',
  Grade.Timetraveler
);
PilotMethods.attachAbility(bethany_jones, Ability.starting_shield);

const henry_kwan = new Pilot(
  5,
  "Henry Kwan",
  'pilots/henry_kwan.png',
  Grade.Timetraveler
);
PilotMethods.attachAbility(henry_kwan, Ability.maneuverable);

export { ralph_karlsson, harold_schmidt, abe_isamu, bethany_jones, henry_kwan }
