//COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//PAGES
import Home from "./Pages/Home";
import Portfolio from './Pages/Portfolio';

//REACT ROUTER DOM
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
      <>  
       <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />        
            <Route path="/Portfolio" element={<Portfolio/>} />
          </Routes>  
        <Footer />
      </>   
  )
}

export default App
