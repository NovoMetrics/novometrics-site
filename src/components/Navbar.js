import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 backdrop-blur-xl bg-white/80 border-b border-slate-200/50 shadow-sm">
        <div className="flex justify-between items-center h-full">

          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3"
          >
            <div className="w-40 h-40 flex items-center justify-center">
              <img src="/images/logo.svg" alt="NovoMetrics Logo" className="w-full h-full object-contain" />
            </div>
          </Link>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            {/* About → separate page */}
            <Link
              to="/about"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              About
            </Link>

            {/* Solutions → anchor on Home */}
            {isHome ? (
              <a href="#solutions" className="text-slate-600 hover:text-blue-600 transition-colors">Solutions</a>
            ) : (
              <Link to="/#solutions" className="text-slate-600 hover:text-blue-600 transition-colors">Solutions</Link>
            )}

            {/* Technology → anchor on Home */}
            {isHome ? (
              <a href="#tech" className="text-slate-600 hover:text-blue-600 transition-colors">Technology</a>
            ) : (
              <Link to="/#tech" className="text-slate-600 hover:text-blue-600 transition-colors">Technology</Link>
            )}

            {/* Blog → separate page */}
            <Link
              to="/blog"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Blog
            </Link>

            {/* Contact Us → anchor on Home */}
            {isHome ? (
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact Us</a>
            ) : (
              <Link to="/#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact Us</Link>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}