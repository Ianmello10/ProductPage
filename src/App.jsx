import { useState } from 'react'
import './App.css'
import NavMenu from './components/NavMenu' 
import SlideProducts from './components/SlideProducts'
import ProductDescription from './components/ProductDescription'
import PriceContainer from './components/PriceContainer'
import Footer from './components/Footer'
import Container from './components/Container'
import CountProvider from './components/CountContext'
import "swiper/css/bundle";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App"> 

    <CountProvider> 

       <NavMenu/> 

      <Container />

    </CountProvider>
<Footer />
  
    </div>
  )
}

export default App
