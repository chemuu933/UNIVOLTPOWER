import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Sun, Mail, Phone, MapPin } from 'lucide-react';
export function Footer() {
    return (_jsx("footer", { className: "bg-slate-900 text-white mt-20", children: _jsxs("div", { className: "container mx-auto px-4 py-12", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2 mb-4", children: [_jsx(Sun, { className: "w-6 h-6 text-amber-500" }), _jsx("span", { className: "font-semibold text-lg", children: "Univoltpower" })] }), _jsx("p", { className: "text-slate-400 text-sm", children: "Book a Free Solar Site Assessment today and receive a full energy audit, load analysis, system proposal, transparent pricing, and ROI projection." })] }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold mb-4", children: "Quick Links" }), _jsxs("div", { className: "flex flex-col gap-2 text-sm", children: [_jsx(Link, { to: "/products", className: "text-slate-400 hover:text-white transition-colors", children: "Products" }), _jsx(Link,
         { to: "/services", className: "text-slate-400 hover:text-white transition-colors", children: "Services" }), _jsx(Link, 
            { to: "/about", className: "text-slate-400 hover:text-white transition-colors", children: "About Us" }), _jsx(Link,
                 { to: "/contact", className: "text-slate-400 hover:text-white transition-colors", children: "Contact" })] })] }), _jsxs("div", 
                    { children: [_jsx("h3", { className: "font-semibold mb-4", children: "Products" }), _jsxs("div", 
                        { className: "flex flex-col gap-2 text-sm text-slate-400", children: [_jsx("span", { children: "Solar Panels" }), _jsx("span",
                             { children: "Inverters" }), _jsx("span", { children: "Battery Storage" }), _jsx("span", { children: "Mounting Systems" })] })] }), _jsxs("div", 
                                { children: [_jsx("h3", { className: "font-semibold mb-4", children: "Contact Info" }), _jsxs("div", 
                                    { className: "flex flex-col gap-3 text-sm text-slate-400", children: [_jsxs("div", { className: "flex items-center gap-2", 
                                        children: [_jsx(Phone, { className: "w-4 h-4" }), _jsx("span", { children: "+254726809344" })] }), _jsxs("div", { className: "flex items-center gap-2", 
                                            children: [_jsx(Mail, { className: "w-4 h-4" }), _jsx("span", { children: "info@univoltpower.com" })] }), _jsxs("div",
                                                 { className: "flex items-center gap-2", children: [_jsx(MapPin, { className: "w-4 h-4" }), _jsx("span", { children: "Nairobi, Kenya" })] })] })] })] }), _jsx("div", { className: "border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400", children: _jsx("p", { children: "\u00A9 2026 Univoltpower. All rights reserved." }) })] }) }));
}
