import React from "react";
const Dropdown = ({ setFilter }) => {
  const handleChange=(e)=>{
    let val = e.target.value;
    if(val === 'Filter by Region'){
      val = '';
    }
    setFilter(val)
  }
  return (
    <select className="filter-by-region" onChange={handleChange}>
      <option hidden="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Antarctica">Antarctica</option>
      <option value="Asia">Asia</option>
      <option value="Oceania">Oceania</option>
      <option value="Europe">Europe</option>
      <option value="Americas">Americas</option>
      <option value="South_America">South America</option>
    </select>
  );
};

export default Dropdown;
