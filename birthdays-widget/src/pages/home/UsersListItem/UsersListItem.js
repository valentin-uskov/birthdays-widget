import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledUsersListItem = styled.div`

  & img {
    width: 100px;
    height: 100px;
    // add keyframe opacity
  }

`;

const UsersListItem = ({user}) => {
  const { name, birthday, avatarUrl, jobTitle } = user;

  return (
    <StyledUsersListItem>
      <div>
        <img src={`https://birthday-api.anromsocial.com${avatarUrl}`} alt={name} />
      </div>
      <h3>{name}</h3>
      <h4>{jobTitle}</h4>
      <time>{birthday}</time>
    </StyledUsersListItem>
  );
}

UsersListItem.propTypes = {
  user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      birthday: PropTypes.string,
      avatarUrl: PropTypes.string,
      jobTitle: PropTypes.string,
    }).isRequired
};

export default UsersListItem;