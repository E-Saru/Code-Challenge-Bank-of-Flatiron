import React from "react";
function SortBar({handleSort}){
    return(
    <div className="my-3">
        <button  style={{margin: 10}} className='btn btn-primary' onClick={() => handleSort('category')}>Sort by Category</button>
        <button  style={{margin: 10}} className='btn btn-primary' onClick={() => handleSort('description')}>Sort by Description</button>

   </div>
    )
}
export default SortBar;