import React, { useState, useEffect } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

const faqs = [
  {
    category: "About NovoMetrics",
    items: [
      {
        q: "What is NovoMetrics?",
        a: "NovoMetrics is a financial intelligence platform that replaces manual Excel-based reporting with automated dashboards and data pipelines. We build custom financial reporting solutions for startups, MSMEs, and healthcare businesses — giving founders and management real-time visibility into their numbers."
      },
      {
        q: "Who is NovoMetrics built for?",
        a: "We serve startups (seed to Series B), MSMEs, and healthcare institutions that need accurate, timely financial reporting without hiring a large in-house analytics team. If your team is spending days on month-end reporting, NovoMetrics is built for you."
      },
      {
        q: "Is NovoMetrics an off-the-shelf software product?",
        a: "No. Every solution we build is 100% custom. We design dashboards, data pipelines, and reporting workflows specifically around your business model, data sources, and decision-making needs — not a one-size-fits-all template."
      }
    ]
  },
  {
    category: "Getting Started",
    items: [
      {
        q: "How long does it take to set up?",
        a: "A typical engagement goes live within 2–4 weeks, depending on the complexity of your data sources and reporting requirements. We begin with a discovery call to map your data, then build and iterate rapidly until the dashboard is exactly what your team needs."
      },
      {
        q: "What information do I need to provide to get started?",
        a: "We start with a free discovery call where we understand your current reporting process, the data you have (ERP exports, accounting software, spreadsheets), and the metrics that matter most to your leadership. From there we handle the technical heavy lifting."
      },
      {
        q: "Do I need any technical expertise to use the dashboards?",
        a: "None at all. Our dashboards are built for founders, CFOs, and operations heads — not data engineers. Everything is designed to be intuitive, with clear charts, filters, and summaries that make your numbers immediately actionable."
      }
    ]
  },
  {
    category: "Data & Security",
    items: [
      {
        q: "Is my financial data secure?",
        a: "Absolutely. We use enterprise-grade security: Auth0 for authentication, role-based access control so each team member sees only what they need, and isolated client environments on AWS. Your data is never mixed with other clients' data."
      },
      {
        q: "What data sources can NovoMetrics connect to?",
        a: "We connect to a wide range of sources — accounting software (Tally, Zoho Books, QuickBooks), ERP exports, raw Excel/CSV files, bank statements, CRM data, and more. If your data exists somewhere, we can almost certainly pipe it into your dashboard."
      },
      {
        q: "Who validates the accuracy of the financial data?",
        a: "Every deliverable is reviewed by a Chartered Accountant on our team. We don't just automate — we ensure that what you see on your dashboard is financially correct, consistent, and audit-ready."
      }
    ]
  },
  {
    category: "Features & Customization",
    items: [
      {
        q: "Can I customize the dashboards after they're built?",
        a: "Yes. We treat every engagement as an ongoing relationship. You can request new metrics, change chart layouts, add new data sources, or adjust reporting frequencies at any time. We also offer scheduled maintenance and enhancement packages."
      },
      {
        q: "Do you offer automated report delivery?",
        a: "Yes. We set up scheduled data pipelines that refresh your dashboard automatically and can deliver email summaries to stakeholders on a daily, weekly, or monthly cadence — so the right people always have the right numbers at the right time."
      }
    ]
  },
  {
    category: "Pricing & Support",
    items: [
      {
        q: "How is NovoMetrics priced?",
        a: "Pricing is project-based and depends on the scope — number of data sources, complexity of reporting, and level of ongoing support required. We offer a free initial consultation to scope your requirements and provide a transparent quote before any commitment."
      },
      {
        q: "Do you provide ongoing support after the dashboard is launched?",
        a: "Yes. We offer post-launch support plans that cover data pipeline maintenance, bug fixes, and dashboard updates. We also provide training sessions so your team can make the most of the tools we build."
      },
      {
        q: "What if I already use Power BI or another BI tool?",
        a: "That's great — we can work within your existing environment. We can build on top of your current Power BI setup, improve data pipelines feeding into it, or migrate you to a more suitable stack if needed. The goal is always what works best for your team."
      }
    ]
  }
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-blue-50 transition-colors duration-200"
      >
        <span className="text-slate-800 font-semibold text-base leading-snug">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 py-5 bg-slate-50 border-t border-slate-100">
          <p className="text-slate-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    document.title = "FAQ | NovoMetrics";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">

      {/* ── Hero ── */}
      <section className="pt-32 pb-14 px-6">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Got Questions?
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              We Have Answers.
            </span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Everything you need to know about NovoMetrics — from setup to security to support.
          </p>
        </div>
      </section>

      {/* ── FAQ Sections ── */}
      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {faqs.map((section, si) => (
            <div key={si}>
              <h2
                className="text-2xl font-bold text-slate-900 mb-5"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.items.map((item, ii) => (
                  <FAQItem key={ii} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <MessageCircle className="w-10 h-10 text-blue-200 mx-auto mb-4" />
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Still have questions?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            We're happy to walk you through anything. Book a free call or drop us a message.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/#contact"
              className="px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Send a Message
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
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
