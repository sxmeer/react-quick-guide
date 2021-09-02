import React from 'react';
import { changeFirstName, changeFullName, changeLastName } from './actions';
import { connect } from 'react-redux';

const Parent = (props) => {
  return <div>
    <p>{props.firstName + " " + props.lastName}</p><br />
    <button onClick={props.changeFirstName}>Change First Name</button><br />
    <button onClick={props.changeLastName}>Change Last Name</button><br />
    <button onClick={props.changeFullName}>Change Full Name</button>
  </div>
};

const mapStateToProps = state => {
  return {
    firstName: state.name.firstName,
    lastName: state.name.lastName
  }
};

const mapDispatchToProps = dispatch => {
  return {
    changeFirstName: () => dispatch(changeFirstName("Pam")),
    changeLastName: () => dispatch(changeLastName("Beesly")),
    changeFullName: () => dispatch(changeFullName())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Parent);