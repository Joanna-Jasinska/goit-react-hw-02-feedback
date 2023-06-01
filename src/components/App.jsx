import React, { Component } from 'react';
import { Feedback } from './Feedback/Feedback';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};
export class App extends Component {
  constructor() {
    super();
    this.state = { ...INITIAL_STATE };
  }

  render() {
    return (
      <div className="app">
        <Feedback props={this.state} />
      </div>
    );
  }
}
