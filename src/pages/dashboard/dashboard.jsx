import React from "react";
import Nav from "../../components/navbar/nav";
import TransactionList from "../../components/tList/tList";
import Transaction from "../../components/transaction/transaction";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import { Loading } from "./../../components/loading/loading";
import "./dashboard.css";

const Dashboard = () => {
  const { user } = useAuthContext();
  const { docs, isPending } = useCollection("Transactions");
  const filteredDocs = docs.filter((doc) => doc.uid === user.uid);

  const DashboardBody = () => {
    return (
      <div className="dashboard">
        <Nav />
        <div className="container">
          <div className="transactionList">
            <div className="transactionListBox">
              {
                docs
                  ? filteredDocs.map((doc) => (
                      <TransactionList key={doc.id} doc={doc} />
                    ))
                  : ""
                // docs.map((doc) => <TransactionList key={doc.id} doc={doc} />)
              }
            </div>
          </div>
          <div className="transactionForm">
            <Transaction user={user} />
          </div>
        </div>
      </div>
    );
  };

  return <div>{isPending ? <Loading /> : <DashboardBody />}</div>;
};

export default Dashboard;
