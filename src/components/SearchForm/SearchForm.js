import React from 'react';

import './SearchForm.css';

const SearchForm = () => {
  return (
    <div>
      <form>
        <input type='text' 
               name='searchForm'
               pattern='[A-Za-z]'
               placeholder='Search by name'
        />
      </form>
    </div>
  )
}

export default SearchForm; 