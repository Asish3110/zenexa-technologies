import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Career from './pages/Career'
import Contact from './pages/Contact'
import Development from './pages/Development'
import CareerElevate from './pages/CareerElevate'


function App() {
  return (
    <Routes>

      <Route path='/' element={<Home />} />

      <Route path='/about' element={<About />} />

      <Route path='/services' element={<Services />} />

      <Route path='/development' element={<Development />} />

      <Route path='/career-elevate' element={<CareerElevate />} />

      <Route path='/career' element={<Career />} />

      <Route path='/contact' element={<Contact />} />

    </Routes>
  )
}

export default App