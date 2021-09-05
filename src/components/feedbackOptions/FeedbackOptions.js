import React from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ option, onLeaveFeedback }) => {
  return (
    <button
      key={option}
      name={option}
      type="button"
      className={s.Option}
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  );
};

FeedbackOptions.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
