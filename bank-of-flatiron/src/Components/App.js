import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import FilterTransactions from './FilterTransactions';
import '../../src/App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [term,setTerm] = useState('');
  const [sortType, setSortType] = useState(null);
  const [displayAddForm, setDisplayAddForm] = useState(false);

  // Fetch transactions data from the local JSON DB server
  useEffect(() => 
  {
      fetchTransaction();
  }, []);


  const fetchTransaction = async () => {
        try {
           const response = await fetch('http://localhost:8001/transactions');
           const data = await response.json()
           setTransactions(data);
          //  console.log(data)
          //  console.log(transactions)
        } catch(error) {
            console.log("Error fetching transaction " , error);
        }
  }

  const handleSearch = async (searchValue) => {
    setTerm(searchValue)
    console.log(term)
  }


  const filteredTransactions = transactions.filter((transaction) => 
       transaction.description.toLowerCase().includes(term.toLowerCase())
  );

  const addTransaction = async (newTransaction) => {
      try {
          const response = await fetch("http://localhost:8001/transactions", {
             method: 'POST',
             headers: {
              'Content-Type' : 'application/json'
             },
             body: JSON.stringify(newTransaction)
          });
          if(response.ok){
                fetchTransaction(); 
          }else {
               console.log('Error adding transaction ' , response.statusText)
          }
      }catch(error) {
        console.error("error adding transaction " , error)
      }
  }

  const handleDelete = async (id) => {
    try {
        const response = await fetch(`http://localhost:8001/transactions/${id}`, {
           method: 'DELETE'
                  });
        if(response.ok){
            setTransactions(transactions.filter((transaction) => transaction.id !== id ))  
            fetchTransaction()             
        }else {
             console.log('Error deleting transaction ' , response.statusText)
        }
    }catch(error) {
      console.error("error deleting transaction " , error)
    }
}

  const handleSort = (type) => {
    if(sortType === type){
          setSortType(null);
    } else {
     setSortType(type);
     // making a copy of the transactions array to be used for sorting purposes as per the type 
     const sortedTransactions = [...transactions]
 
     if(type === 'category'){
        sortedTransactions.sort((a,b) => a.category.localeCompare(b.category));
     } else if(type === 'description'){
       sortedTransactions.sort((a,b) => a.description.localeCompare(b.description));
     }
     setTransactions(sortedTransactions)
 
    }
 }
 
   return (
     <div className="App">
       
           <h2>Bank Of FlatIron</h2>
           <FilterTransactions onSearch={handleSearch} />
           <br></br>
           <button style={{
             margin: 10
           }} className='btn btn-primary' onClick={() => handleSort(null)}>Clear Sort</button>
           <button  style={{
             margin: 10
           }} className='btn btn-primary' onClick={() => handleSort('category')}>Sort by Category</button>
           <button  style={{
             margin: 10
           }} className='btn btn-primary' onClick={() => handleSort('description')}>Sort by Description</button>
           <button  style={{
            margin: 10
          }} className='btn btn-info' onClick={() => setDisplayAddForm(!displayAddForm)}>Add New Transaction</button>
          {displayAddForm ? <TransactionForm onAddTransaction={addTransaction} displayForm={setDisplayAddForm}/>: null}
           <TransactionTable transactions={filteredTransactions} onDelete={handleDelete}  />
     </div>
   );

};

export default App;
