import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("CHILD: constructor");
    console.log("props: ", props);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("CHILD: getDerivedStateFromProps");
    console.log("props: ", props);
    console.log("state: ", state);
    return { firstName: props.firstName, lastName: props.lastName };
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log("CHILD: shouldComponentUpdate");
    console.log("props: ", this.props);
    console.log("state: ", this.state);

    console.log("nextProps: ", nextProps);
    console.log("nextState: ", nextState);
    return this.props.firstName !== nextProps.firstName && this.props.lastName !== nextProps.lastName;
  }

  render() {
    console.log("CHILD: render");
    console.log("props: ", this.props);
    console.log("state: ", this.state);
    return <>
      {this.state.firstName} {this.state.lastName}
    </>
  }

  getSnapshotBeforeUpdate(prevProps, prevStates) {
    console.log("CHILD: getSnapshotBeforeUpdate");
    console.log("props: ", this.props);
    console.log("state: ", this.state);
    console.log("prevProps: ", prevProps);
    console.log("prevStates: ", prevStates);
    return { scrollPosition: '250' };
  }

  componentDidMount() {
    console.log("CHILD: componentDidMount");
    console.log("props: ", this.props);
    console.log("state: ", this.state);
  }

  componentDidUpdate(prevProps, prevStates, snapshot) {
    console.log("CHILD: componentDidUpdate");
    console.log("props: ", this.props);
    console.log("state: ", this.state);
    console.log("prevProps: ", prevProps);
    console.log("prevStates: ", prevStates);
    console.log("snapshot: ", snapshot);
  }

  componentWillUnmount() {
    console.log("CHILD: componentDidUnmount");
  }
}

export default Child;