import { Component } from 'react';

import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';

import './Layout.scss'

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = elment => {
    const stateName = elment.target.textContent;

    if (stateName === 'good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
      return;
    }
    if (stateName === 'neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
      return;
    }
    if (stateName === 'bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
      return;
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentage = Math.ceil((this.state.good / total) * 100);

    return percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="feedback__wrapper">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}


FeedBack.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  // countTotalFeedback: 0,
  // countPositiveFeedbackPercentage: 0,
};

export default FeedBack;
