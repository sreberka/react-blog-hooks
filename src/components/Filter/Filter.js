import React, {useContext} from 'react';
import './Filter.css';
import {BlogContext} from "../../context/BlogContext";

export const Filter = ({items}) => {
    const {filterItems} = useContext(BlogContext)

    return (
       <div className="filter">
           <select onChange={(event) => {
               console.log(event.target.value)
               filterItems(event.target.value)
           }}>
               <option value=''>Choose the author...</option>
               {items.map((index, i) => (
                   <option key={i}>{index.name}</option>
               ))}
           </select>
           <button onClick={() => filterItems()}>Show all</button>
       </div>
    )
}