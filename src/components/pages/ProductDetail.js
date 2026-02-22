import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams, Link } from 'react-router-dom';
import { products } from '../context/data/product';
import { Button } from '../ui/button';
import { useCart } from '../context/cartcontext';
import { ArrowLeft, Check } from 'lucide-react';
import { toast } from 'sonner';
export function ProductDetail() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = products.find((p) => p.id === id);
    if (!product) {
        return (_jsxs("div", { className: "container mx-auto px-4 py-20 text-center", children: [_jsx("h1", { className: "text-3xl mb-4", children: "Product Not Found" }), _jsx(Button, { asChild: true, children: _jsx(Link, { to: "/products", children: "Back to Products" }) })] }));
    }
    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            type: 'product',
        });
        toast.success(`${product.name} added to cart!`);
    };
    return (_jsx("div", { className: "py-12", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx(Button, { asChild: true, variant: "ghost", className: "mb-6", children: _jsxs(Link, { to: "/products", children: [_jsx(ArrowLeft, { className: "mr-2 w-4 h-4" }), " Back to Products"] }) }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: [_jsxs("div", { className: "relative", children: [_jsx("img", { src: product.image, alt: product.name, className: "w-full rounded-lg shadow-lg" }), product.inStock ? (_jsx("span", { className: "absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded", children: "In Stock" })) : (_jsx("span", { className: "absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded", children: "Out of Stock" }))] }), _jsxs("div", { children: [_jsx("div", { className: "text-sm text-amber-600 mb-2 uppercase tracking-wide", children: product.category }), _jsx("h1", { className: "text-4xl mb-4", children: product.name }), _jsx("p", { className: "text-slate-600 text-lg mb-6", children: product.description }), _jsxs("div", { className: "border-t border-b py-6 mb-6", children: [_jsxs("div", { className: "flex items-baseline gap-3 mb-2", children: [_jsxs("span", { className: "text-5xl", children: ["$", product.price.toLocaleString()] }), _jsx("span", { className: "text-slate-500", children: "per unit" })] }), _jsx("p", { className: "text-sm text-slate-600", children: "Tax and installation not included" })] }), product.inStock ? (_jsx(Button, { size: "lg", className: "w-full mb-4", onClick: handleAddToCart, children: "Add to Cart" })) : (_jsx(Button, { size: "lg", className: "w-full mb-4", disabled: true, children: "Out of Stock" })), _jsxs("div", { className: "bg-slate-50 rounded-lg p-6", children: [_jsx("h3", { className: "mb-4", children: "Technical Specifications" }), _jsx("div", { className: "space-y-3", children: Object.entries(product.specifications).map(([key, value]) => (_jsxs("div", { className: "flex items-start gap-2", children: [_jsx(Check, { className: "w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" }), _jsxs("div", { className: "flex-1", children: [_jsxs("span", { className: "text-sm text-slate-600", children: [key, ":"] }), ' ', _jsx("span", { className: "text-sm", children: value })] })] }, key))) })] }), _jsx("div", { className: "mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200", children: _jsxs("p", { className: "text-sm text-slate-700", children: [_jsx("strong", { children: "Need installation?" }), " Check out our", ' ', _jsx(Link, { to: "/services", className: "text-amber-600 hover:underline", children: "installation services" }), ' ', "for professional setup and support."] }) })] })] }), _jsxs("div", { className: "mt-20", children: [_jsx("h2", { className: "text-3xl mb-8", children: "Related Products" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: products
                                .filter((p) => p.category === product.category && p.id !== product.id)
                                .slice(0, 3)
                                .map((relatedProduct) => (_jsx(Link, { to: `/products/${relatedProduct.id}`, className: "group", children: _jsxs("div", { className: "border rounded-lg overflow-hidden hover:shadow-lg transition-shadow", children: [_jsx("div", { className: "aspect-video overflow-hidden", children: _jsx("img", { src: relatedProduct.image, alt: relatedProduct.name, className: "w-full h-full object-cover group-hover:scale-105 transition-transform" }) }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "mb-1", children: relatedProduct.name }), _jsxs("p", { className: "text-xl", children: ["$", relatedProduct.price.toLocaleString()] })] })] }) }, relatedProduct.id))) })] })] }) }));
}
