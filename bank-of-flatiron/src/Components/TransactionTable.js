import React from 'react';

function TransactionTable({transactions}){
    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
                <tbody>
                    {transactions.map((transaction)=>
                    <tr key= {transaction.id}>
                    <td>{transaction.id}</td>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.amount}</td>
                    </tr>
                    )}
                </tbody>
            </thead>
        </table>
    )
}
export default TransactionTable;