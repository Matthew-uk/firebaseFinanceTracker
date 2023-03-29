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
        console.log(docs);
      },
      (err) => {
        setError(err);
        console.log(`This is error from use Collection: ${error}`);
      }
    );
    return unsubcribe;
  }, [collection]);

  // useEffect(() => {
  //   const ref = projectFireStore.collection(collection);
  //   const unsubcribe = ref.onSnapshot(
  //     (snapshot) => {
  //       let result = [];
  //       snapshot.docs.forEach((doc) => {
  //         result.push({ ...doc.data(), id: doc.id });
  //       });
  //       setDocs(result);
  //       setError(null);
  //     },
  //     (error) => {
  //       console.log(error.message);
  //       setError("Could not fetch data");
  //     }
  //   );
  //   return () => {
  //     unsubcribe();
  //   };
  // }, [collection]);
  return { docs };
};
