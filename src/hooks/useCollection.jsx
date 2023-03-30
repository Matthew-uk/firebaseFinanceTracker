import { useEffect, useState } from "react";
import { projectFireStore } from "../firebase/config";

export const useCollection = (collection) => {
  const [docs, setDocs] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const ref = projectFireStore.collection(collection);

    const unsubcribe = () => {
      setIsPending(true);
      setError(null);
      ref.onSnapshot(
        (snapShot) => {
          setIsPending(true);
          const data = snapShot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setDocs(data);
          setIsPending(false);
        },
        (err) => {
          setError(err);
          console.log("This is error from use Collection:  ", err);
        }
      );
    };
    return unsubcribe();
  }, [collection]);

  return { docs, isPending, error };
};
