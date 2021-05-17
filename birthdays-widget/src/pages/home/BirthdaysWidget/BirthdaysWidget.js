import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { loadUsers } from '../actions';
import {
  usersLoadedSelector,
  todayBirthdaysSelector,
  upcomingBirthdaysSelector,
  pastBirthdaysSelector,
} from '../selectors';
import Tabs from '../../../components/Tabs';
import TabPane from '../../../components/TabPane';
import UsersShortList from '../UsersShortList';
import giftImg from '../../../assets/images/gift.png';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const StyledPreloader = styled.div`
  display: block;
  margin: 30px auto;
  width: 32px;
  height: 32px;
  border: 4px solid ${props => props.theme.colors.main};
  border-radius: 50%;
  border-top: 4px solid #FFFFFF;
  animation: 1s ${spin} linear infinite;
`;

const Preloader = () => <StyledPreloader />

const StyledBirthdaysWidget = styled.div`

  & header {
    height: 140px;
    border-bottom: 6px solid ${props => props.theme.colors.main};
    background-image: url(${giftImg});
    background-position: bottom center;
    background-size: auto 90%;
    background-repeat: no-repeat;
  }

  & section {
    min-height: calc(100vh - 140px);
    margin-bottom: 30px;
    background-image: linear-gradient(${props => props.theme.colors.gradientStart}, #FFFFFF);
    background-size: 100% 50vh;
    background-repeat: no-repeat;
  }

  & h1 {
    padding: 30px;
    font-size: 30px;
    line-height: 1;
    text-align: center;
    text-transform: uppercase;
    color: ${props => props.theme.colors.main};
    font-weight: 700;
  }
`;

const BirthdaysWidget = ({
                    todayBirthdays,
                    upcomingBirthdays,
                    pastBirthdays,
                    usersLoaded,
                    onLoadUsers,}) => {

  useEffect(() => {
    onLoadUsers();
  }, [])

  return (
    <StyledBirthdaysWidget>
        <header></header>
        <section>
        <h1>Birthdays</h1>
       { usersLoaded
        ? <Tabs>
            <TabPane name="PAST dates" key="1">
              {
                !pastBirthdays.length
                ? <p>Unfortunately there is no users with birthdays on these dates</p>
                : <UsersShortList users={pastBirthdays} />
              }
            </TabPane>
            <TabPane name="TODAY" key="2" active={true}>
              {
                !todayBirthdays.length
                ? <p>Unfortunately there is no users with birthdays on these dates</p>
                : <UsersShortList users={todayBirthdays} />
              }
            </TabPane>
            <TabPane name="UPCOMING dates" key="3">
              {
                !upcomingBirthdays.length
                ? <p>Unfortunately there is no users with birthdays on these dates</p>
                : <UsersShortList users={upcomingBirthdays} />
              }
            </TabPane>
          </Tabs>
        : <Preloader />
      }
    </section>
    </StyledBirthdaysWidget>
  );
}

const mapStateToProps = createStructuredSelector({
  usersLoaded: usersLoadedSelector,
  todayBirthdays: todayBirthdaysSelector,
  upcomingBirthdays: upcomingBirthdaysSelector,
  pastBirthdays: pastBirthdaysSelector,
});

const mapDispatchToProps = dispatch => {
  return {
    onLoadUsers: () => {
      dispatch(loadUsers());
    }
  }
};

BirthdaysWidget.propTypes = {
  todayBirthdays: PropTypes.array.isRequired,
  upcomingBirthdays: PropTypes.array.isRequired,
  pastBirthdays: PropTypes.array.isRequired,
  onLoadUsers: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BirthdaysWidget);