import { axiosWithAuth } from "../helpers/axiosAuth";

export const FETCH_USERS = "FETCH_USERS";

export const fetchUsers = () => async dispatch => {
  const res = await axiosWithAuth().get("http://localhost:4000/api/users");
  console.log(res);
  dispatch({
    type: FETCH_USERS,
    payload: res.data
  });
};