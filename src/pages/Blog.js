import { useState } from "react";
import { Clock, ChevronDown } from "lucide-react";
import ReactMarkdown from "react-markdown";

// ─────────────────────────────────────────────
// ARTICLE METADATA — only 2 written articles
// ─────────────────────────────────────────────
const articles = [
  {
    id: 1,
    title: "From Excel to Dashboards: Why MSMEs Need Financial Automation",
    date: "February 10, 2026",
    readTime: "5 min read",
    tag: "Financial Automation",
    summary: "Most small businesses still run their finances on Excel. Here's why that's holding them back — and what the alternative looks like.",
    file: "excel-to-dashboards.md",
    visuals: "excel"
  },
  {
    id: 2,
    title: "What is MIS Reporting and Why Does It Matter for Growing Businesses?",
    date: "February 02, 2026",
    readTime: "6 min read",
    tag: "MIS & Reporting",
    summary: "MIS stands for Management Information System. But in practice, it's simply the financial data your leadership team needs to make decisions.",
    file: "what-is-mis-reporting.md",
    visuals: "mis"
  }
];

// ─────────────────────────────────────────────
// PROSE + ANIMATION CSS
// ─────────────────────────────────────────────
const proseCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  .finsight-prose p { font-size:1rem; line-height:1.82; color:#1e2540; margin-bottom:1.4rem; font-weight:300; }
  .finsight-prose h2 { font-family:'Playfair Display',serif; font-size:1.45rem; font-weight:700; color:#0a0f1e; margin:2.5rem 0 1rem; padding-bottom:0.5rem; border-bottom:1px solid #cdd3e8; }
  .finsight-prose h3 { font-family:'Playfair Display',serif; font-size:1.1rem; font-style:italic; font-weight:400; color:#0a0f1e; margin:1.8rem 0 0.6rem; }
  .finsight-prose strong { color:#0a0f1e; font-weight:500; }
  .finsight-prose em { font-style:italic; color:#2a3560; }
  .finsight-prose blockquote { border-left:3px solid #2663ea; background:#e8eeff; padding:1rem 1.4rem; margin:2rem 0; border-radius:0 2px 2px 0; }
  .finsight-prose blockquote p { font-family:'Playfair Display',serif; font-size:1.05rem; font-style:italic; color:#0a0f1e; margin:0; line-height:1.5; }
  .finsight-prose ul, .finsight-prose ol { padding-left:1.4rem; margin-bottom:1.4rem; }
  .finsight-prose li { font-size:0.97rem; line-height:1.75; color:#1e2540; margin-bottom:0.4rem; font-weight:300; }
  .finsight-prose hr { border:none; border-top:1px solid #cdd3e8; margin:2.5rem 0; }
  .finsight-prose table { width:100%; border-collapse:collapse; font-size:0.85rem; margin:1.8rem 0; }
  .finsight-prose th { background:#0a0f1e; color:#fff; padding:0.7rem 1rem; text-align:left; font-size:0.63rem; letter-spacing:0.15em; text-transform:uppercase; font-weight:500; }
  .finsight-prose td { padding:0.75rem 1rem; border-bottom:1px solid #cdd3e8; color:#1e2540; vertical-align:top; }
  .finsight-prose tr:nth-child(even) td { background:#e8eeff; }
  .finsight-prose a { color:#2663ea; text-decoration:underline; text-underline-offset:3px; }
  .finsight-prose code { background:#eaedf6; padding:0.1rem 0.4rem; font-size:0.85em; border-radius:2px; color:#2663ea; }

  .article-panel { display:grid; grid-template-rows:0fr; transition:grid-template-rows 0.45s cubic-bezier(0.4,0,0.2,1); }
  .article-panel.open { grid-template-rows:1fr; }
  .article-panel-inner { overflow:hidden; }
  .chevron { transition:transform 0.35s cubic-bezier(0.4,0,0.2,1); flex-shrink:0; }
  .chevron.open { transform:rotate(180deg); }
  .blog-card { transition:background 0.18s; }
  .blog-card:hover { background:#f4f6fb !important; }
  .blog-card.active { background:#f0f4ff !important; }

  @keyframes barGrow { from { width: 0% } }
  .bar-fill { animation: barGrow 1s ease forwards; }
`;

if (!document.getElementById("finsight-prose-styles")) {
  const el = document.createElement("style");
  el.id = "finsight-prose-styles";
  el.textContent = proseCSS;
  document.head.appendChild(el);
}

// ─────────────────────────────────────────────
// SHARED VISUAL STYLES
// ─────────────────────────────────────────────
const V = {
  wrap: { margin: "2rem 0", borderRadius: "2px", overflow: "hidden", boxShadow: "0 4px 20px rgba(38,99,234,0.07)" },
  caption: { fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a94aa", fontWeight: 500, marginTop: "0.6rem", textAlign: "center" },
  label: { fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500, marginBottom: "1.4rem" },
};

// ─────────────────────────────────────────────
// VISUAL: BAR CHART — time comparison
// ─────────────────────────────────────────────
function BarChartVisual() {
  const rows = [
    { task: "Data Collection",   manual: 80, manualLabel: "8 hrs", auto: 10, autoLabel: "1 hr" },
    { task: "Reconciliation",    manual: 70, manualLabel: "7 hrs", auto: 20, autoLabel: "2 hrs" },
    { task: "Report Generation", manual: 60, manualLabel: "6 hrs", auto: 5,  autoLabel: "30 min" },
  ];
  return (
    <div>
      <div style={V.wrap}>
        <div style={{ background: "#fff", border: "1px solid #cdd3e8", padding: "2rem" }}>
          <div style={{ ...V.label, color: "#8a94aa" }}>Average Hours Spent per Month-End Task</div>
          {rows.map((r) => (
            <div key={r.task} style={{ marginBottom: "1.2rem" }}>
              <div style={{ fontSize: "0.78rem", fontWeight: 500, color: "#0a0f1e", marginBottom: "0.4rem" }}>{r.task}</div>
              {/* Manual */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.25rem" }}>
                <span style={{ fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a94aa", width: "64px", textAlign: "right", flexShrink: 0 }}>Manual</span>
                <div style={{ flex: 1, height: "22px", background: "#eaedf6", borderRadius: "2px", overflow: "hidden" }}>
                  <div className="bar-fill" style={{ width: `${r.manual}%`, height: "100%", background: "#8fa3c8", display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: "0.5rem", fontSize: "0.68rem", fontWeight: 500, color: "white" }}>{r.manualLabel}</div>
                </div>
              </div>
              {/* Auto */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                <span style={{ fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#2663ea", width: "64px", textAlign: "right", flexShrink: 0 }}>Auto</span>
                <div style={{ flex: 1, height: "22px", background: "#eaedf6", borderRadius: "2px", overflow: "hidden" }}>
                  <div className="bar-fill" style={{ width: `${r.auto}%`, height: "100%", background: "#2663ea", display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: "0.5rem", fontSize: "0.68rem", fontWeight: 500, color: "white" }}>{r.autoLabel}</div>
                </div>
              </div>
            </div>
          ))}
          {/* Legend */}
          <div style={{ display: "flex", gap: "1.5rem", marginTop: "1.2rem", paddingTop: "1rem", borderTop: "1px solid #eaedf6" }}>
            {[["#8fa3c8","Manual (Excel)"],["#2663ea","Automated"]].map(([c,l]) => (
              <div key={l} style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a94aa", fontWeight: 500 }}>
                <div style={{ width: 10, height: 10, borderRadius: "2px", background: c }} />{l}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={V.caption}>Estimated time savings across common month-end finance tasks</div>
    </div>
  );
}

// ─────────────────────────────────────────────
// VISUAL: STAT BOXES
// ─────────────────────────────────────────────
function StatBoxes({ stats }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "#cdd3e8", border: "1px solid #cdd3e8", margin: "2rem 0" }}>
      {stats.map((s) => (
        <div key={s.number} style={{ background: "#fff", padding: "1.3rem", borderTop: "3px solid #2663ea" }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.9rem", fontWeight: 900, color: "#2663ea", lineHeight: 1, marginBottom: "0.35rem" }}>{s.number}</div>
          <div style={{ fontSize: "0.76rem", lineHeight: 1.5, color: "#8a94aa", fontWeight: 400 }}>{s.desc}</div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// VISUAL: COMPARE PANEL
// ─────────────────────────────────────────────
function CompareVisual() {
  const bad  = ["Export data from 4 different systems","Paste into master spreadsheet","Fix broken formulas manually","Email reports as attachments","Wait 3–5 days for leadership review","Repeat from scratch next month"];
  const good = ["Systems sync automatically overnight","Reports refresh with live data","Anomalies flagged by the system","Leaders access dashboards directly","Decisions made on same-day data","System learns and improves each cycle"];
  return (
    <div>
      <div style={V.wrap}>
        <div style={{ background: "#0a0f1e", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
          {[["✕  Excel-Based Workflow", bad, "#e05a6a"], ["✓  Automated Dashboard", good, "#3acc8a"]].map(([heading, items, col]) => (
            <div key={heading} style={{ padding: "1.6rem", background: heading.startsWith("✕") ? "#0f1628" : "#091a14" }}>
              <div style={{ ...V.label, color: col }}>{heading}</div>
              {items.map((item) => (
                <div key={item} style={{ display: "flex", gap: "0.5rem", fontSize: "0.82rem", lineHeight: 1.5, marginBottom: "0.65rem", color: "#9aaac8" }}>
                  <span style={{ flexShrink: 0 }}>→</span>{item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div style={V.caption}>The workflow shift from manual Excel to automated reporting</div>
    </div>
  );
}

// ─────────────────────────────────────────────
// VISUAL: FLOW DIAGRAM
// ─────────────────────────────────────────────
function FlowDiagram({ steps }) {
  return (
    <div>
      <div style={V.wrap}>
        <div style={{ background: "#0a0f1e", padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ ...V.label, color: "#4a5a80", marginBottom: "1.8rem" }}>Automated Financial Data Pipeline</div>
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "center", gap: 0 }}>
            {steps.map((step, i) => (
              <div key={step.label} style={{ display: "flex", alignItems: "center" }}>
                <div style={{ background: step.accent ? "#0d1e4a" : "#141c30", border: `1px solid ${step.accent ? "#2663ea" : "#2a3554"}`, padding: "0.8rem 1.1rem", textAlign: "center", minWidth: "120px" }}>
                  <div style={{ fontSize: "0.58rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#4a5a80", fontWeight: 500, marginBottom: "0.25rem" }}>{step.label}</div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.88rem", color: step.accent ? "#6090ff" : "#c8d3ee" }}>{step.value}</div>
                </div>
                {i < steps.length - 1 && <span style={{ color: "#2a3554", fontSize: "1.1rem", padding: "0 0.35rem" }}>→</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={V.caption}>From raw data to decision-ready reports — automatically</div>
    </div>
  );
}

// ─────────────────────────────────────────────
// VISUAL: MIS DEFINITION BOX
// ─────────────────────────────────────────────
function MisDefinition() {
  const letters = [
    { l: "M", word: "Management", meaning: "Designed for decision-makers, not just accountants" },
    { l: "I", word: "Information", meaning: "Processed, structured data — not raw numbers" },
    { l: "S", word: "System",      meaning: "A repeatable process, not a one-time report" },
  ];
  return (
    <div style={V.wrap}>
      <div style={{ background: "#0a0f1e", padding: "2.2rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "-0.5rem", top: "50%", transform: "translateY(-50%)", fontFamily: "'Playfair Display',serif", fontSize: "7rem", fontWeight: 900, color: "rgba(255,255,255,0.03)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>MIS</div>
        <div style={{ ...V.label, color: "#6090ff" }}>Breaking It Down</div>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", fontStyle: "italic", lineHeight: 1.45, color: "#c8d3ee", marginBottom: "1.6rem" }}>
          "The right financial data, in the right format, for the right decision-maker — at the right time."
        </div>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {letters.map((item) => (
            <div key={item.l} style={{ flex: 1, minWidth: "110px" }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.8rem", fontWeight: 900, color: "#2663ea", lineHeight: 1 }}>{item.l}</div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#4a5a80", fontWeight: 500, marginTop: "0.2rem" }}>{item.word}</div>
              <div style={{ fontSize: "0.78rem", color: "#6a7a98", marginTop: "0.3rem", lineHeight: 1.5 }}>{item.meaning}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// VISUAL: COMPONENTS GRID
// ─────────────────────────────────────────────
function ComponentsGrid({ items }) {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#cdd3e8", border: "1px solid #cdd3e8", margin: "2rem 0" }}>
        {items.map((item) => (
          <div key={item.name} style={{ background: "#fff", padding: "1.4rem", transition: "background 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "#e8eeff"}
            onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
            <div style={{ fontSize: "1.3rem", marginBottom: "0.6rem" }}>{item.icon}</div>
            <div style={{ fontWeight: 500, fontSize: "0.9rem", marginBottom: "0.3rem", color: "#0a0f1e" }}>{item.name}</div>
            <div style={{ fontSize: "0.79rem", color: "#8a94aa", lineHeight: 1.55 }}>{item.desc}</div>
          </div>
        ))}
      </div>
      <div style={V.caption}>The four pillars of a complete MIS reporting system</div>
    </div>
  );
}

// ─────────────────────────────────────────────
// VISUAL: PYRAMID
// ─────────────────────────────────────────────
function Pyramid() {
  const tiers = [
    { label: "Board & Investors",           w: 180, bg: "#2663ea" },
    { label: "C-Suite & Leadership",         w: 260, bg: "#3d76ee" },
    { label: "Department Heads & Managers",  w: 340, bg: "#6494f2" },
    { label: "Finance & Operations Teams",   w: 420, bg: "#8fb3f5" },
  ];
  return (
    <div>
      <div style={V.wrap}>
        <div style={{ background: "#f4f6fb", border: "1px solid #cdd3e8", padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ ...V.label, color: "#8a94aa", textAlign: "center" }}>The MIS Information Pyramid</div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }}>
            {tiers.map((t, i) => (
              <div key={t.label} style={{ width: `${t.w}px`, height: "46px", background: t.bg, display: "flex", alignItems: "center", justifyContent: "center", clipPath: i === 0 ? "polygon(10% 0%,90% 0%,100% 100%,0% 100%)" : i === 1 ? "polygon(7% 0%,93% 0%,100% 100%,0% 100%)" : i === 2 ? "polygon(5% 0%,95% 0%,100% 100%,0% 100%)" : "polygon(3% 0%,97% 0%,100% 100%,0% 100%)", transition: "transform 0.2s", cursor: "default" }}
                onMouseEnter={e => e.currentTarget.style.transform = "scaleX(1.02)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scaleX(1)"}>
                <span style={{ fontSize: "0.72rem", fontWeight: 500, color: "white", textAlign: "center", padding: "0 0.8rem", lineHeight: 1.2 }}>{t.label}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", width: "420px", maxWidth: "100%", marginTop: "0.8rem" }}>
            {["High-Level Summary", "Granular Detail"].map(l => (
              <span key={l} style={{ fontSize: "0.63rem", color: "#8a94aa", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500 }}>{l}</span>
            ))}
          </div>
        </div>
      </div>
      <div style={V.caption}>Good MIS serves every layer of the organisation, not just finance</div>
    </div>
  );
}

// ─────────────────────────────────────────────
// VISUAL: TIMELINE
// ─────────────────────────────────────────────
function Timeline({ steps }) {
  return (
    <div style={{ margin: "2rem 0", position: "relative", paddingLeft: "2.2rem" }}>
      <div style={{ position: "absolute", left: "9px", top: "0.4rem", bottom: 0, width: "2px", background: "#cdd3e8" }} />
      {steps.map((step, i) => (
        <div key={step.title} style={{ position: "relative", marginBottom: "1.8rem" }}>
          <div style={{ position: "absolute", left: "-2.2rem", top: "0.2rem", width: "20px", height: "20px", borderRadius: "50%", background: "#2663ea", border: "3px solid #f4f6fb", boxShadow: "0 0 0 1px #2663ea" }} />
          <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500, color: "#2663ea", marginBottom: "0.2rem" }}>Step 0{i + 1}</div>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", fontWeight: 700, marginBottom: "0.3rem", color: "#0a0f1e" }}>{step.title}</div>
          <div style={{ fontSize: "0.84rem", color: "#8a94aa", lineHeight: 1.6 }}>{step.desc}</div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// ARTICLE 1 CONTENT — Excel to Dashboards
// ─────────────────────────────────────────────
function ExcelArticle({ mdContent }) {
  return (
    <div className="finsight-prose">
      <ReactMarkdown>{`
Most small businesses still run their finances on Excel. It works — until it doesn't. Here's an honest look at why the spreadsheet era is ending, and what modern financial automation actually looks like for MSMEs.

---

Walk into any small or mid-sized business and you'll likely find the same scene: a finance person hunched over a laptop, tabs multiplying, formulas breaking, and someone from ops waiting for "the numbers" that are always two days away.

This is the Excel reality. And for years, it was fine. Excel is flexible, familiar, and essentially free. But as businesses grow — more transactions, more people, more complexity — the spreadsheet starts to buckle. Not dramatically. Slowly. In the form of hours lost, errors buried, and decisions made on stale data.

## The Hidden Cost of "Good Enough"

The problem with Excel isn't that it's bad. It's that it's manual at its core. Every number has to be entered, every formula maintained, and every report assembled by a human — every single month. For a ₹2–5 crore business, this typically means your finance person spends more time compiling data than analysing it.
`}</ReactMarkdown>

      <BarChartVisual />

      <ReactMarkdown>{`
Finance teams at small businesses routinely spend 20–30 hours a month just collecting, cleaning, and formatting data — before any actual thinking happens. At a conservative ₹500/hr opportunity cost, that's ₹10,000–₹15,000 of productive time lost every single month.
`}</ReactMarkdown>

      <StatBoxes stats={[
        { number: "88%", desc: "of spreadsheets contain at least one material error (University of Hawaii)" },
        { number: "40%", desc: "of finance team time spent on manual data gathering and formatting" },
        { number: "3–5 days", desc: "average delay from month-end to leadership having usable data" },
      ]} />

      <ReactMarkdown>{`
## What Automation Actually Changes

Financial automation isn't a magic button. It's a set of connected systems that replace the manual steps in your reporting cycle. At its core, it means your accounting software, bank feeds, and sales tools talk to each other — and reports get built automatically from live data.
`}</ReactMarkdown>

      <CompareVisual />

      <ReactMarkdown>{`
## How Data Flows in an Automated System

The most useful mental model is the pipeline. Data enters at one end and a decision-ready report comes out the other — with no human touching it in between.
`}</ReactMarkdown>

      <FlowDiagram steps={[
        { label: "Sources",     value: "ERP / Bank / CRM",       accent: false },
        { label: "Integration", value: "Auto Sync & Validate",    accent: false },
        { label: "Processing",  value: "Reconcile & Categorise",  accent: false },
        { label: "Output",      value: "Live Dashboard",          accent: true  },
      ]} />

      <ReactMarkdown>{`
> "The goal isn't to remove your finance team. It's to stop them spending 80% of their time moving data around and give them the other 80% back for thinking."

## Where to Start

The biggest mistake MSMEs make when moving away from Excel is trying to do it all at once. Start with the highest-pain report — usually your monthly P&L or cash position — and automate just that. Once the team trusts the output, expand from there.

Tools like Zoho Books, QuickBooks Online, or Tally Prime have built-in reporting automation that connects directly to your bank. For more sophisticated dashboards, Looker Studio or Power BI can sit on top of your accounting data — often for under ₹2,000/month.

The transition doesn't need to be expensive or all-at-once. It just needs to start. Because every month you spend assembling reports manually is a month your competitors are spending reading theirs.
`}</ReactMarkdown>
    </div>
  );
}

// ─────────────────────────────────────────────
// ARTICLE 2 CONTENT — MIS Reporting
// ─────────────────────────────────────────────
function MisArticle({ mdContent }) {
  return (
    <div className="finsight-prose">
      <ReactMarkdown>{`
MIS stands for Management Information System. But in practice, it's simply the financial data your leadership team needs to make decisions — organised, timely, and in one place. Here's why it matters more than most businesses realise.

---

Every business produces data. Revenue flows in, costs flow out, payroll runs, inventory moves. The question isn't whether you have financial information — it's whether that information is reaching the people who need it, in a form they can actually use, when it's still relevant.

That's the problem MIS reporting solves. And it's a problem that becomes more acute the faster a business grows. A ₹50 lakh business can get by with gut feeling and quarterly reviews. A ₹5 crore business cannot.
`}</ReactMarkdown>

      <MisDefinition />

      <ReactMarkdown>{`
## What MIS Reporting Actually Includes

MIS isn't a single report. It's a collection of reports and data views that give leadership a complete picture of business performance. For most growing businesses, this covers four main areas:
`}</ReactMarkdown>

      <ComponentsGrid items={[
        { icon: "📊", name: "Financial Performance",  desc: "P&L statements, gross margins, EBITDA, budget vs actual — the numbers that tell you whether the business is profitable and by how much." },
        { icon: "💵", name: "Cash Flow & Liquidity",  desc: "Cash position, receivables aging, payables due, and runway — critical for knowing whether you can meet obligations next month." },
        { icon: "📈", name: "Sales & Revenue",         desc: "Revenue by product, channel, or geography. Pipeline conversion rates. Month-over-month growth. The commercial engine of the business." },
        { icon: "⚙️", name: "Operational Metrics",    desc: "Headcount costs, utilisation rates, fulfilment times, customer acquisition cost — the inputs that drive your financial outputs." },
      ]} />

      <ReactMarkdown>{`
## Who Needs What — The Information Pyramid

One of the most overlooked aspects of MIS design is that different people in a business need different levels of detail. A board member needs a one-page summary. An operations manager needs daily unit economics. A CFO needs everything in between.
`}</ReactMarkdown>

      <Pyramid />

      <ReactMarkdown>{`
A well-designed MIS creates different "views" of the same underlying data for each layer. The raw transactions sit in your accounting system. Operational summaries go to department heads. The KPI dashboard goes to the CEO. The board pack gets a one-pager. Same data, different lenses.

> "Most business owners make decisions on gut feeling not because they want to — but because the right data isn't in front of them when they need it. That's a systems problem, not a leadership problem."

## How a Good MIS System Gets Built

Building an MIS doesn't require a large team or expensive software. It requires three things: clarity on what decisions need to be made, agreement on which numbers feed those decisions, and a consistent cadence for producing and reviewing the reports.
`}</ReactMarkdown>

      <Timeline steps={[
        { title: "Define Your Decision Landscape",  desc: "List the 5–10 decisions your leadership team makes every month. Hiring? Pricing? Inventory? Each decision needs a data input — identify what those are." },
        { title: "Map Data Sources",                desc: "Where does each number live? Accounting software, CRM, bank statements, ops tools? Knowing this tells you what systems need to be connected." },
        { title: "Design the Reports",              desc: "Build report templates for each audience — board pack, management dashboard, department view. Keep each one focused on decisions, not data dumps." },
        { title: "Automate the Pipeline",           desc: "Use tools like Zoho Analytics, Tally, QuickBooks, or Power BI to pull and refresh data automatically. Many start for under ₹1,500/month." },
        { title: "Review and Iterate",              desc: "Schedule a monthly review of the MIS itself — not just the numbers. A great MIS evolves with the business." },
      ]} />

      <ReactMarkdown>{`
## The Real ROI of MIS Reporting

The value of MIS isn't measured in reports produced — it's measured in decisions made faster, mistakes caught earlier, and opportunities acted on before they close. When a business can answer "how are we doing?" in 30 seconds rather than 3 days, it operates at a different speed entirely.

For growing businesses crossing the ₹1 crore, ₹5 crore, or ₹10 crore revenue mark — where the margin for error is thin and the pace of change is high — MIS reporting isn't a finance luxury. It's the operating system of smart leadership.

Start small — one dashboard, one cadence, one clear owner. The returns compound quickly once leadership gets used to having the numbers they need, when they need them.
`}</ReactMarkdown>
    </div>
  );
}

// ─────────────────────────────────────────────
// ARTICLE CARD — accordion wrapper
// ─────────────────────────────────────────────
function ArticleCard({ article }) {
  const [open, setOpen] = useState(false);

  const ArticleContent = article.visuals === "excel" ? ExcelArticle : MisArticle;

  return (
    <div
      className={`blog-card${open ? " active" : ""}`}
      style={{
        background: "#ffffff",
        borderLeft: open ? "3px solid #2663ea" : "3px solid transparent",
        transition: "border-left 0.2s",
      }}
    >
      {/* Header */}
      <div
        onClick={() => setOpen(!open)}
        style={{ padding: "1.8rem 2rem", cursor: "pointer", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.7rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500, color: "#2663ea", background: "#e8eeff", padding: "0.25rem 0.65rem", borderRadius: "1px" }}>
              {article.tag}
            </span>
            <span style={{ fontSize: "0.72rem", color: "#8a94aa", display: "flex", alignItems: "center", gap: "0.3rem" }}>
              <Clock size={11} /> {article.readTime}
            </span>
            <span style={{ color: "#cdd3e8" }}>·</span>
            <span style={{ fontSize: "0.72rem", color: "#8a94aa" }}>{article.date}</span>
          </div>

          <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: open ? "#2663ea" : "#0a0f1e", marginBottom: "0.5rem", lineHeight: 1.3, fontFamily: "'Playfair Display', serif", transition: "color 0.2s" }}>
            {article.title}
          </h2>

          {!open && (
            <p style={{ fontSize: "0.9rem", color: "#5a6480", lineHeight: 1.65, fontWeight: 300, margin: 0 }}>
              {article.summary}
            </p>
          )}
        </div>

        <ChevronDown size={18} color="#2663ea" className={`chevron${open ? " open" : ""}`} />
      </div>

      {/* Expandable panel */}
      <div className={`article-panel${open ? " open" : ""}`}>
        <div className="article-panel-inner">
          <div style={{ padding: "0 2rem 2.5rem", borderTop: "1px solid #cdd3e8", paddingTop: "2rem" }}>
            <ArticleContent />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// BLOG PAGE
// ─────────────────────────────────────────────
export default function Blog() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f4f6fb 0%, #eaedf6 50%, #f4f6fb 100%)",
      paddingTop: "6rem", paddingBottom: "5rem",
      paddingLeft: "1.5rem", paddingRight: "1.5rem",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 3rem)", fontWeight: 900,
            color: "#2663ea",                          // ← blue title
            marginBottom: "0.6rem",
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "-0.02em",
          }}>
            Blog
          </h1>
          <p style={{ fontSize: "1rem", color: "#5a6480", fontWeight: 300 }}>
            Insights on financial automation, reporting, and business intelligence.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#cdd3e8", border: "1px solid #cdd3e8", borderRadius: "2px", overflow: "hidden" }}>
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

      </div>
    </div>
  );
}