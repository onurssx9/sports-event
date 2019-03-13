/*
 *
 * Home actions
 *
 */

import { START_CONNECTION, INSERT_DATA } from './constants';

export const startConnection = () => ({ type: START_CONNECTION });
export const insertData = data => ({ type: INSERT_DATA, data });
