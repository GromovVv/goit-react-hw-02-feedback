import PropTypes from 'prop-types';

import Notifications from '../Notifications'
import './Statistics.scss'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      {good > 0 || neutral > 0 || bad > 0 ? (
        <ul className="stats__list">
          <li className="stats__item">Good: {good}</li>
          <li className="stats__item">Neutral: {neutral}</li>
          <li className="stats__item">Bad: {bad}</li>
          <li className="stats__item">Total: {total}</li>
          <li className="stats__item">
            Positive feedback: {positivePercentage}%
          </li>
        </ul>
      ) : (
        <Notifications message="No feedback given"></Notifications>
      )}
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};