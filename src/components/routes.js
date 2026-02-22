import { createBrowserRouter } from 'react-router-dom';
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { Products } from './pages/products';
import { ProductDetail } from './pages/ProductDetail';
import { Services } from './pages/services';
import { Cart } from './pages/cart';
import { About } from './pages/About';
import { Contact } from './pages/contact';
import { NotFound } from './pages/notfound';
export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: 'products', Component: Products },
            { path: 'product/:id', Component: ProductDetail },
            { path: 'services', Component: Services },
            { path: 'cart', Component: Cart },
            { path: 'about', Component: About },
            { path: 'contact', Component: Contact },
            { path: '*', Component: NotFound },
        ],
    },
]);
