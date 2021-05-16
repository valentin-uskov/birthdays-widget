import React from 'react';
import styled from 'styled-components';

const StyledUserItem = styled.div`

  & img {
    width: 100px;
    height: 100px;
    // add keyframe opacity
  }

`;

const UserItem = ({user}) => {
  const { name, birthday, avatarUrl, jobTitle } = user;

  return (
    <StyledUserItem>
      <div>
        <img src={`https://birthday-api.anromsocial.com${avatarUrl}`} alt={name} />
      </div>
      <h3>{name}</h3>
      <h4>{jobTitle}</h4>
      <time>{birthday}</time>
    </StyledUserItem>
  );
}

export default UserItem;