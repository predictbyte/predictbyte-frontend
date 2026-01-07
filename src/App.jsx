
import './App.css'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Automation from './Automation'
import DigitalMarketing from './DigitalMarketing'
import Dev from './Dev'
import Adaura from './Adaura'
import Enrollment from './Enrollment'
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'



function App() {
  

  return (
    <>
<BrowserRouter>
<Navbar></Navbar>

<Routes>
<Route path="/" element={<Home></Home>}></Route>
<Route path="/about" element={<About></About>}></Route>
<Route path="/contact" element={<Contact></Contact>}></Route>
<Route path="/Digital" element={<DigitalMarketing></DigitalMarketing>}></Route>
<Route path="/dev" element={<Dev></Dev>}></Route>
<Route path="/adaura" element={<Adaura></Adaura>}></Route>
<Route path="/enroll" element={<Enrollment></Enrollment>}></Route>
<Route path="/automation" element={<Automation></Automation>}></Route>


</Routes>

<Footer></Footer>
</BrowserRouter>
    </>
  )
}

export default App
