import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./styles.css";

const TransactionList = ({ doc }) => {
  return (
    <div className="eachTransaction">
      <div className="content">
        <h1 className="title">{doc.title}</h1>
        <p className="amount">${doc.amount}</p>
      </div>
      <div className="delete">
        <RiDeleteBin6Line />
      </div>
    </div>
  );
};

export default TransactionList;
