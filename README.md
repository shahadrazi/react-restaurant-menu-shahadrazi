# Restaurant Menu Display - Royal Spice

A React app built with Vite that showcases a restaurant menu using a reusable `MenuItem` component.

## Live Website
(Deploy this to Vercel or Netlify and paste the live URL here)  
https://restaurant-menu-shahadrazi.vercel.app

## GitHub Repository
https://github.com/shahadrazi/restaurant-menu-shahadrazi

## Components
- `MenuItem.jsx` — Reusable component that displays:
  - name, category, price, description
  - conditional vegetarian badge when `isVegetarian` is `true`

## Features
- Main Course and Dessert sections
- MenuItem component reused with `map()` and unique `key` props
- Vegetarian badge conditionally rendered
- Total items count, hours, and contact information
- Responsive layout with basic styling

## Run Locally
1. Clone the repo:
```bash
git clone https://github.com/shahadrazi/restaurant-menu-shahadrazi.git
cd restaurant-menu-shahadrazi
```
2. Install dependencies:
```bash
npm install
```
3. Start development server:
```bash
npm run dev
```
4. Open the site at `http://localhost:5173`

## Project Structure
```
restaurant-menu-shahadrazi/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── components/
        └── MenuItem.jsx
```

## Author
Shahad Razi
