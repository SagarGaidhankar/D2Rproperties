
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="relative z-30 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">

        {/* Brand */}
        <Link to="/" className="flex flex-col" onClick={closeMenu}>
          <span className="text-2xl font-extrabold text-green-900">
            NIDHI
          </span>
          <span className="text-xs text-gray-500">
            Find · Buy · Belong
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 font-medium md:flex">
          <Link to="/" className="text-green-900">Home</Link>
          <a href="#buy" className="text-gray-700 hover:text-green-800">Buy</a>
          {/* <a href="#sell" className="text-gray-700 hover:text-green-800">Sell</a> */}
          <Link to="/sell" className="text-gray-700 hover:text-green-800">
            Sell
          </Link>
          <a href="#about" className="text-gray-700 hover:text-green-800">About</a>
          <a href="#contact" className="text-gray-700 hover:text-green-800">Contact</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Favourites"
            className="text-2xl text-green-900"
          >
            ♡
          </button>

          {/* Desktop Login */}
          <Link
            to="/admin/login"
            className="hidden rounded-full bg-green-900 px-5 py-2 text-white hover:bg-green-800 sm:block"
          >
            Login
          </Link>

          {/* Mobile menu */}
          <button
            type="button"
            className="rounded-lg border border-gray-300 px-3 py-2 text-green-900 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4 font-medium">
            <Link to="/" onClick={closeMenu}>Home</Link>
            <a href="#buy" onClick={closeMenu}>Buy</a>
            {/* <a href="#sell" onClick={closeMenu}>Sell</a> */}
            <Link to="/sell" onClick={closeMenu}>
              Sell
            </Link>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>

            <Link
              to="/admin/login"
              onClick={closeMenu}
              className="w-full rounded-lg bg-green-900 px-5 py-2 text-center text-white"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
