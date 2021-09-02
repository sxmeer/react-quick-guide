import React, { useContext } from "react";
import Context from './context';

const ChildWithUseContext = (props) => {
  const name = useContext(Context);
  console.log(name);
  return <div>
    This is ChildWithUseContext
    <div>
      First Name: {name.firstName}
      <br />
      last Name: {name.lastName}
      <br />
      <button onClick={name.changeName}>Change Name</button>
    </div>
  </div>
};

export default ChildWithUseContext;