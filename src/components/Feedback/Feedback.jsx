import React from 'react';

export default class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodBtn = () => {
    this.setState(preveusState => {
      return { good: preveusState.good + 1 };
    });
  };

  handleNeutralBtn = () => {
    this.setState(preveusState => {
      return { neutral: preveusState.neutral + 1 };
    });
  };

  handleBadBtn = () => {
    this.setState(preveusState => {
      return { bad: preveusState.bad + 1 };
    });
  };

  countTotalFeedback() {}
  countPositiveFeedbackPercentage() {}

  render() {
    return (
      <div className="Feedback">
        <h2 className="Feedback__title">Please leave feedback</h2>
        <button type="button" onClick={this.handleGoodBtn}>
          Good
        </button>
        <button type="button" onClick={this.handleNeutralBtn}>
          Neutral
        </button>
        <button type="button" onClick={this.handleBadBtn}>
          Bad
        </button>
        <h2 className="Statistics__title">Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral} </p>
        <p>Bad: {this.state.bad} </p>
        <p>Total: {this.state.good + this.state.neutral + this.state.bad} </p>
        <p>
          Positive feedback:{' '}
          {Math.round(
            (this.state.good * 100) /
              (this.state.good + this.state.neutral + this.state.bad)
          )}
          %
        </p>
      </div>
    );
  }
}
