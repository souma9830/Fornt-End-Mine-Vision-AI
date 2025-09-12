// import { motion } from "framer-motion";

// const team = [
//   {
//     name: "Sajal Pakira",
//     role: "Full Stack Developer",
//     img: "https://via.placeholder.com/300x300.png?text=Sajal",
//   },
//   {
//     name: "Soumadeep Shee",
//     role: "Frontend Developer",
//     img: "https://www.linkedin.com/in/soumadeep-s/overlay/photo/",
//   },
//   {
//     name: "Sarthak Dutta",
//     role: "Designer",
//     img: "https://via.placeholder.com/300x300.png?text=Jane",
//   },
//   {
//     name: "Rajdeep Paul",
//     role: "Data Analyst",
//     img: "https://via.placeholder.com/300x300.png?text=Alex",
//   },
//   {
//     name: "Subhranil Mondal",
//     role: "ML Developer",
//     img: "https://via.placeholder.com/300x300.png?text=Alex",
//   },
//   {
//     name: "Pracheta Betal",
//     role: "Speaker & Designer",
//     img: "https://via.placeholder.com/300x300.png?text=Alex",
//   },
// ];

// const Team = () => {
//   return (
//     <section id="team" className="py-20 text-white bg-black">
//       <div className="max-w-6xl px-6 mx-auto text-center">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="inline-block px-4 py-1 mb-4 text-sm tracking-wide text-gray-300 uppercase rounded-full bg-white/10"
//         >
//           Meet The Crew
//         </motion.div>

//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="mb-4 text-4xl font-bold md:text-5xl"
//         >
//           Our Crew <span className="text-accent">Our Strength</span>
//         </motion.h2>

//         {/* Subtext */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.9 }}
//           className="max-w-2xl mx-auto mb-12 text-gray-400"
//         >
//           Get to know the team building the future of safety.
//         </motion.p>

//         {/* Team Members */}
//         <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
//           {team.map((member, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               className="p-6 transition bg-gray-900 shadow-lg rounded-2xl hover:shadow-xl"
//             >
//               <img
//                 src={member.img}
//                 alt={member.name}
//                 className="object-cover w-32 h-32 mx-auto mb-4 border-2 rounded-full border-accent/60"
//               />
//               <h3 className="text-xl font-semibold">{member.name}</h3>
//               <p className="text-gray-400">{member.role}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;

import { motion } from "framer-motion";

const team = [
  {
    name: "Sajal Pakira",
    role: "Full Stack Developer",
    img: "/sajal.jpg",
  },
  {
    name: "Soumadeep Shee",
    role: "Frontend Developer",
    img: "/shee.jpeg",
  },
  {
    name: "Sarthak Dutta",
    role: "Designer & Speaker",
    img: "/sarthak.jpeg",
  },
  {
    name: "Rajdeep Paul",
    role: "Data Analyst",
    img: "/raj.png",
  },
  {
    name: "Subhranil Mondal",
    role: "ML Developer",
    img: "/subh.jpeg",
  },
  {
    name: "Pracheta Betal",
    role: "Speaker & Designer",
    img: "/pracheta.jpg",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-50 text-gray-800">
      <div className="max-w-6xl px-6 mx-auto text-center">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1 mb-4 text-sm tracking-wide uppercase rounded-full bg-violet-100 text-violet-700"
        >
          Meet The Crew
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-4xl font-bold md:text-5xl"
        >
          Our Crew <span className="text-violet-600">Our Strength</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="max-w-2xl mx-auto mb-12 text-gray-600"
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
              className="p-6 transition bg-white border shadow-md rounded-2xl hover:shadow-lg"
            >
              <img
                src={member.img}
                alt={member.name}
                className="object-cover w-32 h-32 mx-auto mb-4 border-2 rounded-full border-violet-400/60"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
