import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";
import servicesImg from "../assets/services.jpg";

const services = [
  { title: "Computer Vision Monitoring", desc: "Real-time video analytics for mining operations." },
  { title: "AI-Powered Safety", desc: "Automated hazard detection & worker safety alerts." },
  { title: "Predictive Maintenance", desc: "Machine learning models to reduce downtime." },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-primary/95">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold text-accent mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 bg-secondary/10 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold mb-4">{s.title}</h3>
              <p className="text-gray-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
