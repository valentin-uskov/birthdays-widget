import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UsersList from '../UsersList'

const StyledUsersShortList = styled.div`

`;

const UsersShortList = ({ users }) => {

  const showMoreIndex = 10; /* FIXME */

  const [usersCount, setUsersCount] = useState(showMoreIndex);
  const [usersToShow, setUsersToShow] = useState([]);

  // FIXME - ?
  const sliceUsers = (array, start = 0, end) => {
    console.log(array.slice(start, end));
    if (array) return array.slice(start, end);
  }

  const showMoreClickHandler = () => {
    if (usersToShow.length === users.length) return;
    setUsersCount(usersCount + showMoreIndex);
  }

  useEffect(() => {
    setUsersToShow( sliceUsers(users, 0, usersCount) )
  }, [users, usersCount]);

  return (
    <StyledUsersShortList>
      { <UsersList users={usersToShow}/> }
      {
        (usersToShow.length !== users.length)
        && <button onClick={showMoreClickHandler}>SHOW MORE</button>
      }
    </StyledUsersShortList>
  );
}

export default UsersShortList;