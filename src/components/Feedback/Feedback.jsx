import { Component } from 'react';
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
  Section = ({ title, children }) => (
    <section className={css.feedback}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
  Notification = ({ message }) => (
    <span className={css.notification}>{message}</span>
  );
  FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className="feedback--btns">
      {[...options].map(key => {
        return (
          <button
            className={`${css.btn}  ${key}`}
            onClick={e => onLeaveFeedback(e, key)}
          >
            {key[0].toUpperCase() + '' + key.slice(1)}
          </button>
        );
      })}
    </div>
  );
  Statistics = ({ total, positivePercentage, ...stats }) => (
    <div className={css.summary}>
      <h2>Statistics</h2>
      {total > 0 && (
        <>
          {Object.keys({ ...stats }).map(statekey => {
            return (
              <span className={css.entry}>
                {statekey[0].toUpperCase() + '' + statekey.slice(1)}:
                <span className={`${css.value} ${statekey}`}>
                  {stats[statekey]}
                </span>
              </span>
            );
          })}
          <span className={css.entry}>
            Total:
            <span className={`${css.value} total`}>{total}</span>
          </span>
          <span className={css.entry}>
            Positive feedback:
            <span className={`${css.value} positive`}>
              {positivePercentage}%
            </span>
          </span>
        </>
      )}
    </div>
  );

  render() {
    const total = this.countTotalFeedback();
    const stats = {
      ...this.state,
      ...{ total: total },
      ...{ positivePercentage: this.countPositiveFeedbackPercentage() },
    };

    return (
      <this.Section title="Please leave feedback">
        <this.FeedbackOptions
          options={[...Object.keys(this.state)]}
          onLeaveFeedback={this.feedbackBtnClick}
        />
        {total ? (
          <this.Statistics {...stats} />
        ) : (
          <>
            <this.Statistics />
            <this.Notification message="There is no feedback" />
          </>
        )}
      </this.Section>
    );
  }
}
