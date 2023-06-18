import { Component } from 'react';
import { PropTypes } from 'prop-types';
import css from './../Feedback.module.css';

export class FeedbackOptions extends Component {
  constructor({ props }) {
    super();
    this.state = { ...props };
  }

  render() {
    return (
      <div className="feedback--btns">
        {[...this.props.options].map(key => {
          return (
            <button
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
  props: PropTypes.objectOf(PropTypes.number),
};
