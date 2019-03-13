import { insertData } from '../actions';
import { INSERT_DATA } from '../constants';

describe('Home actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: INSERT_DATA,
      };
      expect(insertData()).toEqual(expected);
    });
  });
});
