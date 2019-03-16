import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomeDomain = state => state.get('home', initialState);

const selectRaceData = () =>
  createSelector(selectHomeDomain, substate => substate.get('raceData').toJS());

const selectFilter = () =>
  createSelector(selectHomeDomain, substate => substate.get('filter'));

const selectSearch = () =>
  createSelector(selectHomeDomain, substate => substate.get('search'));

export { selectHomeDomain, selectRaceData, selectFilter, selectSearch };
