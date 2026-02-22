import { RouterProvider } from 'react-router-dom';
import { router } from './components/routes';
import { CartProvider } from './components/context/cartcontext';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
      <Toaster />
    </CartProvider>
  );
}

