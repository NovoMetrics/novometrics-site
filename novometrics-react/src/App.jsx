import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="font-sans text-gray-900">

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white">
        <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} className="text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">NovoMetrics</h1>
          <p className="text-xl text-gray-600 mb-6">
            Financial Reporting Automation for Growing Businesses
          </p>
          <p className="text-gray-500 mb-10">
            From fragmented Excel files → centralized financial intelligence.
          </p>

          <button className="px-8 py-4 rounded-xl bg-black text-white hover:scale-105 transition">
            Book Demo
          </button>
        </motion.div>
      </section>

      <section className="py-24 px-8 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {[
          ["Real-time Visibility","Founder-ready KPI dashboards"],
          ["Automation","Minimal manual reporting"],
          ["Finance + Tech","Custom workflows"]
        ].map((x,i)=>(
          <motion.div key={i} whileHover={{y:-6}} className="p-8 rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{x[0]}</h3>
            <p className="text-gray-600">{x[1]}</p>
          </motion.div>
        ))}
      </section>

      <section className="bg-slate-50 py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">Why NovoMetrics?</h2>
          <p className="text-gray-600 leading-relaxed">
            Lightweight financial automation systems without enterprise complexity.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">What We Deliver</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Automated P&L & KPI dashboards</li>
            <li>• Centralized pipelines</li>
            <li>• Founder reporting</li>
            <li>• Custom workflows</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl border shadow-sm">
          <h3 className="font-semibold mb-4">Target Customers</h3>
          <p className="text-gray-600">
            Startups • Healthcare • CA Firms • MSMEs
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-24 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Architecture</h2>
        <p className="text-gray-600">
          Client Data → ETL → MySQL → Dashboards
        </p>
      </section>

      <section className="py-32 text-center bg-black text-white">
        <h2 className="text-4xl font-bold mb-6">Ready to automate finance?</h2>
        <button className="px-8 py-4 rounded-xl bg-white text-black hover:scale-105 transition">
          Request Demo
        </button>
      </section>

      <footer className="py-10 text-center text-gray-500">
        © 2026 NovoMetrics
      </footer>

    </div>
  );
}