import React, { Component } from 'react';
import Context from './context';

export default class Child extends Component {
  render() {
    return <div>
      This is Child Component
      {/* <Context.Consumer>
        {(values) => (
          <div>
            {console.log(values)}
            First Name: {values.firstName}
            <br />
            last Name: {values.lastName}
            <br />
            <button onClick={values.changeName}>Change Name</button>
          </div>
        )}
      </Context.Consumer> */}
      <div>
        {console.log("render called", this.context)}
        First Name: {this.context.firstName}
        <br />
        last Name: {this.context.lastName}
        <br />
        <button onClick={this.context.changeName}>Change Name</button>
      </div>
    </div>;
  }
}

Child.contextType = Context;