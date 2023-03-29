import React from "react";
import Nav from "../../components/navbar/nav";
import TransactionList from "../../components/tList/tList";
import Transaction from "../../components/transaction/transaction";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import "./dashboard.css";

const Dashboard = () => {
  const { user } = useAuthContext();
  const { docs } = useCollection("Transactions");
  return (
    <div className="dashboard">
      <Nav />
      <div className="container">
        <div className="transactionList">
          <div className="transactionListBox">
            {docs && docs.map((doc) => <TransactionList doc={doc} />)}
          </div>
        </div>
        <div className="transactionForm">
          <Transaction user={user} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
