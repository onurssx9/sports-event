import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the home state domain
 */

const selectHomeDomain = state => state.get('home', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Home
 */

const selectRaceData = () =>
  createSelector(selectHomeDomain, substate => substate.get('raceData').toJS());

export default selectRaceData;
export { selectHomeDomain };
