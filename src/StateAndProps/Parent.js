import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCounter: 0,
      error: null
    }
    this.incrementClickCounter = this.incrementClickCounter.bind(this);
    console.log("PARENT: constructor");
    console.log("props: ", props);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("PARENT: getDerivedStateFromProps");
    console.log("props: ", props);
    console.log("state: ", state);
    return { firstName: props.firstName, lastName: props.lastName };
  }

  incrementClickCounter() {
    this.setState(prevState => ({ clickCounter: prevState.clickCounter + 1 }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("PARENT: shouldComponentUpdate");
    console.log("props: ", this.props);
    console.log("state: ", this.state);

    console.log("nextProps: ", nextProps);
    console.log("nextState: ", nextState);
    return this.props.firstName !== nextProps.firstName && this.props.lastName !== nextProps.lastName;
  }

  render() {
    console.log("PARENT: render");
    console.log("props: ", this.props);
    console.log("state: ", this.state);
    return <div>
      <div onClick={this.incrementClickCounter}>
        {this.state.firstName} {this.state.lastName}
      </div>
      <div>{"==>"}
        {this.state.error ?
          <p>Error loading child component</p>
          :
          <Child firstName={this.state.firstName} lastName={this.state.lastName} />}
        {"<=="}</div>
    </div>
  }

  getSnapshotBeforeUpdate(prevProps, prevStates) {
    console.log("PARENT: getSnapshotBeforeUpdate");
    console.log("props: ", this.props);
    console.log("state: ", this.state);
    console.log("prevProps: ", prevProps);
    console.log("prevStates: ", prevStates);
    return { scrollPosition: '250' };
  }

  componentDidMount() {
    console.log("PARENT: componentDidMount");
    console.log("props: ", this.props);
    console.log("state: ", this.state);
  }

  componentDidUpdate(prevProps, prevStates, snapshot) {
    console.log("PARENT: componentDidUpdate");
    console.log("props: ", this.props);
    console.log("state: ", this.state);
    console.log("prevProps: ", prevProps);
    console.log("prevStates: ", prevStates);
    console.log("snapshot: ", snapshot);
  }

  componentWillUnmount() {
    console.log("PARENT: componentDidUnmount");
  }

  static getDerivedStateFromError(error) {
    console.log("PARENT: getDerivedStateFromError");
    console.log("error: ", error);
    return { error: error };
  }

  componentDidCatch(error, info) {
    console.log("PARENT: componentDidCatch");
    console.log("error: ", error);
    console.log("info: ", info);
  }
}

export default Parent;