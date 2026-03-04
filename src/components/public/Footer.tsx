import { Link } from 'react-router-dom';
import { Sun, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sun className="w-6 h-6 text-amber-500" />
              <span className="font-semibold text-lg">Univoltpower</span>
            </div>
            <p className="text-slate-400 text-sm">
              Your trusted partner for solar energy solutions. Engineering, Procurement, and Construction excellence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/products" className="text-slate-400 hover:text-white transition-colors">
                Products
              </Link>
              <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <span>Solar Panels</span>
              <span>Inverters</span>
              <span>Battery Storage</span>
              <span>Mounting Systems</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+254726809344</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@univoltpower.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2026 Univoltpower. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
