
import Home from './pages/Home'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useGsapAnimations from "./hooks/useGsapAnimations";

function App() {
  useGsapAnimations(); // activate GSAP scroll animations

  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
