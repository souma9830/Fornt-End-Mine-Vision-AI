import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Satellite, 
  Cpu, 
  Map, 
  BellRing,
  ChevronRight,
  Database,
  BrainCircuit,
  Layers3,
  AlertTriangle
} from "lucide-react";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Data Collection",
      description: "High-resolution DEM, multi-spectral drone imagery, IoT sensor networks, and comprehensive environmental data gathering",
      icon: <Database className="w-8 h-8" />,
      color: "bg-gradient-to-br from-red-500 to-rose-600",
      index: 1
    },
    {
      title: "AI Processing",
      description: "Deep learning algorithms with advanced pattern detection, predictive modeling, and real-time risk analysis",
      icon: <BrainCircuit className="w-8 h-8" />,
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
      index: 2
    },
    {
      title: "Risk Visualization",
      description: "Interactive 3D maps, predictive heatmaps, and immersive visual forecasting with precision overlays",
      icon: <Layers3 className="w-8 h-8" />,
      color: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
      index: 3
    },
    {
      title: "Alerts & Action",
      description: "Multi-channel automated notifications, safety protocol activation, and actionable intelligence delivery",
      icon: <AlertTriangle className="w-8 h-8" />,
      color: "bg-gradient-to-br from-emerald-500 to-teal-600",
      index: 4
    }
  ];

  return (
    <section className="py-28 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
   
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-blue-50/40 via-purple-50/30 to-rose-50/40 transform -skew-y-3 -translate-y-16"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-sky-500 text-white border border-slate-200 mb-6">
            <span className="text-sm font-medium text-white">OUR PROCESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
            Intelligent <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Rockfall Prediction</span> System
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A sophisticated four-stage framework for comprehensive geological risk assessment and mitigation
          </p>
        </motion.div>

 
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
         
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-red-400 via-amber-400 via-purple-400 to-emerald-400 rounded-full hidden md:block"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              <motion.div
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-100 relative h-full transition-all duration-300 shadow-sm hover:shadow-xl group cursor-pointer"
                onClick={() => setActiveStep(index)}
              >
  
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg ${step.color} relative`}
                    whileHover={{ 
                      scale: 1.05,
                      rotate: 5,
                    }}
                  >
                    <span className="text-[2xl] font-bold absolute -top-2 -right-2 w-6 h-6 bg-slate-900 rounded-full text-xs flex items-center justify-center">
                      {step.index}
                    </span>
                    {step.icon}
                  </motion.div>
                </div>
                
                <div className="pt-12 text-center">
                  <h3 className="text-xl font-semibold mb-4 text-slate-900 group-hover:text-slate-800 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-md leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-xs font-medium text-slate-500">
                    <span>Learn more</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        {activeStep !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{steps[activeStep].title}</h3>
                <p className="text-slate-600 mb-6">
                  Our {steps[activeStep].title.toLowerCase()} process utilizes cutting-edge technology to ensure 
                  the highest accuracy in rockfall prediction and risk assessment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-slate-700">Real-time data processing and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-slate-700">Multi-source data integration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-slate-700">Advanced AI algorithms for pattern recognition</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="bg-slate-100 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                      {steps[activeStep].icon}
                    </div>
                    <p className="text-slate-500 text-sm">Interactive visualization of {steps[activeStep].title.toLowerCase()} process</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg inline-flex items-center group">
            <span>See Our Technology In Action</span>
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;