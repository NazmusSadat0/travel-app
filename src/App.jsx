import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Home'

const App = () => {
  return (
    <div>
      <Navbar />
      <main className='relative overflow-hidden'>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App