import React, { useState } from "react";
// import { useCollection } from "../../hooks/useCollection";
import { useFirestore } from "../../hooks/useFirestore";
import "./transaction.css";

const Transaction = ({ user }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  // const [addCount, setAddCount] = useState(0);
  const { addDocument } = useFirestore();
  // const { increment } = useCollection("Transactions");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      uid: user.uid,
      title,
      amount,
    };
    addDocument(newTransaction);
    setTitle("");
    setAmount("");
    // setAddCount((prevState) => prevState + 1);
    // console.log(addCount);
    // increment();
    // console.log(docs);
  };
  return (
    <div className="transactionContainer">
      <h3>Add a Transaction</h3>
      <form className="transactionBox" onSubmit={handleSubmit}>
        <label>Transaction Name:</label>
        <input
          type="text"
          placeholder="Transaction Name..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Transaction Amount ($):</label>
        <input
          type="number"
          placeholder="Transaction Amount ($)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button>Add Transaction</button>
      </form>
    </div>
  );
};

export default Transaction;
