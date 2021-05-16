import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { loadUsers } from '../actions';
import {
  usersLoadedSelector,
  todayBirthdaysSelector,
  upcomingBirthdaysSelector,
  pastBirthdaysSelector,
} from '../../../redux/selectors';
import Tabs from '../../../components/Tabs';
import TabPlane from '../../../components/TabPlane';
import UsersShortList from '../UsersShortList';


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
        <Tabs>
            <TabPlane name="Past" key="1">
              <UsersShortList users={pastBirthdays} />
            </TabPlane>
            <TabPlane name="Today" key="2">
              <UsersShortList users={todayBirthdays} />
            </TabPlane>
            <TabPlane name="Upcoming" key="3">
              <UsersShortList users={upcomingBirthdays} />
            </TabPlane>
        </Tabs>

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