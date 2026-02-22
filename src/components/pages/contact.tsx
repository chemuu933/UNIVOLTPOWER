import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl mb-4">Contact Us</h1>
          <p className="text-slate-600 text-lg max-w-3xl">
            Have questions about our products or services? Our team is here to help. Fill out the form below or reach out through any of our contact channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <Card className="lg:col-span-2 p-8">
            <h2 className="text-2xl mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project inquiry"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="mb-1">Phone</h3>
                  <p className="text-sm text-slate-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-slate-600">Toll Free: 1-800-UNIVOLT</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="mb-1">Email</h3>
                  <p className="text-sm text-slate-600">info@univoltpower.com</p>
                  <p className="text-sm text-slate-600">sales@univoltpower.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="mb-1">Office</h3>
                  <p className="text-sm text-slate-600">
                    123 Solar Street<br />
                    San Francisco, CA 94102<br />
                    United States
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="mb-1">Business Hours</h3>
                  <p className="text-sm text-slate-600">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-amber-50 border-amber-200">
              <h3 className="mb-2">Emergency Support</h3>
              <p className="text-sm text-slate-700 mb-3">
                For urgent technical issues with your solar system, our 24/7 emergency support line is available.
              </p>
              <p className="text-sm">
                <strong>Emergency: 1-800-UNIVOLT</strong>
              </p>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <Card className="overflow-hidden">
            <div className="aspect-video bg-slate-200 flex items-center justify-center">
              <div className="text-center text-slate-500">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>Map integration would go here</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
