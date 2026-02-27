import styles from './HeroImage.module.css';

// ── Data ────────────────────────────────────────────────────────────────────

const keywords = [
  { dot: 'blue', text: 'Simplified Reporting',  textStyle: 'blue' },
  { dot: 'grey', text: 'Anomaly Detection',      textStyle: 'mid'  },
  { dot: 'blue', text: 'Real-Time Data',         textStyle: 'blue' },
  { dot: 'grey', text: 'Key Financial Insights', textStyle: 'mid'  },
  { dot: 'dark', text: 'Smart Forecasting',      textStyle: 'dark' },
  { dot: 'grey', text: 'Budget vs Actual',       textStyle: 'mid'  },
];

const barData = [
  [38, 42], [45, 40], [34, 38], [55, 46], [50, 45], [60, 49],
];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

// ── Sub-components ───────────────────────────────────────────────────────────

function MacDots() {
  return (
    <>
      <span className={`${styles.cardDot} ${styles.dRed}`} />
      <span className={`${styles.cardDot} ${styles.dYellow}`} />
      <span className={`${styles.cardDot} ${styles.dGreen}`} />
    </>
  );
}

function ExcelCard1() {
  return (
    <div className={`${styles.excelCard} ${styles.excel1}`}>
      <div className={styles.cardHeader}>
        <MacDots />
        <span className={styles.cardTitle}>Q3_Revenue_FINAL_v3.xlsx</span>
      </div>
      <table className={styles.excelTable}>
        <thead>
          <tr><th>Region</th><th>Q2</th><th>Q3</th><th>Δ%</th></tr>
        </thead>
        <tbody>
          <tr><td>APAC</td> <td className={styles.num}>4,820</td><td className={styles.num}>5,110</td><td className={styles.green}>+6%</td></tr>
          <tr><td>EMEA</td> <td className={styles.num}>3,200</td><td className={styles.num}>2,980</td><td className={styles.red}>-7%</td></tr>
          <tr><td>NA</td>   <td className={styles.num}>8,440</td><td className={styles.num}>9,120</td><td className={styles.green}>+8%</td></tr>
          <tr><td>LATAM</td><td className={styles.num}>1,230</td><td className={styles.num}>1,190</td><td className={styles.red}>-3%</td></tr>
          <tr><td>MEA</td>  <td className={styles.num}>910</td>  <td className={styles.num}>1,050</td><td className={styles.green}>+15%</td></tr>
          <tr><td>ANZ</td>  <td className={styles.num}>660</td>  <td className={styles.num}>700</td>  <td className={styles.green}>+6%</td></tr>
        </tbody>
      </table>
    </div>
  );
}

function ExcelCard2() {
  return (
    <div className={`${styles.excelCard} ${styles.excel2}`}>
      <div className={styles.cardHeader}>
        <MacDots />
        <span className={styles.cardTitle}>Budget_2024_v7_REAL.xlsx</span>
      </div>
      <table className={styles.excelTable}>
        <thead>
          <tr><th>Category</th><th>Budget</th><th>Actual</th><th>Var</th></tr>
        </thead>
        <tbody>
          <tr><td>Salaries</td> <td className={styles.num}>220K</td><td className={styles.num}>238K</td><td className={styles.red}>-8%</td></tr>
          <tr><td>Marketing</td><td className={styles.num}>80K</td> <td className={styles.num}>74K</td> <td className={styles.green}>+7%</td></tr>
          <tr><td>Ops</td>      <td className={styles.num}>55K</td> <td className={styles.num}>61K</td> <td className={styles.red}>-11%</td></tr>
          <tr><td>R&amp;D</td>  <td className={styles.num}>140K</td><td className={styles.num}>133K</td><td className={styles.green}>+5%</td></tr>
          <tr><td>Infra</td>    <td className={styles.num}>30K</td> <td className={styles.num}>29K</td> <td className={styles.green}>+3%</td></tr>
        </tbody>
      </table>
    </div>
  );
}

function ExcelCard3() {
  return (
    <div className={`${styles.excelCard} ${styles.excel3}`}>
      <div className={styles.cardHeader}>
        <MacDots />
        <span className={styles.cardTitle}>Cashflow_Jan_copy2.xlsx</span>
      </div>
      <table className={styles.excelTable}>
        <thead>
          <tr><th>Month</th><th>Inflow</th><th>Outflow</th></tr>
        </thead>
        <tbody>
          <tr><td>Jan</td><td className={styles.green}>+182K</td><td className={styles.red}>-140K</td></tr>
          <tr><td>Feb</td><td className={styles.green}>+204K</td><td className={styles.red}>-158K</td></tr>
          <tr><td>Mar</td><td className={styles.green}>+196K</td><td className={styles.red}>-171K</td></tr>
          <tr><td>Apr</td><td className={styles.green}>+221K</td><td className={styles.red}>-163K</td></tr>
        </tbody>
      </table>
    </div>
  );
}

function Arrow() {
  const path = 'M6 23 Q55 6 124 23';
  return (
    <svg className={styles.arrowSvg} width="134" height="46" viewBox="0 0 134 46">
      <defs>
        <marker id="arrowhead" markerWidth="9" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 9 3.5, 0 7" fill="#2663ea" />
        </marker>
        <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   style={{ stopColor: '#2663ea', stopOpacity: 0.25 }} />
          <stop offset="100%" style={{ stopColor: '#2663ea', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Main arc */}
      <path d={path} stroke="url(#arrowGrad)" strokeWidth="2.2" fill="none" markerEnd="url(#arrowhead)" />
      {/* Echo arc */}
      <path d="M6 23 Q55 40 124 23" stroke="url(#arrowGrad)" strokeWidth="1.2" fill="none" strokeDasharray="5 4" opacity="0.3" />
      {/* Animated particles */}
      <circle r="2.2" fill="#2663ea" opacity="0.8">
        <animateMotion dur="1.8s" repeatCount="indefinite" path={path} />
      </circle>
      <circle r="1.5" fill="#7aabff" opacity="0.55">
        <animateMotion dur="1.8s" begin="0.6s" repeatCount="indefinite" path={path} />
      </circle>
    </svg>
  );
}

function InsightCard() {
  return (
    <div className={styles.insightCard}>
      <div className={styles.insightLabel}>AI Insight</div>
      <div className={styles.insightTitle}>Revenue Trend</div>
      <div className={styles.insightStat}>
        <span className={styles.insightNum}>+24%</span>
        <span className={styles.insightUnit}>YoY Growth</span>
      </div>
      <div className={styles.insightSub}>▲ Ahead of target by ₹1.2M</div>
      <svg width="100%" height="28" style={{ marginTop: '9px' }}>
        <defs>
          <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#2663ea" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <polyline
          points="0,22 20,18 40,20 60,10 80,14 100,6 120,8 150,2 172,4"
          fill="none" stroke="#2663ea" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round"
        />
        <polyline
          points="0,22 20,18 40,20 60,10 80,14 100,6 120,8 150,2 172,4 172,28 0,28"
          fill="url(#sparkFill)" stroke="none" opacity="0.12"
        />
      </svg>
    </div>
  );
}

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      {/* Header */}
      <div className={styles.dashHeader}>
        <div className={styles.dashTitle}>Financial Overview</div>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <span className={styles.dashBadge}>● Live</span>
          <span style={{ fontSize: '9px', color: '#6a7a98', fontWeight: 600 }}>Q3 2024</span>
        </div>
      </div>

      {/* KPIs */}
      <div className={styles.kpiRow}>
        {[
          { label: 'Revenue',    value: '₹9.1M', change: '▲ 8.4% vs Q2', up: true  },
          { label: 'Expenses',   value: '₹5.8M', change: '▼ 2.1% over',  up: false },
          { label: 'Net Profit', value: '₹3.3M', change: '▲ 22% YoY',    up: true  },
        ].map(({ label, value, change, up }) => (
          <div key={label} className={styles.kpi}>
            <div className={styles.kpiLabel}>{label}</div>
            <div className={styles.kpiValue}>{value}</div>
            <div className={`${styles.kpiChange} ${up ? styles.up : styles.down}`}>{change}</div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className={styles.chartSection}>
        <div className={styles.chartLabel}>Monthly Revenue vs Target</div>
        <div className={styles.bars}>
          {barData.map(([h1, h2], i) => (
            <div key={i} className={styles.barGroup}>
              <div className={`${styles.bar} ${styles.primary}`}   style={{ height: h1 }} />
              <div className={`${styles.bar} ${styles.secondary}`} style={{ height: h2 }} />
            </div>
          ))}
          {/* Last bar (future — faded) */}
          <div className={styles.barGroup}>
            <div className={`${styles.bar} ${styles.primary}`}   style={{ height: 56, opacity: 0.35 }} />
            <div className={`${styles.bar} ${styles.secondary}`} style={{ height: 52, opacity: 0.35 }} />
          </div>
        </div>
        <div className={styles.barLabels}>
          {months.map(m => <div key={m} className={styles.barLabelItem}>{m}</div>)}
        </div>
      </div>

      {/* Sparklines */}
      <div className={styles.sparklineRow}>
        {[
          { name: 'APAC',     points: '0,18 15,14 30,16 45,8 60,10 75,5 90,6',    color: '#2663ea' },
          { name: 'EMEA',     points: '0,6 15,10 30,8 45,14 60,12 75,16 90,18',   color: '#e53030' },
          { name: 'Americas', points: '0,14 15,10 30,12 45,6 60,8 75,4 90,2',     color: '#0fa858' },
        ].map(({ name, points, color }) => (
          <div key={name} className={styles.sparkItem}>
            <div className={styles.sparkName}>{name}</div>
            <svg width="100%" height="24">
              <polyline points={points} fill="none" stroke={color} strokeWidth="1.5" opacity="0.9" />
            </svg>
          </div>
        ))}
      </div>

      {/* Donut + Legend */}
      <div className={styles.bottomRow}>
        <div className={styles.donutWrap}>
          <svg width="50" height="50" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="18" fill="none" stroke="#c8d0e0" strokeWidth="8" />
            <circle cx="25" cy="25" r="18" fill="none" stroke="#2663ea" strokeWidth="8"
              strokeDasharray="67 46" strokeDashoffset="0" transform="rotate(-90 25 25)" />
            <circle cx="25" cy="25" r="18" fill="none" stroke="#5a7aaa" strokeWidth="8"
              strokeDasharray="30 83" strokeDashoffset="-67" transform="rotate(-90 25 25)" />
            <circle cx="25" cy="25" r="18" fill="none" stroke="#9ab0cc" strokeWidth="8"
              strokeDasharray="16 97" strokeDashoffset="-97" transform="rotate(-90 25 25)" />
            <text x="25" y="28" textAnchor="middle" fontSize="7" fill="#2663ea"
              fontFamily="Syne,sans-serif" fontWeight="700">60%</text>
          </svg>
        </div>
        <div className={styles.legend}>
          {[
            { color: '#2663ea', label: 'Product Revenue', pct: '60%' },
            { color: '#5a7aaa', label: 'Services',        pct: '27%' },
            { color: '#9ab0cc', label: 'Licensing',       pct: '13%' },
          ].map(({ color, label, pct }) => (
            <div key={label} className={styles.legendItem}>
              <div className={styles.legendDot} style={{ background: color }} />
              <span className={styles.legendText}>{label}</span>
              <span className={styles.legendPct}>{pct}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────

export default function HeroImage() {
  return (
    <div className={styles.hero}>
      <div className={styles.glow} />

      {/* Keyword column */}
      <div className={styles.keywordColumn}>
        {keywords.map(({ dot, text, textStyle }, i) => (
          <div
            key={text}
            className={styles.kwItem}
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            <div className={`${styles.kwDot} ${styles[`kwDot${dot.charAt(0).toUpperCase() + dot.slice(1)}`]}`} />
            <span className={`${styles.kwText} ${styles[`kwText${textStyle.charAt(0).toUpperCase() + textStyle.slice(1)}`]}`}>
              {text}
            </span>
          </div>
        ))}
      </div>

      {/* 3D Scene */}
      <div className={styles.scene}>
        <ExcelCard1 />
        <ExcelCard2 />
        <ExcelCard3 />
        <Arrow />
        <InsightCard />
        <Dashboard />
      </div>
    </div>
  );
}