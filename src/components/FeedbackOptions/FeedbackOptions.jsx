import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export default class FeedbackOptions extends React.Component {
  static propTypes = {
    oprions: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
  };

  render() {
    return (
      <div className={css.container}>
        {this.props.options.map(label => (
          <button
            className={css.button}
            key={label}
            type="button"
            onClick={() => this.props.onLeaveFeedback(label)}
          >
            {label}
          </button>
        ))}
      </div>
    );
  }
}
