import React, { useState, useEffect } from 'react';
import { TrendingUp, Database, BarChart3, Shield, Clock, Users, CheckCircle2, ArrowRight, Github, Linkedin, Mail, FileText, Zap, Target, Award } from 'lucide-react';

export default function NovoMetricsPortfolio() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      id: 1,
      category: 'startup',
      title: "Startup KPI Dashboard",
      description: "Real-time financial metrics dashboard for seed to Series B startups, tracking revenue growth, burn rate, runway, and key performance indicators.",
      tech: ["R/Shiny", "MySQL", "Power BI", "Auth0"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      metrics: ["Revenue Trends", "Cash Flow Analysis", "Burn Rate Tracking"]
    },
    {
      id: 2,
      category: 'healthcare',
      title: "Healthcare Finance Reporting",
      description: "Automated financial reporting system for hospitals and clinics, consolidating billing, expenses, and operational metrics into actionable insights.",
      tech: ["R/Shiny", "MySQL", "API Connectors"],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
      metrics: ["Patient Revenue Analysis", "Department P&L", "Operational Efficiency"]
    },
    {
      id: 3,
      category: 'msme',
      title: "MSME P&L Automation",
      description: "End-to-end profit & loss automation for MSMEs, eliminating manual Excel work and providing real-time financial visibility to leadership teams.",
      tech: ["Power BI", "MySQL", "Tally API"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
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
      title: "Automated Pipelines",
      description: "Scheduled data refresh and email delivery, reducing manual work by up to 90%."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-user Access",
      description: "Role-based permissions for founders, finance teams, and stakeholders with granular control."
    }
  ];

  const techStack = [
    { category: "Frontend", items: ["R/Shiny", "Power BI", "Custom Dashboards"] },
    { category: "Backend", items: ["R (ETL & Validation)", "MySQL Database", "API Connectors"] },
    { category: "Security", items: ["Auth0", "Role-based Access", "Data Encryption"] },
    { category: "Infrastructure", items: ["Cloud Hosting", "GitHub", "Automated Backups"] }
  ];

  const roadmap = [
    { phase: "Phase 1", status: "completed", items: ["MySQL DBMS", "KPI Dashboards", "Manual/Scheduled Refresh", "Auth0 Integration"] },
    { phase: "Phase 2", status: "current", items: ["API-based Ingestion", "Automated ETL", "Multi-source Joins", "Email Reports"] },
    { phase: "Phase 3", status: "planned", items: ["Industry Benchmarking", "Threshold Alerts", "AI Projections", "Advanced Forecasting"] }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 backdrop-blur-xl bg-white/80 border-b border-slate-200/50 shadow-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-slate-800" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  NovoMetrics
                </div>
                <div className="text-xs text-slate-500">Financial Intelligence</div>
              </div>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#tech" className="text-slate-600 hover:text-blue-600 transition-colors">Technology</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

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
              Automated financial reporting and KPI dashboards for startups, healthcare, and MSMEs. 
              Real-time visibility without enterprise complexity.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                View Portfolio <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-300 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className={`grid md:grid-cols-3 gap-6 mt-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50">
              <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
              <div className="text-slate-600">Reduction in Manual Work</div>
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

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Target className="w-4 h-4" />
                Our Mission
              </div>
              <h2 
                className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Transforming Financial Operations
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                NovoMetrics helps growing businesses move from fragmented Excel files to centralized financial intelligence. 
                We combine management-level KPI visibility with custom-built dashboards and automated data pipelines.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                This is not a SaaS platform—it's a <strong>service-led automation business</strong> that delivers 
                lightweight financial systems without enterprise-level complexity or pricing.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  The Problem
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Manual Excel-based reporting</li>
                  <li>• Delayed month-end numbers</li>
                  <li>• No real-time visibility for leadership</li>
                  <li>• Data doesn't translate to insights</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  Our Solution
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Automated P&L and KPI dashboards</li>
                  <li>• Centralized data pipelines</li>
                  <li>• Founder-ready financial visibility</li>
                  <li>• Custom reporting workflows</li>
                </ul>
              </div>
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
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Portfolio Projects
            </div>
            <h2 
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Real-World Implementations
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-3 justify-center mb-12 flex-wrap">
            {['all', 'startup', 'healthcare', 'msme'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 border-2 border-slate-200 hover:border-blue-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-slate-700 mb-2">Key Metrics:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="tech" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Technology <span className="text-blue-600">Stack</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built with enterprise-grade tools and modern frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200/50"
              >
                <h3 className="text-lg font-bold text-blue-600 mb-4">
                  {stack.category}
                </h3>
                <ul className="space-y-2">
                  {stack.items.map((item, i) => (
                    <li 
                      key={i}
                      className="flex items-center gap-2 text-slate-700"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Roadmap */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Development Roadmap
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {roadmap.map((phase, index) => (
                <div 
                  key={index}
                  className={`rounded-2xl p-6 border-2 ${
                    phase.status === 'completed' 
                      ? 'bg-green-50 border-green-300'
                      : phase.status === 'current'
                      ? 'bg-blue-50 border-blue-400'
                      : 'bg-slate-50 border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-slate-900">{phase.phase}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      phase.status === 'completed'
                        ? 'bg-green-200 text-green-800'
                        : phase.status === 'current'
                        ? 'bg-blue-200 text-blue-800'
                        : 'bg-slate-200 text-slate-700'
                    }`}>
                      {phase.status}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          phase.status === 'completed' ? 'text-green-600' : 'text-slate-400'
                        }`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Ready to Automate Your Finance?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Let's discuss how NovoMetrics can transform your financial operations with custom automation solutions.
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:contact@novometrics.in"
              className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <a 
            href="mailto:contact@novometrics.in"
            className="inline-block px-10 py-4 bg-white text-blue-700 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-2">© 2024 NovoMetrics. Financial Intelligence for Growing Businesses.</p>
          <p className="text-sm">
            <a href="https://novometrics.in" className="hover:text-blue-400 transition-colors">novometrics.in</a>
          </p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&display=swap');
        
        * {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
      `}</style>
    </div>
  );
}
