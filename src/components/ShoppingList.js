import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('FilterByCategory')
  const [updatedItemList, setUpdatedItemList] = useState(items)

  function handleFilterChange(e) {
    let filterField = e.target.value
    console.log(filterField)
    let matchingItems = items.filter(e => e.category === filterField)
    items = matchingItems
    console.log('Cheese', items)
    setUpdatedItemList(matchingItems)
  }
  
  return (
    <div className="ShoppingList" onChange={handleFilterChange}>
      <div className="Filter">
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {updatedItemList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
