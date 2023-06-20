import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import css from './Feedback.module.css';

export class Feedback extends Component {
  constructor({ props }) {
    super();
    this.state = { ...props };
  }
  feedbackBtnClick = (e, key) => {
    e.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      [key]: prevState[key] + 1,
    }));
  };
  countTotalFeedback = () =>
    Object.values({ ...this.state }).reduce((a, b) => a + b, 0);
  countPositiveFeedbackPercentage = () =>
    Math.round((100 * this.state.good) / this.countTotalFeedback() || 0);

  render() {
    const total = this.countTotalFeedback();
    const stats = {
      stats: { ...this.state },
      total: total,
      positivePercentage: this.countPositiveFeedbackPercentage(),
    };

    return (
      <div className={css.feedback}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={[...Object.keys(this.state)]}
            onLeaveFeedback={this.feedbackBtnClick}
          />
        </Section>
        <Section title="Statistics">
          <>
            {total ? (
              <Statistics {...stats} />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </>
        </Section>
      </div>
    );
  }
}

Feedback.propTypes = {
  props: PropTypes.objectOf(PropTypes.number),
};
