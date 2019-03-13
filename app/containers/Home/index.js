/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import selectRaceData from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  Container,
  Title,
  RaceInformation,
  Description,
  AthleteCard,
  AthleteNumber,
  AthleteName,
} from './styles';
import { startConnection } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class Home extends React.PureComponent {
  componentWillMount = () => {
    this.props.connect();
  };

  getAthleteCards = () =>
    this.props.raceData.map(athlete => (
      <AthleteCard
        position={athlete.position}
        time={athlete.time}
        key={`${athlete.id}-${athlete.position}`}
      >
        <AthleteNumber>{athlete.number}</AthleteNumber>
        <AthleteName>{athlete.name}</AthleteName>
      </AthleteCard>
    ));

  render() {
    return (
      <Container>
        <Title>
          <FormattedMessage {...messages.header} />
        </Title>
        <Description>
          <FormattedMessage {...messages.description} />
        </Description>
        <RaceInformation>{this.getAthleteCards()}</RaceInformation>
      </Container>
    );
  }
}

Home.propTypes = {
  connect: PropTypes.func.isRequired,
  raceData: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  raceData: selectRaceData(),
});

function mapDispatchToProps(dispatch) {
  return {
    connect: () => dispatch(startConnection()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Home);
