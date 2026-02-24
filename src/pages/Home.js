import React, { useState, useEffect } from 'react';
import { TrendingUp, Database, BarChart3, Shield, Clock, Users, ArrowRight, Linkedin, Mail, Zap, Award } from 'lucide-react';

const FeaturedSolution = ({ project }) => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % project.screenshots.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [project.screenshots.length, project.id]);

  return (
    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 py-24 border-b border-slate-200 last:border-0">
      
      <div className="w-full lg:w-5/12 space-y-10">
        <div className="space-y-6">
          <h3 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]" style={{ fontFamily: "'Outfit', sans-serif" }}>
            {project.title}
          </h3>
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light">
            {project.description}
          </p>
        </div>

        <div className="pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.metrics.map((metric, i) => (
              <div key={i} className="flex items-center gap-3 text-lg text-slate-800 font-medium">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                {metric}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-7/12 relative group">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-[0_30px_100px_rgba(0,0,0,0.12)]">
          {project.screenshots.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${project.title} preview`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${
                idx === currentImg ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
            />
          ))}
        </div>

        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
          {project.screenshots.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                idx === currentImg ? 'bg-blue-600 w-10' : 'bg-slate-300 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    document.title = "NovoMetrics | Financial Intelligence";    
  }, []);

  const projects = [
    {
      id: 1,
      category: 'startup',
      title: "Startup KPI Dashboard",
      description: "Real-time financial metrics dashboard for seed to Series B startups, tracking revenue growth, burn rate, runway, and key performance indicators.",
      screenshots: ["images/sample_1.jpeg", "images/sample_2.jpeg", "images/sample_3.jpeg"],
      metrics: ["Revenue Trends", "Cash Flow Analysis", "Burn Rate Tracking"]
    },
    {
      id: 2,
      category: 'healthcare',
      title: "Healthcare Finance Reporting",
      description: "Automated financial reporting system for hospitals and clinics, expenses, and operational metrics into actionable insights.",
      screenshots: ["images/sample_1.jpeg", "images/sample_2.jpeg", "images/sample_3.jpeg"],
      metrics: ["Patient Revenue Analysis", "Department P&L", "Operational Efficiency"]
    },
    {
      id: 3,
      category: 'MSME',
      title: "MSME P&L Automation",
      description: "End-to-end MIS automation for MSMEs, eliminating manual Excel work and providing real-time financial visibility to leadership teams.",
      screenshots: ["images/sample_1.jpeg", "images/sample_2.jpeg", "images/sample_3.jpeg"],
      metrics: ["Automated P&L", "Expense Categorization", "Margin Analysis"]
    }
  ];

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Real-time Visibility",
      description: "Live financial dashboards that update automatically, giving founders instant access to critical metrics."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Centralized Data",
      description: "All your financial data in one place, eliminating fragmented Excel files and data silos."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Custom Dashboards",
      description: "Tailored reporting solutions built specifically for your business needs and industry requirements."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with Auth0, role-based access, and isolated client environments."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Automated Data Pipelines",
      description: "Scheduled data refresh and email delivery, reducing manual work by up to 80%."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Accuracy & Control",
      description: "Finance data is validated by a Chartered Accountant, ensuring accuracy and reliability in every deliverable."
    }
  ];

  const techStack = [
    { 
      category: "Data & Analysis", 
      description: "Industrial strength processing",
      items: [
        { name: "Python", logo: "images/python.svg" },
        { name: "PostgreSQL", logo: "images/postgresql.svg" },
        { name: "Pandas", logo: "images/pandas.svg" }
      ] 
    },
    { 
      category: "Visualization", 
      description: "Interactive executive insights",
      items: [
        { name: "Power BI", logo: "images/powerbi.png" },
        { name: "Plotly", logo: "images/plotly.svg" },
      ] 
    },
    { 
      category: "Security & Cloud", 
      description: "Enterprise-grade protection",
      items: [
        { name: "Auth0", logo: "images/auth0.svg" },
        { name: "AWS", logo: "images/aws.png" },
        { name: "Docker", logo: "images/docker.svg" }
      ] 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Financial Automation Platform
            </div>
            
            <h1 
              className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              From Excel Chaos to
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Financial Intelligence
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Automated financial reporting and KPI dashboards for your business. 
              Real-time financial visibility without any complexity.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <a 
                href="#solutions" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Solutions <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-300 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>

            <div className="max-w-7xl mx-auto mt-4 px-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                  alt="Startup KPI Dashboard Preview" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
              </div>  
            </div>
          </div>

          {/* Stats */}
          <div
            className={`grid md:grid-cols-4 gap-6 mt-16 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50">
              <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
              <div className="text-slate-600">Reduction in Manual Work</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50">
              <div className="text-4xl font-bold text-blue-600 mb-2">Financial Data Quality</div>
              <div className="text-slate-600">Timely. Accurate. Consistent.</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50">
              <div className="text-4xl font-bold text-blue-600 mb-2">Real-time</div>
              <div className="text-slate-600">Financial Visibility</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-slate-600">Custom Built Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Core Capabilities
            </div>
            <h2 
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              What We Deliver
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive financial automation tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto"> 
          <div className="mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Industry Solutions
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Proven Implementations
            </h2>
          </div>

          <div className="space-y-0">
            {projects.map(project => (
              <FeaturedSolution key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="tech" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Our Technology <span className="text-blue-600">Ecosystem</span>
            </h2>
            <p className="text-slate-500 text-lg">Industrial strength tools for enterprise-grade intelligence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techStack.map((stack, index) => (
              <div 
                key={index} 
                className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col items-center text-center"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{stack.category}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{stack.description}</p>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                  {stack.items.map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-3">
                      <div className="w-14 h-14 flex items-center justify-center bg-slate-50 rounded-2xl p-3 transition-transform hover:scale-110">
                        <img 
                          src={item.logo} 
                          alt={item.name} 
                          className="w-full h-full object-contain"
                          onError={(e) => { e.target.src = "https://cdn.simpleicons.org/code/cccccc"; }}
                        />
                      </div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
<section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
  <div className="max-w-6xl mx-auto">
    <h2
      className="text-4xl md:text-5xl font-bold mb-12 text-center"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      Ready to Automate Your Finance?
    </h2>

    <div className="grid md:grid-cols-2 gap-12 items-start">

      {/* Left Side */}
      <div className="flex flex-col gap-8" style={{ alignItems: 'center' }}>
        <p className="text-xl text-blue-100 leading-relaxed text-center">
          Let's discuss how NovoMetrics can transform your financial operations with custom automation solutions.
        </p>

        <div className="flex flex-col gap-4" style={{ alignItems: 'center', width: '100%' }}>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300"
            style={{ width: '280px', justifyContent: 'center' }}
          >
            <Linkedin className="w-5 h-5" />
            <span className="font-medium">Connect on LinkedIn</span>
          </a>

          <a
            href="mailto:contact@novometrics.in"
            className="flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300"
            style={{ width: '280px', justifyContent: 'center' }}
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium">contact@novometrics.in</span>
          </a>

          <a
            href="tel:+918197163069"
            className="flex items-center justify-center px-8 py-4 bg-white text-blue-700 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            style={{ textAlign: 'center' }}
          >
            Schedule a Consultation: +91 8197-163-069
          </a>
        </div>
      </div>

      {/* Right Side - Contact Form */}
<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
  <h3
    className="text-2xl font-semibold mb-6"
    style={{ fontFamily: "'Outfit', sans-serif" }}
  >
    Send us a message
  </h3>

  <form
    name="contact"
    method="POST"
    action = "/"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    className="flex flex-col gap-4"
  >
    {/* Required hidden inputs for Netlify */}
    <input type="hidden" name="form-name" value="contact" />
    <input type="hidden" name="bot-field" />

    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="w-full px-4 py-3 bg-white/10 border border-white/25 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-white/60 transition-all duration-200"
    />

    <input
      type="text"
      name="company"
      placeholder="Your Place / Company"
      className="w-full px-4 py-3 bg-white/10 border border-white/25 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-white/60 transition-all duration-200"
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="w-full px-4 py-3 bg-white/10 border border-white/25 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-white/60 transition-all duration-200"
    />

    <textarea
      rows={4}
      name="message"
      placeholder="Your Query"
      required
      className="w-full px-4 py-3 bg-white/10 border border-white/25 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-white/60 transition-all duration-200 resize-none"
    />

    <button
      type="submit"
      className="w-full py-4 bg-white text-blue-700 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
    >
      Submit
    </button>
  </form>
</div>

    </div>
  </div>
</section>        
      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-2">© 2026 Novometric Solutions (LLP). Financial Intelligence for Businesses.</p>
          <p className="text-sm">
            <a href="https://www.novometrics.in" className="hover:text-blue-400 transition-colors">novometrics.in</a>
          </p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&display=swap');
        * { scroll-behavior: smooth; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
      `}</style>
    </div>
  );
}