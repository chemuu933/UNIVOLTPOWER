import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { services } from '../context/data/product';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Check } from 'lucide-react';
import { useCart } from '../context/cartcontext';
import { toast } from 'sonner';
export function Services() {
    const { addToCart } = useCart();
    const handleAddToCart = (service) => {
        addToCart({
            id: service.id,
            name: service.name,
            price: service.price,
            image: service.image,
            type: 'service',
        });
        toast.success(`${service.name} added to cart!`);
    };
    return (_jsx("div", { className: "py-12", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "mb-12", children: [_jsx("h1", { className: "text-4xl md:text-5xl mb-4", children: "Solar EPC Services" }), _jsx("p", { className: "text-slate-600 text-lg max-w-3xl", children: "From initial consultation to ongoing maintenance, we provide comprehensive solar solutions for every stage of your renewable energy journey." })] }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: services.map((service) => (_jsxs(Card, { id: service.id, className: "overflow-hidden", children: [_jsx("div", { className: "aspect-video overflow-hidden", children: _jsx("img", { src: service.image, alt: service.name, className: "w-full h-full object-cover" }) }), _jsxs("div", { className: "p-8", children: [_jsx("h2", { className: "text-2xl mb-3", children: service.name }), _jsx("p", { className: "text-slate-600 mb-6", children: service.description }), _jsxs("div", { className: "mb-6", children: [_jsx("h3", { className: "font-semibold mb-3", children: "What's Included:" }), _jsx("div", { className: "space-y-2", children: service.features.map((feature, index) => (_jsxs("div", { className: "flex items-start gap-2", children: [_jsx(Check, { className: "w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" }), _jsx("span", { className: "text-sm text-slate-700", children: feature })] }, index))) })] }), _jsxs("div", { className: "border-t pt-6", children: [_jsxs("div", { className: "flex items-baseline gap-2 mb-4", children: [_jsxs("span", { className: "text-3xl", children: ["$", service.price.toLocaleString()] }), _jsx("span", { className: "text-sm text-slate-500", children: "starting price" })] }), _jsxs("div", { className: "flex gap-3", children: [_jsx(Button, { className: "flex-1", onClick: () => handleAddToCart(service), children: "Add to Cart" }), _jsx(Button, { variant: "outline", className: "flex-1", asChild: true, children: _jsx("a", { href: "/contact", children: "Get Quote" }) })] })] })] })] }, service.id))) }), _jsxs("section", { className: "mt-20 bg-slate-50 rounded-lg p-8 md:p-12", children: [_jsx("h2", { className: "text-3xl mb-6 text-center", children: "Why Choose Our EPC Services?" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [_jsxs("div", { children: [_jsx("h3", { className: "mb-2", children: "Expert Team" }), _jsx("p", { className: "text-sm text-slate-600", children: "Our certified engineers and technicians have over 15 years of combined experience in solar installations." })] }), _jsxs("div", { children: [_jsx("h3", { className: "mb-2", children: "Quality Assurance" }), _jsx("p", { className: "text-sm text-slate-600", children: "We use only tier-1 equipment and follow strict quality control processes throughout every project." })] }), _jsxs("div", { children: [_jsx("h3", { className: "mb-2", children: "Full Support" }), _jsx("p", { className: "text-sm text-slate-600", children: "From design to maintenance, we're with you every step of the way with 24/7 customer support." })] })] })] })] }) }));
}
