import { services } from '../context/data/product';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Check } from 'lucide-react';
import { useCart } from '../context/cartcontext';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

export function Services() {
  const { addToCart } = useCart();

  const handleAddToCart = (service: typeof services[0]) => {
    addToCart({
      id: service.id,
      name: service.name,
      price: service.price,
      image: service.image,
      type: 'service',
    });
    toast.success(`${service.name} added to cart!`);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl mb-4">Solar EPC Services</h1>
          <p className="text-slate-600 text-lg max-w-3xl">
            From initial consultation to ongoing maintenance, we provide comprehensive solar solutions for every stage of your renewable energy journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.id} id={service.id} className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl mb-3">{service.name}</h2>
                <p className="text-slate-600 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h3 className="font-semibold mb-3">What's Included:</h3>
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl">${service.price.toLocaleString()}</span>
                    <span className="text-sm text-slate-500">starting price</span>
                  </div>
                  <div className="flex gap-3">
                    <Button className="flex-1" onClick={() => handleAddToCart(service)}>
                      Add to Cart
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <a href="/contact">Get Quote</a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <section className="mt-20 bg-slate-50 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl mb-6 text-center">Why Choose Our EPC Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="mb-2">Expert Team</h3>
              <p className="text-sm text-slate-600">
                Our certified engineers and technicians have over 15 years of combined experience in solar installations.
              </p>
            </div>
            <div>
              <h3 className="mb-2">Quality Assurance</h3>
              <p className="text-sm text-slate-600">
                We use only tier-1 equipment and follow strict quality control processes throughout every project.
              </p>
            </div>
            <div>
              <h3 className="mb-2">Full Support</h3>
              <p className="text-sm text-slate-600">
                From design to maintenance, we're with you every step of the way with 24/7 customer support.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
