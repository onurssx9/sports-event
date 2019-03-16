/**
 *
 * LanguageSwitch
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Language } from './styles';

const LanguageSwitch = props => (
  <Switch onClick={props.onClick}>
    <Language>{props.locale}</Language>
  </Switch>
);

LanguageSwitch.propTypes = {
  onClick: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
};

export default LanguageSwitch;
