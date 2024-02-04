import React, {useState, useEffect} from 'react';
import './App.css';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import FilterTransactions from './FilterTransactions';

function App() {
  const [transactions, setTransactions]=useState([]);
  const [filteredTransactions, setFilteredTransactions]=useState([]);
  const [search, setSearch]=useState('');

  useEffect(() => {
    fetch("bank-of-flatiron/db.json")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data); 
        setFilteredTransactions(data); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  const handleSearch = (searchQuery) => {
    setSearch(searchQuery);
    
  
    const filtered = transactions.filter(transaction =>
      transaction.some(field => field.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div className="App">
      <h1>Bank Transactions</h1>
      <FilterTransactions onSearchQuery={handleSearch} />
      <TransactionTable transactions={filteredTransactions} />
      <TransactionForm  />
      
    </div>
  );
}

export default App;
