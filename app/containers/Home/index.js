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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from 'components/SearchBar';
import { selectRaceData, selectFilter, selectSearch } from './selectors';
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
  FiltersWrapper,
  Filter,
} from './styles';
import { startConnection, switchFilter, setSearch } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class Home extends React.PureComponent {
  componentWillMount = () => {
    this.props.connect();
  };

  filterByPosition = data =>
    data.filter(
      athlete => athlete.position.indexOf(this.props.filter) > -1 && athlete,
    );

  filterByName = data =>
    data.filter(
      athlete => athlete.name.indexOf(this.props.search) === 0 && athlete,
    );

  getAthleteCards = () => {
    const athletesFilteredByPosition = this.filterByPosition(
      this.props.raceData,
    );
    const athletesFilteredByName = this.filterByName(
      athletesFilteredByPosition,
    );

    return athletesFilteredByName.map(athlete => (
      <AthleteCard
        position={athlete.position}
        time={athlete.time}
        key={`${athlete.id}-${athlete.position}`}
      >
        <AthleteNumber>{athlete.number}</AthleteNumber>
        <AthleteName>{athlete.name}</AthleteName>
      </AthleteCard>
    ));
  };

  render() {
    return (
      <Container>
        <Title>
          <FormattedMessage {...messages.header} />
        </Title>
        <Description>
          <FormattedMessage {...messages.description} />
        </Description>
        <FiltersWrapper>
          <Filter onClick={this.props.onFilter} filter={this.props.filter}>
            <FontAwesomeIcon icon="filter" />
          </Filter>
          <SearchBar onChange={event => this.props.onSearch(event)} />
        </FiltersWrapper>
        <RaceInformation>{this.getAthleteCards()}</RaceInformation>
      </Container>
    );
  }
}

Home.propTypes = {
  connect: PropTypes.func.isRequired,
  raceData: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
  search: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  raceData: selectRaceData(),
  filter: selectFilter(),
  search: selectSearch(),
});

function mapDispatchToProps(dispatch) {
  return {
    connect: () => dispatch(startConnection()),
    onFilter: () => dispatch(switchFilter()),
    onSearch: event => dispatch(setSearch(event.target.value)),
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
