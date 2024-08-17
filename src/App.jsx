

import { Hero } from './Component/Hero'
import { Navbar } from './Component/Navbar'
import "./App.css"



function App() {
 

 


  return (
    <>
      <Navbar></Navbar>
       <div className='section'>
        <Hero></Hero>
        <img src='hero-image.png'></img>
       </div>
    </>
  )
}

export default App
