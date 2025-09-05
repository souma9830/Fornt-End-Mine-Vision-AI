import { motion } from "framer-motion";

const team = [
  {
    name: "Sajal Pakira",
    role: "Full Stack Developer",
    img: "https://via.placeholder.com/300x300.png?text=Sajal",
  },
  {
    name: "Soumadeep Shee",
    role: "Frontend Developer",
    img: "https://www.linkedin.com/in/soumadeep-s/overlay/photo/",
  },
  {
    name: "Sarthak Dutta",
    role: "Designer",
    img: "https://via.placeholder.com/300x300.png?text=Jane",
  },
  {
    name: "Rajdeep Paul",
    role: "Data Analyst",
    img: "https://via.placeholder.com/300x300.png?text=Alex",
  },
  {
    name: "Subhranil Mondal",
    role: "ML Developer",
    img: "https://via.placeholder.com/300x300.png?text=Alex",
  },
  {
    name: "Pracheta Betal",
    role: "Speaker & Designer",
    img: "https://via.placeholder.com/300x300.png?text=Alex",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-white/10 px-4 py-1 rounded-full text-sm uppercase tracking-wide text-gray-300 mb-4"
        >
          Meet The Crew
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Our Crew <span className="text-accent">Our Strength</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Get to know the team building the future of safety.
        </motion.p>

        {/* Team Members */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 border-2 border-accent/60 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
