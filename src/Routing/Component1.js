import React, { Component } from 'react';

export default class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props);
  }

  render() {
    return <div>This is Component One</div>
  }
};