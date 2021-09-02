export const CHANGE_FIRST_NAME = "CHANGE_FIRST_NAME";
export const CHANGE_LAST_NAME = "CHANGE_LAST_NAME";
export const CHANGE_FULL_NAME = "CHANGE_FULL_NAME";


//action creators
export const changeFirstName = (firstName) => {
  //action object also referred as actions
  return {
    type: CHANGE_FIRST_NAME,
    payload: { firstName }
  };
}

export const changeLastName = (lastName) => {
  return {
    type: CHANGE_LAST_NAME,
    payload: { lastName }
  };
}

export const changeFullName = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(changeFirstName("Jim"));
      dispatch(changeLastName("Halpert"));
    }, 3000);
  }
}