import { Component } from 'react';
import css from './Feedback.module.css';
export class Feedback extends Component {
  constructor({ stats }) {
    super();
    this.state = { ...stats };
  }
  feedbackBtnClick = (e, key) => {
    e.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      [key]: prevState[key] + 1,
    }));
  };
  FeedbackOptions = () => (
    <div className="feedback--btns">
      {Object.keys({ ...this.state }).map(statekey => {
        return (
          <button
            className={`${css.btn}  ${statekey}`}
            onClick={e => this.feedbackBtnClick(e, statekey)}
          >
            {statekey[0].toUpperCase()}
            {statekey.slice(1)}
          </button>
        );
      })}
    </div>
  );
  countTotalFeedback = () =>
    Object.values({ ...this.state }).reduce((a, b) => a + b, 0);
  countPositiveFeedbackPercentage = () =>
    ((100 * this.state.good) / this.countTotalFeedback() || 0).toFixed(0);
  Statistics = () => (
    <div className={css.summary}>
      <h2>Statistics</h2>
      {Object.keys({ ...this.state }).map(statekey => {
        return (
          <span className={css.entry}>
            {statekey[0].toUpperCase()}
            {statekey.slice(1)}:
            <span className={`${css.value} ${statekey}`}>
              {this.state[statekey]}
            </span>
          </span>
        );
      })}
      <span className={css.entry}>
        Total:
        <span className={`${css.value} total`}>
          {this.countTotalFeedback()}
        </span>
      </span>
      <span className={css.entry}>
        Positive feedback:
        <span className={`${css.value} positive`}>
          {this.countPositiveFeedbackPercentage()}%
        </span>
      </span>
    </div>
  );

  render() {
    return (
      <div className="feedback">
        <this.FeedbackOptions />
        <this.Statistics />
      </div>
    );
  }
}
