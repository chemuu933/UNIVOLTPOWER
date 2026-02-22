import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../context/data/product';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'panels', label: 'Solar Panels' },
    { value: 'inverters', label: 'Inverters' },
    { value: 'batteries', label: 'Batteries' },
    { value: 'mounting', label: 'Mounting Systems' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl mb-4">Solar Products</h1>
          <p className="text-slate-600 text-lg max-w-3xl">
            Browse our comprehensive range of high-quality solar equipment. All products come with manufacturer warranties and expert installation support.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden flex flex-col">
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {product.inStock ? (
                  <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded">In Stock</span>
                ) : (
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded">Out of Stock</span>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs text-amber-600 mb-2 uppercase tracking-wide">
                  {product.category}
                </div>
                <h3 className="text-xl mb-2">{product.name}</h3>
                <p className="text-slate-600 text-sm mb-4 flex-1">
                  {product.description}
                </p>
                <div className="border-t pt-4 mt-4">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl">${product.price.toLocaleString()}</span>
                    <span className="text-sm text-slate-500">per unit</span>
                  </div>
                  <Button asChild className="w-full">
                    <Link to={`/products/${product.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
