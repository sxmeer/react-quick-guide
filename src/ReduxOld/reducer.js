import { CHANGE_FIRST_NAME, CHANGE_LAST_NAME } from './actions';

const initialState = {
  firstName: "Michael",
  lastName: "Scott"
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FIRST_NAME:
      return { ...state, firstName: action.payload.firstName };
    case CHANGE_LAST_NAME:
      return { ...state, lastName: action.payload.lastName };
    default:
      return state;
  }
};

export default reducer;