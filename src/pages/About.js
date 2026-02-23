import { CheckCircle2, Target, TrendingUp, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">

      {/* Hero */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8">
            <Target className="w-4 h-4" />
            Who We Are
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              NovoMetrics
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-2xl font-light">
            A service-led financial automation business helping growing companies 
            move from spreadsheet chaos to real-time financial clarity.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-blue-600 pl-8 py-2">
            <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed font-light italic">
              "We believe every business — regardless of size — deserves access to 
              timely, accurate financial intelligence. Our mission is to make that 
              possible without enterprise-level complexity or pricing."
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What We Do
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            NovoMetrics helps growing businesses move from fragmented Excel files 
            to centralized financial intelligence. We combine management-level KPI 
            visibility with custom-built dashboards and automated data pipelines.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Every solution we build is tailored to your business — your data sources, 
            your reporting needs, your team. We don't sell software licences. 
            We build systems that work for you, validated by a Chartered Accountant 
            to ensure accuracy in every deliverable.
          </p>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="py-10 px-6 pb-20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-slate-400" />
              The Problem We Solve
            </h3>
            <ul className="space-y-3 text-slate-600">
              {[
                "Manual Excel-based reporting that takes weeks",
                "Delayed month-end numbers that are already stale",
                "No real-time visibility for founders and management",
                "Raw data that doesn't translate into decisions",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-sm text-white">
            <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-200" />
              How We Fix It
            </h3>
            <ul className="space-y-3 text-blue-100">
              {[
                "Automated P&L and KPI dashboards",
                "Centralized data pipelines from your existing tools",
                "Founder-ready financial visibility on day one",
                "Custom reporting workflows built around your team",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-300 rounded-full mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-6 h-6 text-blue-600" />
            <h2
              className="text-3xl md:text-4xl font-bold text-slate-900"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Who We Work With
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Startups",
                description: "Seed to Series B founders who need real-time KPI visibility to make faster decisions and impress investors."
              },
              {
                title: "Healthcare",
                description: "Hospitals and clinics that need automated financial reporting across departments without manual consolidation."
              },
              {
                title: "MSMEs",
                description: "Growing businesses ready to move beyond Excel and get a live, accurate view of their P&L and cash flow."
              }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Ready to work together?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Let's talk about what financial automation could look like for your business.
          </p>
          <a
            href="mailto:shwetha@novometrics.in"
            className="inline-block px-10 py-4 bg-white text-blue-700 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </section>

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
      `}</style>
    </div>
  );
}