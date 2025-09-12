import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import Feature from "./Feature";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { BarChart3, Eye, Brain, Bell, TrendingUp } from "lucide-react";


export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
     
      {/* About/Problem Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-slate-900">
              The Challenge
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Rockfalls in open-pit mines pose significant safety risks to
              personnel and equipment, causing operational delays and potential
              casualties. Traditional monitoring methods are reactive rather
              than predictive, leaving mines vulnerable to unexpected geological
              events.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Mine Vision AI transforms safety protocols by providing real-time
              risk assessment and predictive analytics, enabling proactive
              measures to protect lives and maintain operational continuity.
            </p>
          </div>
          <div>
            <img
              src="/mining-geological-diagram-rock-formation-analysis.jpg"
              alt="Mining geological analysis diagram"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      <Feature/>
      
      {/* How It Works Section */}
     <section className="py-20 px-6 bg-slate-100">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-slate-900">
        How It Works
      </h2>
      <p className="text-xl text-slate-700">
        A streamlined four-step process for comprehensive rockfall
        prediction
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-8 text-center">
      {/* Step 1: Data Collection */}
      <div className="flex flex-col items-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-red-500 text-white shadow-md"
        >
          <span className="text-2xl font-bold">1</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-slate-900">
          Data Collection
        </h3>
        <p className="text-slate-600 leading-relaxed">
          DEM, drone images, sensors, and environmental data gathering
        </p>
      </div>

      {/* Step 2: AI Processing */}
      <div className="flex flex-col items-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-yellow-400 text-slate-900 shadow-md"
        >
          <span className="text-2xl font-bold">2</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-slate-900">
          AI Processing
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Advanced pattern detection and risk analysis algorithms
        </p>
      </div>

      {/* Step 3: Risk Visualization */}
      <div className="flex flex-col items-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-fuchsia-500 text-white shadow-md"
        >
          <span className="text-2xl font-bold">3</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-slate-900">
          Risk Visualization
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Interactive maps and predictive forecasts generation
        </p>
      </div>

      {/* Step 4: Alerts & Action */}
      <div className="flex flex-col items-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-green-500 text-white shadow-md"
        >
          <span className="text-2xl font-bold">4</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-slate-900">
          Alerts & Action
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Automated notifications and safety protocol activation
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Impact Section */}
      <section className="py-20 px-6 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-slate-900">
            Proven Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">60%</div>
              <p className="text-lg text-slate-600">
                Reduction in rockfall-related delays
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">500+</div>
              <p className="text-lg text-slate-600">Personnel protected daily</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-cyan-600 mb-2">$2M+</div>
              <p className="text-lg text-slate-600">
                Annual cost savings achieved
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}