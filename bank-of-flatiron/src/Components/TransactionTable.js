import React from 'react';
import '../../src/App.css';

function TransactionTable({ transactions ,onDelete }) {
  const handleDelete = (id) => {
    onDelete(id)
}
  return (
    <div className='container'>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            <td>
              <button onClick={() => handleDelete(transaction.id)} className="btn btn-danger" >Delete</button>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default TransactionTable;
