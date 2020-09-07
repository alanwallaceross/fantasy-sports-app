import PropTypes from "prop-types";
import React from "react";

export default function Card({ children }) {
  return <div>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.any,
};
