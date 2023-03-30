import { projectFireStore } from "../firebase/config";

export const useDeleteCollection = () => {
  const handleDelete = (id) => {
    const ref = projectFireStore.collection("Transactions").doc(id);
    ref
      .delete()
      .then(() => {
        console.log("DOcument Successfully deleted");
      })
      .catch((err) => {
        console.log("Encountered error", err);
      });
  };

  return { handleDelete };
};
