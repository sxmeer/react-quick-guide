import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './CounterSlice';
import { changeNameAfterSomeTime, changeNameToDefault, changeNameToJim } from './NameSlice';

function Parent() {
  const counter = useSelector(state => state.counter.value);
  const name = useSelector(state => state.name.name)
  const dispatch = useDispatch();
  return (
    <div>
      {console.log("parent render called")}
      This is Parent
      <p>{counter}</p>
      <p>{name}</p>
      <button onClick={() => dispatch(increment())}>Increment</button><br />
      <button onClick={() => dispatch(decrement())}>Decrement</button><br />
      <button onClick={() => dispatch(changeNameToDefault())}>Change Name to Default</button><br />
      <button onClick={() => dispatch(changeNameToJim())}>Change Name to Jim</button><br />
      <button onClick={() => dispatch(changeNameAfterSomeTime())}>Change Name After 3 seconds</button>
    </div>
  )
}

export default Parent;
