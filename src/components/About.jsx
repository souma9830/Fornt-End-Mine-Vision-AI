import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../utils/animations";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src={aboutImg}
          alt="About"
          className="rounded-2xl shadow-lg"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-accent mb-6">About MineVisionAI</h2>
          <p className="text-gray-300 leading-relaxed">
            MineVisionAI is an innovative platform leveraging AI and computer
            vision to transform mining operations. We optimize resource
            extraction, improve safety, and drive sustainability in the
            industry.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
