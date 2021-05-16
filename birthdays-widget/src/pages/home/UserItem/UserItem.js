import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

const StyledUserItem = styled.div`

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

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = dispatch => {
  return {
    // onLoadUsers: () => {
      // dispatch(loadUsers());
    // }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserItem);