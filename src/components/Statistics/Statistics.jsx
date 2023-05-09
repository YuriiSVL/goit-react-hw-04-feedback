import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="Statistics">
      <h2 className="Statistics__title">Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral} </p>
      <p>Bad: {bad} </p>
      <p>Total: {total} </p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
