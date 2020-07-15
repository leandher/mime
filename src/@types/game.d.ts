import { Team } from './team';

export interface Game {
  duration: number;
  maxPoints: number;
  teams: Team[];
}
