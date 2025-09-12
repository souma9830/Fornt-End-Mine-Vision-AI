import { motion } from "framer-motion";
import { BarChart3, Brain, Bell, TrendingUp } from "lucide-react";

const Features = () => {
  return (
    <section className="py-28 px-6 bg-gradient-to-b from-white to-slate-50/70 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-r from-blue-50/30 via-purple-50/20 to-emerald-50/30 transform -skew-y-3 -translate-y-16"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-purple-100/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
     
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-50/80 border border-blue-100 mb-6">
            <span className="text-sm font-medium text-blue-600">AI-POWERED SAFETY PLATFORM</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
            Advanced <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Predictive Safety</span> Intelligence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Next-generation AI tools engineered specifically for mining safety operations and risk mitigation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
         
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white rounded-2xl transform group-hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-100 group-hover:border-blue-100 relative h-full transition-all duration-300 shadow-sm group-hover:shadow-lg">
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute transform rotate-45 bg-blue-500 text-white text-xs font-bold py-1 text-center w-24 -right-8 top-4">
                  AI
                </div>
              </div>
              <div className="mb-6 p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 inline-flex group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                Real-Time Risk Maps
              </h3>
              <p className="text-slate-600 text-md leading-relaxed">
                Dynamic visualization of vulnerable zones with intelligent, color-coded risk assessment overlays
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-xs font-medium text-blue-500 bg-blue-50 px-2 py-1 rounded-full">LIVE MONITORING</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white rounded-2xl transform group-hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-100 group-hover:border-emerald-100 relative h-full transition-all duration-300 shadow-sm group-hover:shadow-lg">
              <div className="mb-6 p-3 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 inline-flex group-hover:scale-110 transition-transform duration-300">
                <Brain className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">
                Predictive Analytics
              </h3>
              <p className="text-slate-600 text-md leading-relaxed">
                Advanced AI-driven risk scoring with probabilistic forecasting for proactive safety measures
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-xs font-medium text-emerald-500 bg-emerald-50 px-2 py-1 rounded-full">FORECASTING</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white rounded-2xl transform group-hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-100 group-hover:border-purple-100 relative h-full transition-all duration-300 shadow-sm group-hover:shadow-lg">
              <div className="mb-6 p-3 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100/50 inline-flex group-hover:scale-110 transition-transform duration-300">
                <Bell className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900 group-hover:text-purple-600 transition-colors duration-300">
                Intelligent Alerts
              </h3>
              <p className="text-slate-600 text-md leading-relaxed">
                Multi-channel notifications with contextual, actionable safety protocols for rapid response
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-xs font-medium text-purple-500 bg-purple-50 px-2 py-1 rounded-full">AUTOMATED</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-white rounded-2xl transform group-hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-100 group-hover:border-amber-100 relative h-full transition-all duration-300 shadow-sm group-hover:shadow-lg">
              <div className="mb-6 p-3 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100/50 inline-flex group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900 group-hover:text-amber-600 transition-colors duration-300">
                Enterprise Scalability
              </h3>
              <p className="text-slate-600 text-md leading-relaxed">
                Adaptable architecture for operations of any size with demonstrated ROI and efficiency gains
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-xs font-medium text-amber-500 bg-amber-50 px-2 py-1 rounded-full">ROI FOCUSED</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg inline-flex items-center">
            <span>Explore All Features</span>
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;