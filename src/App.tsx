//COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//PAGES
import Home from "./Pages/Home";
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import Contact from "./Pages/Contact";

//REACT ROUTER DOM
import { Route, Routes } from "react-router-dom";

//CSS
import './index.css';


const App = () => {

  return (
      <>  
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />   
            <Route path="/Portfolio" element={<Portfolio/>} />     
            <Route path="/About" element={<About />}/>
            <Route path="/Contact" element={<Contact />}/>
          </Routes>  
        <Footer />
      </>   
  )
}

export default App
