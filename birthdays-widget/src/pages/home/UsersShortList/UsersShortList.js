import React, { useEffect, useState } from 'react';
import UsersList from '../UsersList'

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
        && <button onClick={showMoreClickHandler}>SHOW MORE</button>
      }
    </>
  );
}

export default UsersShortList;