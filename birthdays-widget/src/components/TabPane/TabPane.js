import React from "react";
import PropTypes from "prop-types";

const TabPane = (props) => <div>{props.childern}</div>;

TabPane.propTypes = {
  name: PropTypes.string
};

export default TabPane;