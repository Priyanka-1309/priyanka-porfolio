import React from 'react'
import Navbar from './components/header/Navbar'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/about/About'
import Layout from './layouts/Layout'
import NotFound from './pages/notFound/NotFound'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
 
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App

