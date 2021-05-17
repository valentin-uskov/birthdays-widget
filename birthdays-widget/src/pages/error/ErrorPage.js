import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10vh;

  & > h1 {
    font-size: 32px;
    text-align: center;
  }

  & > a {
    font-size: 1.5em;
    margin: 1em auto;
  }
`;

const ErrorPage = (error = 'Unknown error') =>
  <ErrorPageWrapper>
    <h1>{error}</h1>
    <Link to="/">Go home...</Link>
  </ErrorPageWrapper>

export default ErrorPage;