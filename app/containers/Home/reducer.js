/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import { INSERT_DATA, SET_FILTER, SET_SEARCH } from './constants';

export const initialState = fromJS({
  raceData: [],
  filter: '',
  search: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case INSERT_DATA:
      return state.update('raceData', arr =>
        arr.splice(0, 0, fromJS(action.data)),
      );
    case SET_FILTER:
      return state.set('filter', action.filter);
    case SET_SEARCH:
      return state.set('search', action.value);
    default:
      return state;
  }
}

export default homeReducer;
