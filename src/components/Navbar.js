import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 backdrop-blur-xl bg-white/80 border-b border-slate-200/50 shadow-sm">
        <div className="flex justify-between items-center h-full">

          {/* Logo */}
          <Link
            to="/"
            onClick={scrollTop}
            className="flex items-center gap-3"
          >
            <div className="w-40 h-40 flex items-center justify-center">
              <img src="/images/logo.svg" alt="NovoMetrics Logo" className="w-full h-full object-contain" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link
              to="/about"
              onClick={scrollTop}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              About
            </Link>

            {isHome ? (
              <a href="#solutions" className="text-slate-600 hover:text-blue-600 transition-colors">Solutions</a>
            ) : (
              <Link to="/#solutions" className="text-slate-600 hover:text-blue-600 transition-colors">Solutions</Link>
            )}

            {isHome ? (
              <a href="#tech" className="text-slate-600 hover:text-blue-600 transition-colors">Technology</a>
            ) : (
              <Link to="/#tech" className="text-slate-600 hover:text-blue-600 transition-colors">Technology</Link>
            )}

            <Link
              to="/blog"
              onClick={scrollTop}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Blog
            </Link>

            {isHome ? (
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact Us</a>
            ) : (
              <Link to="/#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact Us</Link>
            )}
          </div>

          {/* Hamburger Button — mobile only */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-lg">
          <div className="flex flex-col px-6 py-4 gap-1">

            <Link
              to="/about"
              onClick={scrollTop}
              className="py-3 px-4 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
            >
              About
            </Link>

            {isHome ? (
              <a
                href="#solutions"
                onClick={closeMenu}
                className="py-3 px-4 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
              >
                Solutions
              </a>
            ) : (
              <Link
                to="/#solutions"
                onClick={closeMenu}
                className="py-3 px-4 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
              >
                Solutions
              </Link>
            )}

            {isHome ? (
              <a
                href="#tech"
                onClick={closeMenu}
                className="py-3 px-4 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
              >
                Technology
              </a>
            ) : (
              <Link
                to="/#tech"
                onClick={closeMenu}
                className="py-3 px-4 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
              >
                Technology
              </Link>
            )}

            <Link
              to="/blog"
              onClick={scrollTop}
              className="py-3 px-4 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
            >
              Blog
            </Link>

            {isHome ? (
              <a
                href="#contact"
                onClick={closeMenu}
                className="py-3 px-4 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
              >
                Contact Us
              </a>
            ) : (
              <Link
                to="/#contact"
                onClick={closeMenu}
                className="py-3 px-4 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
              >
                Contact Us
              </Link>
            )}

          </div>
        </div>
      )}
    </nav>
  );
}