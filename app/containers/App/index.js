/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'containers/Home/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Sidebar from 'components/Sidebar';

import GlobalStyle from '../../global-styles';

import { Container } from './styles';

export default function App() {
  return (
    <Container>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Container>
  );
}
