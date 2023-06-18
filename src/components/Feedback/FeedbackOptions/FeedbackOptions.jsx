import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid';
import css from './../Feedback.module.css';

export class FeedbackOptions extends Component {
  render() {
    return (
      <div className="feedback--btns">
        {[...this.props.options].map(key => {
          return (
            <button
              key={`feedbackBtn${nanoid()}`}
              className={`${css.btn}  ${key}`}
              onClick={e => this.props.onLeaveFeedback(e, key)}
            >
              {key[0].toUpperCase() + '' + key.slice(1)}
            </button>
          );
        })}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  props: PropTypes.shape({
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.objectOf(PropTypes.number),
  }),
};
