import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {

  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName, email, photoURL, uid
    }

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    }
  }
}

export const registerUserWithEmailAndPassword = async ({ email, password, displayName }) => {
  try {
    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    // console.log(resp)
    const { uid, photoURL } = resp.user;

    // TODO Actualizar al usuario en firebase

    await updateProfile(FirebaseAuth.currentUser, {
      displayName,
    })

    return {
      ok: true,
      uid, photoURL, email, displayName
    }
  }
  catch (error) {
    // console.log(error);
    return {
      ok: false,
      //Aqui van los distintos tipos de errores que puedan venir o distintas validaciones
      errorMessage: error.message
    }
  }
}