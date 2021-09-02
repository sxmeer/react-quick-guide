import React from 'react';
import withLoader from './withLoader';

function List(props) {
  return <ul>
    {props.list.map((listItem, index) => { return <li key={index}>{listItem.anime}</li> })}
  </ul>
};

export default withLoader(List);
