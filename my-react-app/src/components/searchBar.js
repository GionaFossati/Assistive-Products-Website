import React from 'react';

const SearchBar = ({input:keyword, onChange:setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <div>
        
    
        <form role='search' action="/" method="get">
        <label for='header-search'>
            <span class='sr-only'>Search</span>
        </label>

        <input
         aria-controls="products__row" 
         style={BarStyling}
         key="random1"
         value={keyword}
         placeholder={"Search product by name"}
         onChange={(e) => setKeyword(e.target.value)}
        />
        </form>
    </div>
  );
}

export default SearchBar