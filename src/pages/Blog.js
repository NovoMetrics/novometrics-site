import { useState } from "react";
import { ArrowLeft, Clock, Tag } from "lucide-react";

// Article metadata lives here — just add a new entry for each new article
// The "file" field must match the filename in your public/articles/ folder
const articles = [
  {
    id: 1,
    title: "From Excel to Dashboards: Why MSMEs Need Financial Automation",
    date: "February 10, 2026",
    readTime: "5 min read",
    tag: "Financial Automation",
    summary: "Most small businesses still run their finances on Excel. Here's why that's holding them back — and what the alternative looks like.",
    file: "excel-to-dashboards.txt"
  },
  {
    id: 2,
    title: "5 KPIs Every Startup Founder Should Track in Real-Time",
    date: "January 28, 2026",
    readTime: "4 min read",
    tag: "Startup Finance",
    summary: "Revenue is not a KPI. Here are the five numbers that actually tell you whether your startup is healthy.",
    file: "5-startup-kpis.txt"
  },
  {
    id: 3,
    title: "What is MIS Reporting and Why Does It Matter for Growing Businesses?",
    date: "January 15, 2026",
    readTime: "6 min read",
    tag: "MIS & Reporting",
    summary: "MIS stands for Management Information System. But in practice, it's simply the financial data your leadership team needs to make decisions.",
    file: "what-is-mis-reporting.txt"
  }
];

export default function Blog() {
  const [selected, setSelected] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const openArticle = async (article) => {
    setLoading(true);
    setSelected(article);

    try {
      const response = await fetch(`/articles/${article.file}`);
      const text = await response.text();
      setContent(text);
    } catch (error) {
      setContent("Sorry, this article could not be loaded.");
    }

    setLoading(false);
  };

  const closeArticle = () => {
    setSelected(null);
    setContent("");
  };

  // Renders plain text — empty lines become paragraph breaks
  const renderContent = (text) => {
    return text
      .split(/\n\n+/)
      .map((para, i) => (
        <p key={i} className="text-slate-600 leading-relaxed mb-6">
          {para.trim()}
        </p>
      ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 pt-24 px-6 pb-20">
      <div className="max-w-3xl mx-auto">

        {/* Article List */}
        {!selected && (
          <>
            <div className="mb-12">
              <h1
                className="text-5xl font-bold text-slate-900 mb-4"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Blog
              </h1>
              <p className="text-lg text-slate-500">
                Insights on financial automation, reporting, and business intelligence.
              </p>
            </div>

            <div className="space-y-4">
              {articles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => openArticle(article)}
                  className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-3 mb-3 text-sm text-slate-400">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-medium text-xs">
                      {article.tag}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {article.readTime}
                    </span>
                    <span>{article.date}</span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-slate-500 leading-relaxed">{article.summary}</p>

                  <div className="mt-4 text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read article <span>→</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Article Detail View */}
        {selected && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12">

            <button
              onClick={closeArticle}
              className="flex items-center gap-2 text-blue-600 font-medium mb-8 hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </button>

            <div className="flex flex-wrap items-center gap-3 mb-6 text-sm text-slate-400">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-medium text-xs flex items-center gap-1">
                <Tag className="w-3 h-3" /> {selected.tag}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> {selected.readTime}
              </span>
              <span>{selected.date}</span>
            </div>

            <h1
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {selected.title}
            </h1>

            {loading ? (
              <p className="text-slate-400">Loading article...</p>
            ) : (
              <div>{renderContent(content)}</div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}