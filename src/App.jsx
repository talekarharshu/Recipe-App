import React from 'react'
import Home from './components/Home'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Recipe from './components/Recipe'
import Category from './components/Category'
import Search from './components/Search'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:idMeal" element={<Recipe />} />
          <Route path="/Category/:name" element={<Category />} />
          <Route path="/Search/:searchElement" element={<Search />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
