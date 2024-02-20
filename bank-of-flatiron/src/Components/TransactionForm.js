import React from "react";
import { useState } from "react";

function TransactionForm({ onAddTransaction}) {
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
  };

  return (
    <div className="text-bg-info bg-opacity-50 my-3 py-5">
    <form onSubmit={handleSubmit}>
      <label className="px-2">
        Date:{" "}
        <input
          type="date"
          value={transactionData.date}
          name="date"
          onChange={handleChange}
        />
      </label>
      <label className="px-2">
        Description:{" "}
        <input
          type="text"
          name="description"
          value={transactionData.description}
          onChange={handleChange}
          placeholder="Enter Description"
          required
        />
      </label>
      <label className="px-2">
        Category:{" "}
        <input
          type="text"
          name="category"
          value={transactionData.category}
          onChange={handleChange}
          placeholder="Enter Category"
          required
        />
      </label>
      <label className="px-2">
        Amount{" "}
        <input
          type="number"
          name="amount"
          value={transactionData.amount}
          onChange={handleChange}
          placeholder="Enter amount"
          required
        />
      </label> <br/>
      <button type="submit" className="mt-3 fs-6 badge text-bg-info bg-opacity-75">Add Transaction</button>
    </form>
    </div>
  );
}

export default TransactionForm;
