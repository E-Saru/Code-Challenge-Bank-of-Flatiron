import React from "react";

function FilterTransactions(){
        function onSearch(event){
        onSearch(event.target.value);
    }
    return(
            <input type="text" placeholder="Search..." onChange={onSearch}/>
    )
}
export default FilterTransactions;