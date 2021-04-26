// import PropTypes from 'prop-types';

import './FeedbackOptions.scss'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
        return (
            <ul className="feedback__list">
            {Object.keys(options).map(key => {
              return (
                <li className="feedback__item" key={key}>
                  <button
                    type="button"
                    className="feedback__btn"
                    onClick={onLeaveFeedback}
                  >
                    {key}
                  </button>
                </li>
              );
            })}
          </ul>
        );
}

export default FeedbackOptions;