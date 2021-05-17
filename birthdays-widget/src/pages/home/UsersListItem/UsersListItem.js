import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledUsersListItem = styled.div`
  width: calc(50% - 10px);
  display: flex;
  margin: 15px 0;

  & img {
    width: 100px;
    height: 100px;
    flex-shrink: 0;
    border-radius: 50%;
    overflow: hidden;
  }

  & .info-box {
    display: flex;
    flex-direction: column;
    margin: 8px 0 8px 20px;
  }

  & h4 {
    color: ${props => props.theme.colors.text.lightGray};
    margin: 4px 0;
  }

  & time {
    font-weight: 700;
    margin-top: auto;
  }

  @media ${props => props.theme.media.small } {
    width: 100%;
    margin: 15px 20px;
  }
`;

const UsersListItem = ({user}) => {
  const { name, birthday, avatarUrl, jobTitle } = user;

  return (
    <StyledUsersListItem>
      <img src={`https://birthday-api.anromsocial.com${avatarUrl}`} alt={name} />
      <div className='info-box'>
        <h3>{name}</h3>
        <h4>{jobTitle}</h4>
        <time>{moment(birthday).format('MMM D')}</time>
      </div>
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