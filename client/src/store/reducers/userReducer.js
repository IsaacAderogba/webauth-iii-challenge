import { FETCH_USERS } from "../actions/userActions";

export default function(state = [], action) {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    default:
      return state;
  }
}
