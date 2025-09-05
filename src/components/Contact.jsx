import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-4xl px-6 mx-auto text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-6 text-4xl font-bold text-accent"
        >
          Contact Us
        </motion.h2>
        <p className="mb-10 text-gray-300">
          Have questions? Reach out to us and let’s shape the future of mining together.
        </p>
        <form className="grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 border border-gray-700 rounded-lg bg-primary/80 focus:outline-accent"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 border border-gray-700 rounded-lg bg-primary/80 focus:outline-accent"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-4 border border-gray-700 rounded-lg bg-primary/80 focus:outline-accent"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="px-8 py-3 font-semibold text-black rounded-lg bg-accent"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;