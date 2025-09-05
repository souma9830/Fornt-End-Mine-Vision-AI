import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import useGsapAnimations from "../hooks/useGsapAnimations";

const Home = () => {
  // enable GSAP scroll animations
  useGsapAnimations();

  return (
    <div className="bg-primary text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
