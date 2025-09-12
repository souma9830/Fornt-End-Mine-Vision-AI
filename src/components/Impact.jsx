import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  TrendingUp, 
  Users, 
  DollarSign,
  Shield,
  Clock,
  BarChart3
} from "lucide-react";

const Counter = ({ value, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;
      
      const totalDuration = duration * 1000;
      const incrementTime = totalDuration / end;
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const ImpactStats = () => {
  const stats = [
    {
      value: "60",
      suffix: "%",
      title: "Reduction in rockfall-related delays",
      description: "Dramatically decreased operational interruptions",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100"
    },
    {
      value: "500",
      suffix: "+",
      title: "Personnel protected daily",
      description: "Ensuring safety for entire mining teams",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-100"
    },
    {
      value: "2",
      suffix: "M+",
      title: "Annual cost savings achieved",
      description: "Substantial financial impact for operations",
      color: "from-cyan-500 to-teal-500",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-100"
    }
  ];

  return (
    <section className="py-28 px-6 bg-gradient-to-br from-white via-slate-50 to-slate-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
            <span className="text-sm font-medium text-slate-700">PROVEN RESULTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
            Quantifiable <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Safety Impact</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Demonstrable results that showcase the tangible benefits of our predictive safety system
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-2xl transform group-hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"></div>
              <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border ${stat.borderColor} relative h-full transition-all duration-300 shadow-sm group-hover:shadow-xl`}>
            <div className={`text-6xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  <Counter value={stat.value} suffix={stat.suffix} duration={2.5} />
             </div>
                
                <h3 className="text-xl font-semibold mb-2 text-slate-900">
                  {stat.title}
                </h3>
                <p className="text-slate-600 text-md">
                  {stat.description}
                </p>
                {index === 0 && (
                  <div className="mt-6 bg-slate-100 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      transition={{ duration: 2, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                    ></motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div> 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg inline-flex items-center group">
            <span>View Case Studies</span>
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStats;