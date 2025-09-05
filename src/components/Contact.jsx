import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold text-accent mb-6"
        >
          Contact Us
        </motion.h2>
        <p className="text-gray-300 mb-10">
          Have questions? Reach out to us and let’s shape the future of mining together.
        </p>
        <form className="grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-lg bg-primary/80 border border-gray-700 focus:outline-accent"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-lg bg-primary/80 border border-gray-700 focus:outline-accent"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-4 rounded-lg bg-primary/80 border border-gray-700 focus:outline-accent"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="bg-accent text-black font-semibold px-8 py-3 rounded-lg"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
