import { Component } from 'react';
import { Feedback } from './Feedback/Feedback';
// import { Statistics } from './Statistics/Statistics';
// import { FriendList } from './FriendList/FriendList';
// import { TransactionHistory } from './TransactionHistory/TransactionHistory';
// import user from './../data/user.json';
// import data from './../data/data.json';
// import friends from './../data/friends.json';
// import transactions from './../data/transactions.json';

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
