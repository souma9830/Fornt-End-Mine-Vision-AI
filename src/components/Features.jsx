// import { motion } from "framer-motion";
// import { DollarSign, BarChart3, PieChart, ShieldCheck } from "lucide-react";

// const features = [
//   {
//     title: "Cost efficiency",
//     desc: "Reduce losses by predicting risks early and cutting recovery costs.",
//     icon: <DollarSign className="w-10 h-10 text-violet-400" />,
//   },
//   {
//     title: "Accurate Insights",
//     desc: "Visualize hazard-prone areas with real-time maps and predictive analytics.",
//     icon: <BarChart3 className="w-10 h-10 text-violet-400" />,
//   },
//   {
//     title: "Risk Monitoring",
//     desc: "Track danger zones, receive timely updates, and set custom safety thresholds.",
//     icon: <PieChart className="w-10 h-10 text-violet-400" />,
//   },
//   {
//     title: "Trusted Security",
//     desc: "Reliable data protection and safe communication for on-ground response teams.",
//     icon: <ShieldCheck className="w-10 h-10 text-violet-400" />,
//   },
// ];

// const Features = () => {
//   return (
//     <section
//       id="features"
//       className="py-20 bg-gradient-to-b from-gray-900 to-black"
//     >
//       <div className="max-w-6xl px-6 mx-auto text-center">
//         {/* Section Header */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-4 text-4xl font-bold text-white"
//         >
//           Why Choose <span className="text-violet-400">MineVision.AI</span> ?
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="mb-12 italic text-gray-400"
//         >
//           “Predictive, real-time, and reliable—your complete mining safety
//           partner.”
//         </motion.p>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {features.map((feature, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: idx * 0.2 }}
//               className="flex flex-col items-center p-6 text-center transition-all border border-gray-700 bg-gray-800/50 backdrop-blur-md rounded-2xl hover:shadow-lg hover:shadow-violet-500/20"
//             >
//               <div className="mb-4">{feature.icon}</div>
//               <h3 className="mb-2 text-lg font-semibold text-white">
//                 {feature.title}
//               </h3>
//               <p className="text-sm text-gray-400">{feature.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;






import { motion } from "framer-motion";
import { DollarSign, BarChart3, PieChart, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Cost efficiency",
    desc: "Reduce losses by predicting risks early and cutting recovery costs.",
    icon: <DollarSign className="w-10 h-10 text-purple-600" />,
  },
  {
    title: "Accurate Insights",
    desc: "Visualize hazard-prone areas with real-time maps and predictive analytics.",
    icon: <BarChart3 className="w-10 h-10 text-purple-600" />,
  },
  {
    title: "Risk Monitoring",
    desc: "Track danger zones, receive timely updates, and set custom safety thresholds.",
    icon: <PieChart className="w-10 h-10 text-purple-600" />,
  },
  {
    title: "Trusted Security",
    desc: "Reliable data protection and safe communication for on-ground response teams.",
    icon: <ShieldCheck className="w-10 h-10 text-purple-600" />,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Why Choose <span className="text-purple-700">MineVision.AI</span> ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 italic mb-12"
        >
          “Predictive, real-time, and reliable—your complete mining safety partner.”
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
