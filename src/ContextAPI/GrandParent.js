import React, { Component } from 'react';
import Context from './context';
import Parent from './Parent';

let extraName = {
  firstName: "Jim",
  lastName: "Halpert",
}

export default class GrandParent extends Component {
  constructor(props) {
    super(props);
    this.changeName = () => {
      this.setState(prevState => extraName);
    };
    this.state = {
      firstName: "Michael",
      lastName: "Scott",
      changeName: this.changeName,
    };
  }
  render() {
    return <div>
      This is GrandParent
      <Context.Provider value={this.state} >
        <Parent />
      </Context.Provider>
    </div >;
  }
}