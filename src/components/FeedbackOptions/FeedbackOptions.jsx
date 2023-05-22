import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = options => {
  return (
    <div className={css.container}>
      {options.options.map(label => (
        <button
          className={css.button}
          key={label}
          type="button"
          onClick={() => options.onLeaveFeedback(label)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  oprions: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
