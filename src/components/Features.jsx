import { motion } from "framer-motion";
import { DollarSign, BarChart3, PieChart, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Cost Efficiency",
    desc: "Reduce losses by predicting risks early and cutting recovery costs through our advanced AI algorithms.",
    icon: <DollarSign className="w-12 h-12" />,
  },
  {
    title: "Accurate Insights",
    desc: "Visualize hazard-prone areas with precision using real-time interactive maps and predictive analytics.",
    icon: <BarChart3 className="w-12 h-12" />,
  },
  {
    title: "Risk Monitoring",
    desc: "Continuously track danger zones, receive timely updates, and set custom safety thresholds tailored to your operations.",
    icon: <PieChart className="w-12 h-12" />,
  },
  {
    title: "Trusted Security",
    desc: "Enterprise-grade data protection and secure communication channels for your on-ground response teams.",
    icon: <ShieldCheck className="w-12 h-12" />,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-br from-white via-purple-50/30 to-purple-100/20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent">
            Why Choose <span className="text-purple-700">MineVision.AI</span>?
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-600 italic max-w-3xl mx-auto relative"
          >
            <span className="absolute -left-6 top-0 text-purple-400 text-3xl">"</span>
            Predictive, real-time, and reliable—your complete mining safety partner.
            <span className="absolute -right-6 bottom-0 text-purple-400 text-3xl">"</span>
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center text-center h-full relative overflow-hidden border border-purple-100 group-hover:border-purple-200 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="mb-6 p-3 rounded-full bg-gradient-to-br from-purple-50 to-purple-100 group-hover:from-purple-100 group-hover:to-purple-200 transition-all duration-300">
                  <div className="text-purple-700">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-md leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-purple-100"
        >
          <p className="text-gray-500 text-sm">
            Trusted by mining operations across 12 countries
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;