//COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//PAGES
import Home from "./Pages/Home";
import Portfolio from './PortfolioSection/Portfolio';

//REACT ROUTER DOM
import { Route, Routes } from "react-router-dom";

//CSS
import './index.css'


const App = () => {
  return (
      <>  
          <Routes>
            <Route path="/" element={<Home/>} />   
            <Route path="/Portfolio" element={<Portfolio/>} />     
          </Routes>  
        <Footer />
      </>   
  )
}

export default App
