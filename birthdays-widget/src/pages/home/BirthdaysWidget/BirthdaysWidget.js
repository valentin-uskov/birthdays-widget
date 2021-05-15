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
  }, [onLoadUsers, usersLoaded])

  return (
    <StyledBirthdaysWidget>
      Init start
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