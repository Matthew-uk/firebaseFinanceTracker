import { useState } from "react";
import { projectAuth } from "../firebase/config";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isPending, setPending] = useState(false);

  const signUp = async (email, password, displayName) => {
    setError(null);
    setPending(true);

    try {
      //signUp user
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(res.user);
      if (!res) {
        throw new Error("Could not Sign Up for some unseen reasons...:(");
      }

      //Add display name
      await res.user.updateProfile({ displayName });
      setPending(false);
      setError(null);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setPending(false);
    }
  };

  return { signUp, error, isPending };
};
