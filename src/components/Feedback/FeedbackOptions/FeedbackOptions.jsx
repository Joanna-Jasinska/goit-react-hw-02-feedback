import { Component } from 'react';
import { PropTypes } from 'prop-types';

export class FeedbackOptions extends Component {
  constructor({ props }) {
    super();
    this.state = { ...props };
  }
}

FeedbackOptions.propTypes = {
  props: PropTypes.objectOf(PropTypes.number),
};
