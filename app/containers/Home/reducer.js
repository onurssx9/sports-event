/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import { INSERT_DATA } from './constants';

export const initialState = fromJS({
  raceData: [],
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case INSERT_DATA:
      return state.update('raceData', arr =>
        arr.splice(0, 0, fromJS(action.data)),
      );
    default:
      return state;
  }
}

export default homeReducer;
