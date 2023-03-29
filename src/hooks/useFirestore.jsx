import { useReducer, useState } from "react";
import { projectFireStore, timeStamp } from "../firebase/config";

let initialState = {
  document: null,
};

const fireStoreReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DOCUMENT":
      return { ...state, document: action.payload };
    // case (action.type === "DELETE_DOCUMENT"):
    //   return {...state}
    default:
      return state;
  }
};

export const useFirestore = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const [response, dispatch] = useReducer(fireStoreReducer, initialState);

  const ref = projectFireStore.collection("Transactions");

  const addDocument = async (doc) => {
    setError(null);
    setIsPending(true);
    try {
      const createdAt = timeStamp.fromDate(new Date());
      const newDoc = await ref.add({ ...doc, createdAt });
      dispatch({ type: "ADD_DOCUMENT", payload: newDoc });
      setError(null);
      setIsPending(false);
    } catch (err) {
      setError(err);
      setIsPending(false);
    }
  };

  const deleteDocument = async (id) => {
    // const res = await pro
  };

  return { response, addDocument, deleteDocument, error, isPending };
};
