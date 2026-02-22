import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Home } from 'lucide-react';
export function NotFound() {
    return (_jsxs("div", { className: "container mx-auto px-4 py-20 text-center", children: [_jsx("h1", { className: "text-9xl mb-4 text-amber-500", children: "404" }), _jsx("h2", { className: "text-3xl mb-4", children: "Page Not Found" }), _jsx("p", { className: "text-slate-600 mb-8 max-w-md mx-auto", children: "Sorry, the page you're looking for doesn't exist. It may have been moved or deleted." }), _jsx(Button, { asChild: true, size: "lg", children: _jsxs(Link, { to: "/", children: [_jsx(Home, { className: "mr-2 w-4 h-4" }), " Back to Home"] }) })] }));
}
