import React from "react";
import { useState } from "react";

function TransactionForm({ onAddTransaction }) {
  const [transactionData, setTransactionData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const handleChange=(event)=>{
    const {name, value} = event.target;
    setTransactionData({ ...transactionData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddTransaction(transactionData);
    setTransactionData({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Date:{" "}
        <input
          type="date"
          value={transactionData.date}
          name="date"
          onChange={handleChange}
        />
      </label>
      <label>
        Description:{" "}
        <input
          type="text"
          name="description"
          value={transactionData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Category:{" "}
        <input
          type="text"
          name="category"
          value={transactionData.category}
          onChange={handleChange}
        />
      </label>
      <label>
        Amount{" "}
        <input
          type="number"
          name="amount"
          value={transactionData.amount}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add New Transaction</button>
    </form>
    </div>
  );
}

export default TransactionForm;
