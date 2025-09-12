import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
// import Contact from "../components/Contact";
import Footer from "../components/Footer";
import useGsapAnimations from "../hooks/useGsapAnimations";
import Team from "../components/Team";
import Corousel from "../components/corousel";

const Home = () => {
  useGsapAnimations();

  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Corousel />
      <About />
      <Features />
      <Team />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Home;
