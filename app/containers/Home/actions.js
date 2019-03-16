/*
 *
 * Home actions
 *
 */

import {
  START_CONNECTION,
  INSERT_DATA,
  SWITCH_FILTER,
  SET_FILTER,
  SET_SEARCH,
} from './constants';

export const startConnection = () => ({ type: START_CONNECTION });
export const insertData = data => ({ type: INSERT_DATA, data });
export const switchFilter = () => ({ type: SWITCH_FILTER });
export const setFilter = filter => ({ type: SET_FILTER, filter });
export const setSearch = value => ({ type: SET_SEARCH, value });
