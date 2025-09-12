import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
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
      {/* Hero Section */}
      {/* <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/open-pit-mine-with-rocky-slopes-industrial-mining-.jpg')",
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-slate-100/70 to-blue-200/60" />

        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance text-slate-900 [text-shadow:0_2px_4px_rgba(255,255,255,0.2)]">
            Mine Vision AI
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-700 max-w-3xl mx-auto text-balance">
            AI-Based Rockfall Prediction & Alert System – Enhancing mine safety
            with predictive analytics and real-time monitoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => navigate("/dashboard")}
            >
              <Eye className="mr-2 h-5 w-5" />
              View Dashboard Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section> */}

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

      {/* Features Section */}
     <section className="py-20 px-6 bg-slate-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-slate-900">
        Advanced Safety Features
      </h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto">
        Comprehensive AI-powered tools designed specifically for mining safety
        operations
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Real-Time Risk Maps */}
      <Card className="bg-white border-2 border-blue-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
        <CardHeader className="flex flex-row items-center space-x-4 p-6">
          <BarChart3 className="h-10 w-10 text-blue-600" />
          <CardTitle className="text-xl font-semibold text-slate-900">
            Real-Time Risk Maps
          </CardTitle>
        </CardHeader>
        <CardContent className="px-6 pb-6 pt-0">
          <CardDescription className="text-base text-slate-600 leading-relaxed">
            Visualizing vulnerable zones instantly with color-coded risk
            assessment overlays
          </CardDescription>
        </CardContent>
      </Card>

      {/* Probability-Based Forecasts */}
      <Card className="bg-white border-2 border-emerald-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
        <CardHeader className="flex flex-row items-center space-x-4 p-6">
          <Brain className="h-10 w-10 text-emerald-600" />
          <CardTitle className="text-xl font-semibold text-slate-900">
            Probability-Based Forecasts
          </CardTitle>
        </CardHeader>
        <CardContent className="px-6 pb-6 pt-0">
          <CardDescription className="text-base text-slate-600 leading-relaxed">
            AI-driven risk scoring with predictive analytics for proactive
            safety measures
          </CardDescription>
        </CardContent>
      </Card>

      {/* Smart Alerts */}
      <Card className="bg-white border-2 border-purple-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
        <CardHeader className="flex flex-row items-center space-x-4 p-6">
          <Bell className="h-10 w-10 text-purple-600" />
          <CardTitle className="text-xl font-semibold text-slate-900">
            Smart Alerts
          </CardTitle>
        </CardHeader>
        <CardContent className="px-6 pb-6 pt-0">
          <CardDescription className="text-base text-slate-600 leading-relaxed">
            Instant SMS & Email notifications to personnel with actionable
            safety protocols
          </CardDescription>
        </CardContent>
      </Card>

      {/* Scalable & Cost-Effective */}
      <Card className="bg-white border-2 border-orange-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
        <CardHeader className="flex flex-row items-center space-x-4 p-6">
          <TrendingUp className="h-10 w-10 text-orange-600" />
          <CardTitle className="text-xl font-semibold text-slate-900">
            Scalable & Cost-Effective
          </CardTitle>
        </CardHeader>
        <CardContent className="px-6 pb-6 pt-0">
          <CardDescription className="text-base text-slate-600 leading-relaxed">
            Adaptable to different mine sizes and operations with proven ROI
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  </div>
    </section>

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