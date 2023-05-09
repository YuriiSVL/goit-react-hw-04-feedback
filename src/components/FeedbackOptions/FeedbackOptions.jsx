import React from 'react';

export default class FeedbackOptions extends React.Component {
  render() {
    return (
      <div className="FeedbackOptions">
        {this.props.options.map(label => (
          <button
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
