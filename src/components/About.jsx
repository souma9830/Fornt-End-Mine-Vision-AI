// import { motion } from "framer-motion";
// import { fadeInLeft, fadeInRight } from "../utils/animations";
// import aboutImg from "../assets/about.png";

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-primary">
//       <div className="grid items-center gap-12 px-6 mx-auto max-w-7xl md:grid-cols-2">
//         <motion.img
//           src={aboutImg}
//           alt="About"
//           className="shadow-lg rounded-2xl"
//           variants={fadeInLeft}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         />
//         <motion.div
//           variants={fadeInRight}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <h2 className="mb-6 text-4xl font-bold text-accent">About MineVisionAI</h2>
//           <p className="leading-relaxed text-gray-300">
//             MineVisionAI is an innovative platform leveraging AI and computer
//             vision to transform mining operations. We optimize resource
//             extraction, improve safety, and drive sustainability in the
//             industry.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;





import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../utils/animations";
import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="grid items-center gap-12 px-6 mx-auto max-w-7xl md:grid-cols-2">
        {/* Image */}
        <motion.img
          src={aboutImg}
          alt="About"
          className="shadow-xl rounded-2xl"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        {/* Text */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-4xl font-bold text-accent">
            About MineVisionAI
          </h2>
          <p className="leading-relaxed text-gray-700">
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
