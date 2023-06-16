import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export class Statistics extends Component {
  constructor(props) {
    super(props);
    console.log('Statistics constructor this.props:');
    // console.log(this.props);
    // this.state = { ...props };
    // console.log('Statistics constructor this.state:');
    // console.log(this.state);
    // { total, positivePercentage, ...stats }
  }

  render() {
    console.log('Statistics render this.state:');
    // console.log(this.state);
    return (
      <div className={css.summary}>
        <h2>Statistics</h2>
        {/* {total > 0 && (
        <>
          {Object.keys({ ...this.props.stats }).map(statekey => {
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
      )} */}
      </div>
    );
  }
}

// Statistics.propTypes = {
//   props: PropTypes.objectOf(PropTypes.number),
// };
