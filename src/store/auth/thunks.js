import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    // const response = await firebase.auth().signInWithEmailAndPassword(email, password);
    // const user = response.user;
    // dispatch(login(user));
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = singInWithGoogle();
  }
}