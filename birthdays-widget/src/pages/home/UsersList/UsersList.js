import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import UserItem from '../UserItem'

const StyledUsersList = styled.div`

`;

const UsersList = ({
  users
}) => {

  useEffect(() => {
  }, [])

  return (
    <StyledUsersList>
      { users.map(user => <UserItem key={user.id} user={user} />) }
    </StyledUsersList>
  );
}

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = dispatch => {
  return {
    // onLoadUsers: () => {
      // dispatch(loadUsers());
    // }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);