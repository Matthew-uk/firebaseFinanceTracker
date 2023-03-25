import React from "react";
import Nav from "../../components/navbar/nav";
import Transaction from "../../components/transaction/transaction";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./dashboard.css";

const Dashboard = () => {
  const { user } = useAuthContext();
  return (
    <div className="dashboard">
      <Nav />
      <div className="container">
        <div className="transactionList">
          <h3>Transaction List</h3>
        </div>
        <div className="transactionForm">
          <Transaction user={user} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
