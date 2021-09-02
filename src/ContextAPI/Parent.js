import React, { Component } from 'react';
// import Child from './Child';
import ChildWithUseContext from './ChildWithUseContext';

export default class Parent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Parent shouldComponentUpdate");
    return false;
  }

  render() {
    return <div>This is Parent
      {console.log("Parent render")}
      {/* <Child /> */}
      <ChildWithUseContext />
    </div>;
  }
}