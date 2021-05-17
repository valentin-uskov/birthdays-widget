import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import UserListItem from '../UsersListItem'


const StyledUsersList = styled.div`

`;

const UsersList = ({ users }) =>
    <StyledUsersList>
      { users.map(user => <UserListItem key={user.id} user={user} />) }
    </StyledUsersList>

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default UsersList;