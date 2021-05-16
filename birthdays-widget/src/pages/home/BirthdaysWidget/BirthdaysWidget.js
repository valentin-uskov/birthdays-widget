import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled, { keyframes } from 'styled-components';
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
  width: 32px;
  height: 32px;
  border: 4px solid ;
  animation: 1s ${spin} linear infinite;
`;

const Preloader = () => <StyledPreloader />

const StyledBirthdaysWidget = styled.div`

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
       { usersLoaded
        ? <Tabs>
            <TabPane name="Past" key="1">
              {
                !pastBirthdays.length
                ? <p>Unfortunately there is no users with birthdays on these dates</p>
                : <UsersShortList users={pastBirthdays} />
              }
            </TabPane>
            <TabPane name="Today" key="2" active={true}>
              {
                !todayBirthdays.length
                ? <p>Unfortunately there is no users with birthdays on these dates</p>
                : <UsersShortList users={todayBirthdays} />
              }
            </TabPane>
            <TabPane name="Upcoming" key="3">
              {
                !upcomingBirthdays.length
                ? <p>Unfortunately there is no users with birthdays on these dates</p>
                : <UsersShortList users={upcomingBirthdays} />
              }
            </TabPane>
          </Tabs>
        : <Preloader />
      }
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

export default connect(mapStateToProps, mapDispatchToProps)(BirthdaysWidget);