import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/Header'
import Navigation from './assets/components/Navigation'
import PageContent from './assets/components/PageContent'
import "./assets/css/styles.css"

function App() {

  return (
  <div>
    <Header />
    <div className='body'>
    <Navigation />
    <PageContent />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
    </div>
    
  </div>
  
  )
}

export default App
