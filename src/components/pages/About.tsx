import { Award, Users, Target, Heart, Eye } from 'lucide-react';
import { Card } from '../ui/card';

export function About() {
  return (
    <div className="py-12" aria-label="About Page">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16" aria-labelledby="about-heading">
          <h1 id="about-heading" className="text-4xl md:text-5xl mb-6">About Univoltpower</h1>
          <div className="text-slate-600 text-lg max-w-4xl space-y-4">
            <p>
              Electricity tariffs continue to rise. Power outages disrupt businesses. Diesel generators increase operational costs. Rural areas struggle with reliable grid access.
            </p>
            <p>
              Univolt Power Ltd was established to solve these challenges through professional Solar EPC services, system design & engineering, installation & commissioning, equipment supply, and energy efficiency optimization.
            </p>
            <p>
              We serve Commercial & Industrial Clients, Property Developers, Institutions, NGOs, Agricultural Enterprises, and Residential Homeowners.
            </p>
          </div>
        </section>

        {/* Image Section */}
        <section className="mb-16 rounded-lg overflow-hidden" aria-label="Team working on solar installation">
          <img
            src="https://images.unsplash.com/photo-1648135327756-b606e2eb8caa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGVuZXJneSUyMGVuZ2luZWVyfGVufDF8fHx8MTc3MTMzMTA3NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Solar engineers installing photovoltaic panels"
            loading="lazy"
            className="w-full h-[400px] object-cover"
          />
        </section>

        {/* Mission & Values */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" aria-label="Mission and Values">
          <Card className="p-8">
            <Target className="w-12 h-12 text-amber-500 mb-4" />
            <h2 className="text-2xl mb-4">Our Mission</h2>
            <p className="text-slate-600">To provide reliable, cost-effective, and sustainable solar energy systems that eliminate power instability and reduce energy costs.
            </p>
          </Card>
          <Card className="p-8">
            <Eye className="w-12 h-12 text-amber-500 mb-4" />
            <h2 className="text-2xl mb-4">Vision</h2>
            <p className="text-slate-600">
              To become East Africa’s leading renewable energy solutions provider, transforming how energy is generated, stored, and consumed.
            </p>
          </Card>
        </section>

        {/* Stats */}
        <section className="bg-amber-500 text-white rounded-lg p-12 mb-16" aria-label="Company statistics">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl mb-2">500+</div>
              <div className="text-amber-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">50MW+</div>
              <div className="text-amber-100">Solar Installed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">15+</div>
              <div className="text-amber-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">98%</div>
              <div className="text-amber-100">Customer Satisfaction</div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16" aria-labelledby="why-choose">
          <h2 id="why-choose" className="text-3xl mb-8 text-center">Why Choose Univoltpower?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <Award className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="mb-2">Certified Excellence</h3>
              <p className="text-sm text-slate-600">
                ISO certified and accredited by leading solar industry bodies
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="mb-2">Expert Team</h3>
              <p className="text-sm text-slate-600">
                50+ certified solar engineers and installation technicians
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="mb-2">Custom Solutions</h3>
              <p className="text-sm text-slate-600">
                Tailored solar systems designed for your specific needs
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Heart className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="mb-2">Lifetime Support</h3>
              <p className="text-sm text-slate-600">
                Ongoing maintenance and 24/7 customer support
              </p>
            </Card>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-slate-50 rounded-lg p-8" aria-labelledby="certs">
          <h2 id="certs" className="text-2xl mb-6 text-center">Certifications & Partnerships</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-slate-600">
            <div>
              <div className="font-semibold mb-1">ISO 9001:2015</div>
              <div className="text-sm">Quality Management</div>
            </div>
            <div>
              <div className="font-semibold mb-1">NABCEP</div>
              <div className="text-sm">Certified Installers</div>
            </div>
            <div>
              <div className="font-semibold mb-1">SEIA Member</div>
              <div className="text-sm">Solar Energy Industries</div>
            </div>
            <div>
              <div className="font-semibold mb-1">Tesla Certified</div>
              <div className="text-sm">Powerwall Installer</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
