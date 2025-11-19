import React from 'react'

export default function MenuItem({ name, category, price, description, isVegetarian }){
  return (
    <article className="menu-item">
      <div className="menu-item-header">
        <h3 className="dish-name">{name}</h3>
        {isVegetarian && <span className="veg-badge">Vegetarian</span>}
      </div>
      <p className="category">{category} • ₹{price}</p>
      <p className="description">{description}</p>
    </article>
  )
}
