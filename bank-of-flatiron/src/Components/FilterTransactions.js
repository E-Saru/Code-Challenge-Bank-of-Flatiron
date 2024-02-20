import React from "react";
import { useState } from "react";

function FilterTransactions({onSearch}){
const [searchTerm, setSearchTerm] = useState('');

  const handleSearch= (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearch(searchTerm);
}
        
    return(
        <div className="my-5 ">
         <label type="search">Search:</label>
            <input type="text" id="searchTerm" value={searchTerm} placeholder="Search..." onChange={handleSearch}/>
        </div>
    )
}
export default FilterTransactions;