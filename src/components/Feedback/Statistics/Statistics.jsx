import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import css from './../Feedback.module.css';

export class Statistics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Statistics render this.props:');
    console.log(this.props);
    return (
      <div className={css.summary}>
        <h2>Statistics</h2>
        {this.props.total > 0 && (
          <>
            {console.log(`Statistics this.props.stats`)}
            {console.log(this.props.stats)}
            {Object.keys({ ...this.props.stats }).map(statekey => {
              console.log(`Statistics props statekey`);
              console.log(statekey);
              return (
                <span className={css.entry}>
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

// Statistics.propTypes = {
//   props: PropTypes.objectOf(PropTypes.number),
// };
