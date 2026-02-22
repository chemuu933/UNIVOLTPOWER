import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect } from 'react';
const CartContext = createContext(undefined);
export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem('solarCart');
        return saved ? JSON.parse(saved) : [];
    });
    useEffect(() => {
        localStorage.setItem('solarCart', JSON.stringify(cart));
    }, [cart]);
    const addToCart = (item) => {
        setCart((prev) => {
            const existing = prev.find((i) => i.id === item.id);
            if (existing) {
                return prev.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };
    const updateQuantity = (id, quantity) => {
        if (quantity <= 0) {
            removeFromCart(id);
            return;
        }
        setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)));
    };
    const clearCart = () => {
        setCart([]);
    };
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (_jsx(CartContext.Provider, { value: {
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            totalItems,
            totalPrice,
        }, children: children }));
}
export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }
    return context;
}
