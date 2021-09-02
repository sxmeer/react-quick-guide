import React, { Component } from 'react';

export default class Component3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.navigate = this.navigate.bind(this);
  }

  navigate(event) {
    // console.log(this.props.history);
    this.props.history.replace("/component1/1/2?name=sameer");
  }

  render() {
    return <div>This is Component Three
      <br />
      <button onClick={this.navigate}>
        Click to get on Component1
      </button>
    </div>
  }
};