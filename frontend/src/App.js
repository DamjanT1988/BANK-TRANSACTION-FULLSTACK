import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [accountId, setAccountId] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!accountId || isNaN(Number(amount))) {
      setError("Please enter valid Account ID and Amount.");
      return;
    }

    const numericAmount = parseFloat(amount);
    const id = uuidv4();

    const newTransaction = {
      id,
      accountId,
      amount: numericAmount,
    };

    setTransactions([newTransaction, ...transactions]);
    setAccountId("");
    setAmount("");
    setError("");
  };

  const getBalance = (accountId) => {
    return transactions
      .filter((tx) => tx.accountId === accountId)
      .reduce((acc, tx) => acc + tx.amount, 0);
  };

  return (
    <div className="app">
      <div className="transaction-form">
        <h2>Submit new transaction</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="error">{error}</div>}
          <label>
            Account ID:
            <input
              name="accountId"
              type="text"
              value={accountId}
              onChange={(e) => setAccountId(e.target.value)}
            />
          </label>
          <label>
            Amount:
            <input
              name="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="transaction-history">
        <h2>Transaction history</h2>
        {transactions.map((tx) => {
          const isWithdrawal = tx.amount < 0;
          const absAmount = Math.abs(tx.amount);
          const balance = getBalance(tx.accountId);

          return (
            <div key={tx.id} className="transaction-card">
              <div>
                Transferred {absAmount}$ {isWithdrawal ? "from" : "to"} account{" "}
                <strong>{tx.accountId}</strong>
              </div>
              {isWithdrawal && (
                <div className="balance">
                  The current account balance is {balance}$
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
