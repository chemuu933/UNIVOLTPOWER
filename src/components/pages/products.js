import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../context/data/product';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
export function Products() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const categories = [
        { value: 'all', label: 'All Products' },
        { value: 'panels', label: 'Solar Panels' },
        { value: 'inverters', label: 'Inverters' },
        { value: 'batteries', label: 'Batteries' },
        { value: 'mounting', label: 'Mounting Systems' },
    ];
    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter((p) => p.category === selectedCategory);
    return (_jsx("div", { className: "py-12", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "mb-12", children: [_jsx("h1", { className: "text-4xl md:text-5xl mb-4", children: "Solar Products" }), _jsx("p", { className: "text-slate-600 text-lg max-w-3xl", children: "Browse our comprehensive range of high-quality solar equipment. All products come with manufacturer warranties and expert installation support." })] }), _jsx("div", { className: "flex flex-wrap gap-2 mb-8", children: categories.map((category) => (_jsx(Button, { variant: selectedCategory === category.value ? 'default' : 'outline', onClick: () => setSelectedCategory(category.value), children: category.label }, category.value))) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredProducts.map((product) => (_jsxs(Card, { className: "overflow-hidden flex flex-col", children: [_jsxs("div", { className: "aspect-video overflow-hidden relative", children: [_jsx("img", { src: product.image, alt: product.name, className: "w-full h-full object-cover hover:scale-105 transition-transform duration-300" }), product.inStock ? (_jsx("span", { className: "absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded", children: "In Stock" })) : (_jsx("span", { className: "absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded", children: "Out of Stock" }))] }), _jsxs("div", { className: "p-6 flex-1 flex flex-col", children: [_jsx("div", { className: "text-xs text-amber-600 mb-2 uppercase tracking-wide", children: product.category }), _jsx("h3", { className: "text-xl mb-2", children: product.name }), _jsx("p", { className: "text-slate-600 text-sm mb-4 flex-1", children: product.description }), _jsxs("div", { className: "border-t pt-4 mt-4", children: [_jsxs("div", { className: "flex items-baseline gap-2 mb-4", children: [_jsxs("span", { className: "text-3xl", children: ["$", product.price.toLocaleString()] }), _jsx("span", { className: "text-sm text-slate-500", children: "per unit" })] }), _jsx(Button, { asChild: true, className: "w-full", children: _jsx(Link, { to: `/products/${product.id}`, children: "View Details" }) })] })] })] }, product.id))) }), filteredProducts.length === 0 && (_jsx("div", { className: "text-center py-12", children: _jsx("p", { className: "text-slate-600", children: "No products found in this category." }) }))] }) }));
}
