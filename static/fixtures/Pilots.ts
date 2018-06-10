import { Pilot } from '~/domains/Pilot';
import { Grade } from '~/domains/constants';
import Ability from '~/static/fixtures/Abilities';

const ralph_karlsson = new Pilot(
  1,
  "Ralph Karlsson",
  'pilots/ralph_karlsson.png',
  Grade.Timetraveler
);
ralph_karlsson.attachAbility(Ability.experienced);

const harold_schmidt = new Pilot(
  2,
  "Harold Schmidt",
  'pilots/harold_schmidt.png',
  Grade.Timetraveler
);
harold_schmidt.attachAbility(Ability.frenzied_repair);

const abe_isamu = new Pilot(
  3,
  "Abe Isamu",
  'pilots/abe_isamu.png',
  Grade.Timetraveler
);
abe_isamu.attachAbility(Ability.armored);

const bethany_jones = new Pilot(
  4,
  "Bethany Jones",
  'pilots/bethany_jones.png',
  Grade.Timetraveler
);
bethany_jones.attachAbility(Ability.starting_shield);

const henry_kwan = new Pilot(
  5,
  "Henry Kwan",
  'pilots/henry_kwan.png',
  Grade.Timetraveler
);
henry_kwan.attachAbility(Ability.maneuverable);

export { ralph_karlsson, harold_schmidt, abe_isamu, bethany_jones, henry_kwan }
