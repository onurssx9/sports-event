/**
 *
 * Sidebar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import messages from './messages';
import { Wrapper, Logo, Brand } from './styles';

function Sidebar() {
  return (
    <Wrapper>
      <Logo>
        <FontAwesomeIcon icon="running" />
      </Logo>
      <Brand>
        <FormattedMessage {...messages.header} />
      </Brand>
    </Wrapper>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
