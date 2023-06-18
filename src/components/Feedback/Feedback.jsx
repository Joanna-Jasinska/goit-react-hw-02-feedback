import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
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
    console.log(`Feedback feedbackBtn this.state:`);
    console.log(this.state);
  };
  countTotalFeedback = () =>
    Object.values({ ...this.state }).reduce((a, b) => a + b, 0);
  countPositiveFeedbackPercentage = () =>
    Math.round((100 * this.state.good) / this.countTotalFeedback() || 0);
  Section = ({ title, children }) => (
    <section className={css.feedback}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
  Notification = ({ message }) => (
    <span className={css.notification}>{message}</span>
  );

  render() {
    const total = this.countTotalFeedback();
    const stats = {
      stats: { ...this.state },
      ...{ total: total },
      ...{ positivePercentage: this.countPositiveFeedbackPercentage() },
    };

    return (
      <this.Section title="Please leave feedback">
        <FeedbackOptions
          options={[...Object.keys(this.state)]}
          onLeaveFeedback={this.feedbackBtnClick}
        />
        {total ? (
          <Statistics {...stats} />
        ) : (
          <>
            <Statistics {...stats} />
            <this.Notification message="There is no feedback" />
          </>
        )}
      </this.Section>
    );
  }
}

Feedback.propTypes = {
  props: PropTypes.objectOf(PropTypes.number),
};
