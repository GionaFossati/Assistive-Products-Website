import React from 'react';
import "./searchBar.css"

const SearchBar = ({input:keyword, onChange:setKeyword}) => {
  const BarStyling = {fontSize:"18px",height:"2rem",width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <div>    
        <form role='search' action="/" method="get">
        <label for='header-search'>
            <span class='sr-only'>Search</span>
        </label>

        <input
         aria-controls="products__" 
         /* style={BarStyling} */
         className="search__input"
         key="random1"
         value={keyword}
         placeholder={"Search product by name"}
        onChange={(e) => {
                document.getElementById("search__title").innerHTML = "Your search results for \"" + e.target.value + "\""; 
                setKeyword(e.target.value)
                
                if (e.target.value=="") {
                    document.getElementById("search__title").innerHTML = "Paintings" 
                }
            }
        }   

        />
        </form>
       
    </div>
  );
}

export default SearchBar