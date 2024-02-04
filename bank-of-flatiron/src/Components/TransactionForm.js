import React, {useState} from "react";

function TransactionForm({date, description, category, amount}){
    const [transactionData, setTransactionData]=useState({
        date:'', description:'', category:'', amount:''});    

    function handleChange(event){
        const name=event.target.name;
        let value=event.target.value;
        setTransactionData({...transactionData, [name]:value})
    }

    function handleSubmit(event){
        event.preventDefault();

    }
    return(
      <form onSubmit={handleSubmit}>
        <label>
            Date: <input type="date" value={date} name="date" onChange={handleChange}/>
        </label> 
        <label>
            Description: <input type="text" name="description" value={description} onChange={handleChange}/>
        </label>
        <label>
            Category: <input type="text" name="category" value={category} onChange={handleChange}/>
        </label>
        <label>
            Amount <input type="number" name="amount" value={amount} onChange={handleChange}/>
        </label>
        <button type="submit">Add New Transaction</button>
      </form>  
    );
}
export default TransactionForm;