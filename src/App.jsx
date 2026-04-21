import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Work from './Work'
import Join from './Join'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Work />} />
        <Route path="/join" element={<Join />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </Router>
  )
}

export default App
