import axios from "axios";
import { axiosWithAuth } from "../helpers/axiosAuth";

export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";

export const signUp = (user, history) => async dispatch => {
  const res = await axios.post("http://localhost:4000/api/auth/register", user);
  dispatch({
    type: SIGN_UP,
    payload: { username: res.data.registeredUser.username, department: res.data.registeredUser.department }
  });
  if (res.data) {
    localStorage.setItem('token', res.data.token);
    history.push("/users");
  }
};

export const signIn = (user, history) => async dispatch => {
  const res = await axios.post("http://localhost:4000/api/auth/login", user);
  console.log(res);
  dispatch({
    type: SIGN_IN,
    payload: { username: res.data.user.username, department: res.data.user.department }
  });
  if (res.data) {
    localStorage.setItem('token', res.data.token);
    history.push("/users");
  }
};
