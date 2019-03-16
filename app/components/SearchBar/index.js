/**
 *
 * SearchBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Search, Icon, Input } from './styles';

const SearchBar = props => (
  <Search>
    <Icon>
      <FontAwesomeIcon icon="search" />
    </Icon>
    <Input
      placeholder={props.placeholder || 'Search'}
      onChange={props.onChange}
      autoCorrect="false"
      autoComplete="false"
    />
  </Search>
);

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SearchBar;
