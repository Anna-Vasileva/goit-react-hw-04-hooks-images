import React from "react";
import PropTypes from "prop-types";
import s from "./Button.module.css";

const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className={s.Button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
