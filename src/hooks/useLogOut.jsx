import { useAuthContext } from "./useAuthContext";
import { projectAuth } from "../firebase/config";
import { useState } from "react";

export const useLogOut = () => {
  const [error, setError] = useState(null);
  const [isPending, setPending] = useState(false);
  const { user, dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setPending(true);
    try {
      await projectAuth.signOut();
      dispatch({ type: "LOGOUT" });
      console.log("Logout Successful");
      setError(null);
      setPending(false);
    } catch (err) {
      setPending(false);
      setError(err.message);
    }
  };

  return {
    error,
    isPending,
    logout,
    user,
  };
};
