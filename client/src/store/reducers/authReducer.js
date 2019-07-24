import { SIGN_UP, SIGN_IN } from "../actions/authActions";

export default function(state = {}, action) {
  console.log(action.payload);
  switch (action.type) {
    case SIGN_UP:
      return action.payload;
    case SIGN_IN:
      return action.payload;
    default:
      return state;
  }
}
