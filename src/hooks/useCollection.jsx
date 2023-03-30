import { useEffect, useState } from "react";
import { projectFireStore } from "../firebase/config";

export const useCollection = (collection) => {
  const [docs, setDocs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ref = projectFireStore.collection(collection);

    const unsubcribe = ref.onSnapshot(
      (snapShot) => {
        const data = snapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDocs(data);
      },
      (err) => {
        setError(err);
        console.log(`This is error from use Collection: ${error}`);
      }
    );
    return unsubcribe;
  }, [collection]);

  return { docs };
};
