import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import TabPane from '../TabPane';

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  max-width: 380px;
  margin: 0 auto;
  padding: 0;
  cursor: pointer;

  & li {
    flex-basis: 0;
    flex-grow: 1;
    color: ${props => props.theme.colors.main};

    & span {
      display: block;
      text-align: center;
    }

    &:nth-of-type(2) span {
      font-weight: 700;
    }
  }
`;

const Tabs = (props) => {

  const { children } = props;
  const [tabHeader, setTabHeader] = useState([]);
  const [childContent, setChildContent] = useState({});
  const [active, setActive] = useState('');

  useEffect(() => {

    const headers = [];
    const tmpChildContent = {};

    React.Children.forEach(children, (element) => {

      if (!React.isValidElement(element)) return;

      const { name, active } = element.props;

      active && setActive(name);
      headers.push(name);
      tmpChildContent[name] = element.props.children;
    });

    setTabHeader(headers);

    setChildContent({ ...tmpChildContent });
  }, [props, children]);

  const changeTab = (name) => {
    setActive(name);
  };

  return (
    <>
      <StyledUl>
        {tabHeader.map((item) => (
          <li
            onClick={() => changeTab(item)}
            key={item}
          >
            {item.split(' ').map((word) => <span key={word}>{word}</span>) }
          </li>
        ))}
      </StyledUl>

      {Object.keys(childContent).map((key) => {
        if (key !== active) return null;
        return <div key={key}>{childContent[key]}</div>;
      })}
    </>
  );
};

Tabs.propTypes = {
  children: function (props, propName, componentName) {
    const prop = props[propName];

    let error = null;

    React.Children.forEach(prop, function (child) {
      if (child.type !== TabPane) {
        error = new Error(
          '`' + componentName + '` children should be of type `TabPane`.'
        );
      }
    });
    return error;
  }
};

export default Tabs;