import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDeleteCollection } from "../../hooks/useDeleteCollection";
import "./styles.css";

const TransactionList = ({ doc }) => {
  const { handleDelete } = useDeleteCollection();

  const deleteDocument = () => {
    handleDelete(doc.id);
  };
  return (
    <div className="eachTransaction">
      <div className="content">
        <h1 className="title">{doc.title}</h1>
        <p className="amount">${doc.amount}</p>
      </div>
      <div className="delete">
        <RiDeleteBin6Line onClick={deleteDocument} />
      </div>
    </div>
  );
};

export default TransactionList;
