import React from 'react';
import styled from 'styled-components';
import UserListItem from '../UsersListItem'

const StyledUsersList = styled.div`

`;

const UsersList = ({ users }) =>
    <StyledUsersList>
      { users.map(user => <UserListItem key={user.id} user={user} />) }
    </StyledUsersList>

export default UsersList;