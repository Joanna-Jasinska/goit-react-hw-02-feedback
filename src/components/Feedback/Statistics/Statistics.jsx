import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid';
import css from './../Feedback.module.css';

export class Statistics extends Component {
  render() {
    return (
      <div className={css.summary}>
        {this.props.total > 0 && (
          <>
            {Object.keys({ ...this.props.stats }).map(statekey => {
              return (
                <span className={css.entry} key={`feedbackStat${nanoid()}`}>
                  {statekey[0].toUpperCase() + '' + statekey.slice(1)}:
                  <span className={`${css.value} ${statekey}`}>
                    {this.props.stats[statekey]}
                  </span>
                </span>
              );
            })}
            <span className={css.entry}>
              Total:
              <span className={`${css.value} total`}>{this.props.total}</span>
            </span>
            <span className={css.entry}>
              Positive feedback:
              <span className={`${css.value} positive`}>
                {this.props.positivePercentage}%
              </span>
            </span>
          </>
        )}
      </div>
    );
  }
}

Statistics.propTypes = {
  props: PropTypes.shape({
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
  }),
};
