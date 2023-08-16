//COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//PAGES
import Home from "./Pages/Home";
import Portfolio from './Pages/Portfolio';
import About from "./Pages/About";
import Contact from "./Pages/Portfolio";

//REACT ROUTER DOM
import { Routes, Route} from "react-router-dom";

const App = () => {
  return (
      <div>
        <Navbar />
           <Home />
           <Portfolio />
           <About />
           <Contact />
        <Footer />
      </div>   
  )
}

export default App
