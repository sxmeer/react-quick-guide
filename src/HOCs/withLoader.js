import React from 'react';

const withLoader = (WrappedComponent) => {
  return ({ isLoading, list, error }) => {
    if (error) return <p>An error occured</p>;
    if (isLoading) return <p>The List is loading</p>;
    if (list === null || list.length === 0) return <p>List is empty.</p>
    return <WrappedComponent list={list} />;
  }
}

export default withLoader;