
import './App.css'
import Footer from './Components/Footer'
import HeroElement from './Components/HeroElement'
import Middlesec from './Components/Middlesec'
import Thirdsec from './Components/Thirdsec'
import Header from './Components/Header'
function App() {


  return (
    <div>
      <div className='Main relative'>
     <Header/>
     <HeroElement/>
      </div>
    <div className='curve'><img src='/Curve2.png'/></div>    
    <Middlesec/>
    <Thirdsec/>
    <Footer/>
    </div>
  

  )
}

export default App
