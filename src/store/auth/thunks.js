import { singInWithGoogle, registerUserWithEmailAndPassword } from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./";

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
    const result = await singInWithGoogle();

    if (!result.ok) {
      return dispatch(logout(result.errorMessage));
    }

    dispatch(login(result));

  }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const { ok, uid, photoURL } = await registerUserWithEmailAndPassword({ email, password, displayName })

    if (!ok) {
      return dispatch(logout(errorMessage));
    }
    dispatch(login(uid, displayName, email, photoURL));
  }
}