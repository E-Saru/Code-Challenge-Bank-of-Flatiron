import React from 'react';
import '../../src/App.css';

function TransactionTable({ transactions ,onDelete }) {
  const handleDelete = (id) => {
    onDelete(id)
}
  return (
    <div className='d-flex justify-content-center'>
    <table className="border bg-info text-dark bg-opacity-75">
      <thead className='table-light bg-info'>
        <tr>
          <th className='border border-info p-2'>ID</th>
          <th className='border border-info p-2'> Date</th>
          <th className='border border-info p-2'>Description</th>
          <th className='border border-info p-2'>Category</th>
          <th className='border border-info p-2'>Amount</th>
          <th className='border border-info p-2'>Clear</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}  className='border border-info p-2 m-5 border-opacity-75'>
            <td  className='border border-info p-2 border-opacity-75'>{transaction.id}</td>
            <td  className='border border-info px-4 border-opacity-75'>{transaction.date}</td>
            <td  className='border border-info px-5 border-opacity-75'>{transaction.description}</td>
            <td  className='border border-info px-3 border-opacity-75'>{transaction.category}</td>
            <td  className='border border-info p-2 border-opacity-75'>{transaction.amount}</td>
            <td  className='border border-info p-2 border-opacity-75'>
              <button onClick={() => handleDelete(transaction.id)} className="btn btn-danger" >X</button>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default TransactionTable;
