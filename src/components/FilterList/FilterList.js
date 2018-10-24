import React from 'react';

import './FilterList.css';

const FilterList = () => {
  return (
    <div>
     <h1 className="sidebar-title">Let's play.</h1>
     <h3>Filter By:</h3>
     <button>Show All</button>
     <label for="houses">Houses:</label>
     <select id="houses-select">
          <option value="">--Please choose an option--</option>
      </select>

     <label for="events">Events:</label>
     <select id="events-select">
          <option value="">--Please choose an option--</option>
      </select>

     <label for="cultures">Cultures:</label>
     <select id="cultures-select">
          <option value="">--Please choose an option--</option>
      </select>

     <label for="regions">Regions:</label>
     <select id="regions-select">
          <option value="">--Please choose an option--</option>
      </select>
    </div> 
  )
}

export default FilterList;