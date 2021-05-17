import React, { useEffect, useState } from 'react';
import TabPane from '../TabPane';

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
    <div>
      <ul>
        {tabHeader.map((item) => (
          <li
            onClick={() => changeTab(item)}
            key={item}
            className={item === active ? 'active' : ''}
            style={item === active ? {color: 'red'} : {}} /*FIXME - tmp*/
          >
            {item}
          </li>
        ))}
      </ul>

      <div>
        {Object.keys(childContent).map((key) => {
          if (key !== active) return null;
          return <div key={key}>{childContent[key]}</div>;
        })}
      </div>
    </div>
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