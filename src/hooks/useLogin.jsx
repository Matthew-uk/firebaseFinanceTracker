import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setPending(true);
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);
      if (!res) {
        throw new Error("Sign in failed");
      }
      dispatch({ type: "LOGIN", payload: res.user });
      setError(null);
      setPending(false);
      console.log("Login Successful");
    } catch (err) {
      setPending(false);
      setError(err.message);
    }
  };

  return {
    isPending,
    error,
    login,
  };
};
