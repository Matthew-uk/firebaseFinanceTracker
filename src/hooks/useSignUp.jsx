import { useState } from "react";
import { projectAuth, projectFireStore, timeStamp } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isPending, setPending] = useState(false);
  const { dispatch } = useAuthContext();
  const [newUser, setNewUser] = useState(null);

  const signUp = async (email, password, displayName) => {
    setError(null);
    setPending(true);

    try {
      //signUp user
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (!res) {
        throw new Error("Could not Sign Up for some unseen reasons...:(");
      }

      //Add display name
      await res.user.updateProfile({ displayName });
      setNewUser(res.user);
      console.log(newUser);

      //Store the user
      const createdAt = timeStamp.fromDate(new Date());
      let user = {
        displayName,
        email,
        password,
        createdAt,
      };
      projectFireStore.collection("users").add({ ...user, createdAt });
      console.log("User Created at", createdAt);

      //Log user in
      dispatch({ type: "LOGIN", payload: res.user });
      setPending(false);
      setError(null);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setPending(false);
    }
  };

  return { signUp, error, isPending, newUser };
};
