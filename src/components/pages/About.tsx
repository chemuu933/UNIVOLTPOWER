import { Award, Users, Target, Heart } from 'lucide-react';
import { Card } from '../ui/card';

export function About() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl mb-6">About Univoltpower</h1>
          <p className="text-slate-600 text-lg max-w-3xl">
            We are a leading provider of solar energy solutions, specializing in Engineering, Procurement, and Construction (EPC) services. Since 2010, we've helped thousands of customers transition to clean, renewable energy.
          </p>
        </div>

        {/* Image Section */}
        <div className="mb-16 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1648135327756-b606e2eb8caa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGVuZXJneSUyMGVuZ2luZWVyfGVufDF8fHx8MTc3MTMzMTA3NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Solar Engineers"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <Target className="w-12 h-12 text-amber-500 mb-4" />
            <h2 className="text-2xl mb-4">Our Mission</h2>
            <p className="text-slate-600">
              To accelerate the world's transition to sustainable energy by providing high-quality, affordable solar solutions that empower individuals and businesses to take control of their energy future.
            </p>
          </Card>
          <Card className="p-8">
            <Heart className="w-12 h-12 text-amber-500 mb-4" />
            <h2 className="text-2xl mb-4">Our Values</h2>
            <ul className="text-slate-600 space-y-2">
              <li>• Quality without compromise</li>
              <li>• Customer-centric approach</li>
              <li>• Environmental responsibility</li>
              <li>• Innovation and continuous improvement</li>
              <li>• Transparency and integrity</li>
            </ul>
          </Card>
        </div>

        {/* Stats */}
        <div className="bg-amber-500 text-white rounded-lg p-12 mb-16">
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
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center">Why Choose Univoltpower?</h2>
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
        </div>

        {/* Certifications */}
        <div className="bg-slate-50 rounded-lg p-8">
          <h2 className="text-2xl mb-6 text-center">Certifications & Partnerships</h2>
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
        </div>
      </div>
    </div>
  );
}
