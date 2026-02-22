import { Link } from 'react-router-dom';
import { ArrowRight, Zap, ShieldCheck, DollarSign, Leaf } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { products, services } from '../context/data/product';

export function Home() {
  const featuredProducts = products.slice(0, 3);
  const featuredServices = services.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1635424709961-f3a150459ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2YlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzcxMjM5NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080)',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl mb-6">
              Power Your Future with Solar Energy
            </h1>
            <p className="text-xl mb-8 text-slate-200">
              Complete EPC solutions for residential, commercial, and utility-scale solar projects. Quality products, expert installation, ongoing support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600">
                <Link to="/products">
                  Shop Products <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white text-white hover:bg-white/20">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-600 mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="mb-2">High Efficiency</h3>
              <p className="text-sm text-slate-600">
                Premium solar panels with up to 22.8% efficiency ratings
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-600 mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="mb-2">25-Year Warranty</h3>
              <p className="text-sm text-slate-600">
                Industry-leading warranties on all solar equipment
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-600 mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="mb-2">Cost Savings</h3>
              <p className="text-sm text-slate-600">
                Reduce energy bills by up to 80% with solar power
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-600 mb-4">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="mb-2">Eco-Friendly</h3>
              <p className="text-sm text-slate-600">
                Clean, renewable energy for a sustainable future
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Featured Products</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore our range of high-quality solar equipment from trusted manufacturers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-amber-600 mb-2 uppercase tracking-wide">
                    {product.category}
                  </div>
                  <h3 className="text-xl mb-2">{product.name}</h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">${product.price.toLocaleString()}</span>
                    <Button asChild variant="outline">
                      <Link to={`/products/${product.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/products">
                View All Products <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              End-to-end solar solutions from consultation to maintenance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <Card key={service.id} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{service.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl">Starting at ${service.price.toLocaleString()}</span>
                    <Button asChild variant="outline" size="sm">
                      <Link to={`/services#${service.id}`}>Learn More</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-4">Ready to Go Solar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your solar project. Our experts are ready to help you make the switch to clean energy.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-amber-500 hover:bg-slate-100">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
