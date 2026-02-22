import { useParams, Link } from 'react-router-dom';
import { products } from '../context/data/product';
import { Button } from '../ui/button';
import { useCart } from '../context/cartcontext';
import { ArrowLeft, Check } from 'lucide-react';
import { toast } from 'sonner';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl mb-4">Product Not Found</h1>
        <Button asChild>
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
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

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/products">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Products
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg shadow-lg"
            />
            {product.inStock ? (
              <span className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded">In Stock</span>
            ) : (
              <span className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded">Out of Stock</span>
            )}
          </div>

          {/* Details */}
          <div>
            <div className="text-sm text-amber-600 mb-2 uppercase tracking-wide">
              {product.category}
            </div>
            <h1 className="text-4xl mb-4">{product.name}</h1>
            <p className="text-slate-600 text-lg mb-6">{product.description}</p>

            <div className="border-t border-b py-6 mb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl">${product.price.toLocaleString()}</span>
                <span className="text-slate-500">per unit</span>
              </div>
              <p className="text-sm text-slate-600">Tax and installation not included</p>
            </div>

            {product.inStock ? (
              <Button size="lg" className="w-full mb-4" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            ) : (
              <Button size="lg" className="w-full mb-4" disabled>
                Out of Stock
              </Button>
            )}

            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="mb-4">Technical Specifications</h3>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="text-sm text-slate-600">{key}:</span>{' '}
                      <span className="text-sm">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm text-slate-700">
                <strong>Need installation?</strong> Check out our{' '}
                <Link to="/services" className="text-amber-600 hover:underline">
                  installation services
                </Link>{' '}
                for professional setup and support.
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-3xl mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products
              .filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="mb-1">{relatedProduct.name}</h3>
                      <p className="text-xl">${relatedProduct.price.toLocaleString()}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
