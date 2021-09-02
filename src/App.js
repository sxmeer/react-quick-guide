import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
// import Layout from './Redux/Layout';
import Layout from './ReduxOld/Layout';
import store from './ReduxOld/store';

// import store from './Redux/store';
// import GrandParent from './ContextAPI/GrandParent';
// import Parent from './HOCs/Parent';
// import Component1 from './Routing/Component1';
// import Component2 from './Routing/Component2';
// import Component3 from './Routing/Component3';
// import NoTab from './Routing/NoTab';
// import Parent from './StateAndProps/Parent';

class App extends Component {
  // state = {
  //   persons: [
  //     { firstName: "Michael", lastName: "Scott" },
  //     { firstName: "Jim", lastName: "Halpert" },
  //     { firstName: "Dwight", lastName: "Schrute" },
  //     { firstName: "Pam", lastName: "Beesly" },
  //   ],
  //   selectedIndex: 0,
  //   visibile: true
  // }

  // constructor(props) {
  //   super(props);
  //   this.changeData = this.changeData.bind(this);
  //   this.toggleVisibility = this.toggleVisibility.bind(this);
  // }

  // changeData(event) {
  //   if (this.state.selectedIndex === this.state.persons.length - 1) {
  //     this.setState({ selectedIndex: 0 });
  //   } else {
  //     this.setState((prevState) => ({ selectedIndex: prevState.selectedIndex + 1 }));
  //   }
  // }

  // toggleVisibility() {
  //   this.setState((prevState) => ({ visibile: !prevState.visibile }));
  // }

  render() {
    return (
      <div className="App">
        {/* This is props and state example
        <button onClick={this.changeData}>Change Data</button>
        <button onClick={this.toggleVisibility}>Toggle visibility</button>
        {this.state.visibile &&
          <Parent
            firstName={this.state.persons[this.state.selectedIndex].firstName}
            lastName={this.state.persons[this.state.selectedIndex].lastName} />
        } */}
        {/* Hello this is routing example
        <div className="links">
          <NavLink activeClassName="active-link" className="link" to="/component1">component1</NavLink>
          <NavLink activeClassName="active-link" className="link" to="/component2">component2</NavLink>
          <NavLink activeClassName="active-link" className="link" to="/component3">component3</NavLink>
        </div>
        <Switch>
          <Route path="/" component={NoTab} exact />
          <Route path="/component1" component={Component1} exact />
          <Route path="/component1/:id" component={Component1} exact />
          <Route path="/component2" component={Component2} />
          <Route path="/component3" component={Component3} />
          <Redirect to="/" />
        </Switch> */}
        {/* This is context API example
        <GrandParent /> */}

        {/* This is HOC example
        <Parent /> */}

        {/* This is redux example
        <Provider store={store} >
          <Layout />
        </Provider> */}

        This is old redux example
        <Provider store={store} >
          <Layout />
        </Provider>
      </div>
    );
  }
}

export default App;
