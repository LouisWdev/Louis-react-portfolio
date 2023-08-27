//COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//PAGES
import Home from "./Pages/Home";
import Portfolio from './Pages/Portfolio';
import About from "./Pages/About";
import Contact from "./Pages/Contact";


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
