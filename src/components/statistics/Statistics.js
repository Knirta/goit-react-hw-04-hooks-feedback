import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statisctics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={s.Text}>
        good: <span>{good}</span>
      </p>
      <p className={s.Text}>
        neutral: <span>{neutral}</span>
      </p>
      <p className={s.Text}>
        bad: <span>{bad}</span>
      </p>
      <p className={s.Text}>Total: {total}</p>
      <p className={s.Text}>Positive feedbacks: {positivePercentage}%</p>
    </>
  );
};

Statisctics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statisctics;
