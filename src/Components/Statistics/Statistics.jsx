import PropTypes from 'prop-types';

import Notifications from '../Notifications';
import './Statistics.scss';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// import CircularProgressbar from '../StatusBar';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      {good > 0 || neutral > 0 || bad > 0 ? (
        <div className="stats__wrapper">
          <ul className="stats__list">
            <li className="stats__item">Good: {good}</li>
            <li className="stats__item">Neutral: {neutral}</li>
            <li className="stats__item">Bad: {bad}</li>
            <li className="stats__item">Total: {total}</li>
            <li className="stats__item">
              Positive feedback: {positivePercentage}%
            </li>
          </ul>
          <div className="stats__progressBar">
            <CircularProgressbar value={positivePercentage} text={`${positivePercentage}%`} />
          </div>
        </div>
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
