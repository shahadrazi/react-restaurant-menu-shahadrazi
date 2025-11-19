import React from 'react'
import MenuItem from './components/MenuItem'
import './App.css'

const mainCourses = [
  { id: 'm1', name: 'Butter Chicken', category: 'Main Course', price: 420, isVegetarian: false, description: 'Creamy tomato-based chicken curry served with naan.' },
  { id: 'm2', name: 'Paneer Butter Masala', category: 'Main Course', price: 380, isVegetarian: true, description: 'Soft paneer cubes in rich buttery tomato gravy.' },
  { id: 'm3', name: 'Lamb Rogan Josh', category: 'Main Course', price: 470, isVegetarian: false, description: 'Slow-cooked lamb in aromatic spices.' },
  { id: 'm4', name: 'Veg Biryani', category: 'Main Course', price: 320, isVegetarian: true, description: 'Fragrant basmati rice layered with vegetables and spices.' }
];

const desserts = [
  { id: 'd1', name: 'Gulab Jamun', category: 'Dessert', price: 120, isVegetarian: true, description: 'Fried milk-solid dumplings soaked in sugar syrup.' },
  { id: 'd2', name: 'Rasmalai', category: 'Dessert', price: 150, isVegetarian: true, description: 'Cottage cheese patties in sweetened, thickened milk.' },
  { id: 'd3', name: 'Chocolate Lava Cake', category: 'Dessert', price: 200, isVegetarian: true, description: 'Warm chocolate cake with a gooey center.' }
];

export default function App(){
  const totalItems = mainCourses.length + desserts.length;
  const currentYear = new Date().getFullYear();

  return (
    <div className="container">
      <header className="header">
        <h1>Royal Spice</h1>
        <p className="tagline">Delicious Food, Made Fresh Daily</p>
      </header>

      <section className="info">
        <p><strong>Total Items:</strong> {totalItems}</p>
        <p><strong>Hours:</strong> Open Daily: 11 AM - 10 PM</p>
        <p><strong>Contact:</strong> +91 98765 43210</p>
      </section>

      <main>
        <section className="category">
          <h2>Main Courses</h2>
          <div className="list">
            {mainCourses.map(item => <MenuItem key={item.id} {...item} />)}
          </div>
        </section>

        <section className="category">
          <h2>Desserts</h2>
          <div className="list">
            {desserts.map(item => <MenuItem key={item.id} {...item} />)}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Royal Spice • <a href="mailto:info@royalspice.example">info@royalspice.example</a> • © {new Date().getFullYear()} Royal Spice</p>
      </footer>
    </div>
  )
}
