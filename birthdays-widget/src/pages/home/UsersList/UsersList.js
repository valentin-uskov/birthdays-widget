import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import UserListItem from '../UsersListItem'

const StyledUsersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 540px;
  margin: 30px auto;

  @media ${props => props.theme.media.small } {
    max-width: 100%;
    margin: 30px 0;
  }
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