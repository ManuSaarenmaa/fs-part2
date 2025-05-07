import React from 'react'
  
const Filter = ({ filter, handleFilterChange }) => {
return (
    <form onSubmit={(e) => e.preventDefault()}>
        filter shown with <input value={filter} onChange={handleFilterChange} />
    </form>
    )
}

  export default Filter