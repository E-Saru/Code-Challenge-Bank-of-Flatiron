import React, { useState } from 'react';

function TransactionTable({ transactions, onDelete }) {
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(transactions.length / transactionsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <div className='d-flex justify-content-center'>
      <table className="border bg-info text-dark bg-opacity-75 mb-5">
        <thead className='table-light bg-info'>
          <tr>
            <th className='border border-info p-2'>ID</th>
            <th className='border border-info p-2'>Date</th>
            <th className='border border-info p-2'>Description</th>
            <th className='border border-info p-2'>Category</th>
            <th className='border border-info p-2'>Amount</th>
            <th className='border border-info p-2'>Clear</th>
          </tr>
        </thead>
        <tbody>
          {currentTransactions.map((transaction) => (
            <tr key={transaction.id} className='border border-info p-2 m-5 border-opacity-75'>
              <td className='border border-info px-4 border-opacity-75'>{transaction.id}</td>
              <td className='border border-info px-4 border-opacity-75'>{transaction.date}</td>
              <td className='border border-info px-5 border-opacity-75'>{transaction.description}</td>
              <td className='border border-info px-3 border-opacity-75'>{transaction.category}</td>
              <td className='border border-info px-4 border-opacity-75'>{transaction.amount}</td>
              <td className='border border-info p-2 border-opacity-75'>
                <button onClick={() => handleDelete(transaction.id)} className="btn btn-danger">X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <ul className="pagination justify-content-center mt-5" style={{position: 'fixed',bottom: '0',width: '100%'}}>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => handleClick(number)} className="page-link">{number}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionTable;