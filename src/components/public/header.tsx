import { Link } from 'react-router-dom';
import { ShoppingCart, Sun, Menu, X } from 'lucide-react';
import { useCart } from '../context/cartcontext';
import { useState } from 'react';

export function Header() {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Sun className="w-8 h-8 text-amber-500" />
            <span className="font-semibold text-xl">Univoltpower</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-amber-600 transition-colors">
              Home
            </Link>
            <Link to="/products" className="hover:text-amber-600 transition-colors">
              Products
            </Link>
            <Link to="/services" className="hover:text-amber-600 transition-colors">
              Services
            </Link>
            <Link to="/about" className="hover:text-amber-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-amber-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative hover:text-amber-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="hover:text-amber-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="hover:text-amber-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/services"
                className="hover:text-amber-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="hover:text-amber-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="hover:text-amber-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
