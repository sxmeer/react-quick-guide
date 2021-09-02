import React from 'react';

let defaultObj = {
  firstName: "",
  lastName: "",
  middleName: "",
  changeName: () => { }
}

export default React.createContext(defaultObj);