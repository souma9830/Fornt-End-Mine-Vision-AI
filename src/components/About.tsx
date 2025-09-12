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
import HowItWorks from "./HowItWork";
import ImpactStats from "./Impact";


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
    <HowItWorks/>


      {/* Impact Section */}
    <ImpactStats/>
      
    </div>
  );
}