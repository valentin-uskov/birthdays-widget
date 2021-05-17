import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UsersList from '../UsersList'

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  margin: 0 auto;
  background: none;
  border: none;
  outline: none;
  color: ${props => props.theme.colors.text.lightGray};
  cursor: pointer;

  & svg {
    margin-left: 8px;
  }
`
const UsersShortList = ({ users }) => {

  const showMoreAmount = 10;

  const [usersCount, setUsersCount] = useState(showMoreAmount);
  const [usersToShow, setUsersToShow] = useState([]);

  const sliceUsers = (array, start = 0, end) => {
    if (array) return array.slice(start, end);
  }

  const showMoreClickHandler = () => {
    if (usersToShow.length === users.length) return;
    setUsersCount(usersCount + showMoreAmount);
  }

  useEffect(() => {
    setUsersToShow( sliceUsers(users, 0, usersCount) );
  }, [users, usersCount]);

  return (
    <>
      { <UsersList users={usersToShow}/> }
      {
        (usersToShow.length !== users.length)
        && <StyledButton onClick={showMoreClickHandler}>
              Show more
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="chevron_right_24px">
                  <path id="icon/navigation/chevron_right_24px" d="M9.70501 6L8.29501 7.41L12.875 12L8.29501 16.59L9.70501 18L15.705 12L9.70501 6Z" fill="#4F4F4F"/>
                </g>
              </svg>
          </StyledButton>
      }
    </>
  );
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UsersShortList;