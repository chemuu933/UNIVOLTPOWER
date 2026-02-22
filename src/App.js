import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RouterProvider } from 'react-router-dom';
import { router } from './components/routes';
import { CartProvider } from './components/context/cartcontext';
import { Toaster } from 'sonner';
export default function App() {
    return (_jsxs(CartProvider, { children: [_jsx(RouterProvider, { router: router }), _jsx(Toaster, {})] }));
}
