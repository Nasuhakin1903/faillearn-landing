import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, X, ArrowRight, Star, Shield, Users } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">FailLearn</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</a>
              <Button variant="outline">Log In</Button>
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Start Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Learn from <span className="text-blue-600">Failures</span>,<br />
              Transform into <span className="text-blue-600">Success</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Failures are not the end, but a new beginning. Share your experiences, 
              learn from others' experiences, and grow together.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-blue-600 text-white px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg">
                How It Works
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Experience Sharing</h3>
              <p className="text-gray-600">
                Share your failure experiences anonymously and 
                learn from others' experiences.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
              <p className="text-gray-600">
                Share your experiences comfortably with anonymous 
                sharing option and secure environment.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition">
              <Star className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mentorship</h3>
              <p className="text-gray-600">
                Learn from experienced users and guide 
                others with your own experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Free</h3>
              <p className="text-3xl font-bold mb-6">$0 <span className="text-gray-500 text-base font-normal">/month</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>2 shares per month</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Access to basic categories</span>
                </li>
                <li className="flex items-center gap-2">
                  <X className="text-red-500" />
                  <span className="text-gray-400">Anonymous sharing</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Start</Button>
            </div>

            <div className="bg-blue-600 p-8 rounded-xl shadow-lg text-white transform scale-105">
              <h3 className="text-xl font-semibold mb-4">Premium</h3>
              <p className="text-3xl font-bold mb-6">$49 <span className="text-gray-200 text-base font-normal">/month</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="text-white" />
                  <span>Unlimited sharing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-white" />
                  <span>Access to all categories</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-white" />
                  <span>Anonymous sharing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-white" />
                  <span>Private messaging</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                Get Started
              </Button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
              <p className="text-3xl font-bold mb-6">$499 <span className="text-gray-500 text-base font-normal">/month</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Premium features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Custom group creation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Analytics reports</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Contact Us</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm border">
              <p className="text-gray-600 mb-4">
                "Sharing my failures was difficult at first, but thanks to this community, 
                I realized they were learning opportunities."
              </p>
              <p className="font-semibold">Alex Y.</p>
              <p className="text-sm text-gray-500">Software Developer</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border">
              <p className="text-gray-600 mb-4">
                "Learning from others' experiences helped me avoid 
                repeating their mistakes."
              </p>
              <p className="font-semibold">Sarah M.</p>
              <p className="text-sm text-gray-500">Entrepreneur</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border">
              <p className="text-gray-600 mb-4">
                "With enterprise membership, our team shares experiences 
                and learns together."
              </p>
              <p className="font-semibold">Michael K.</p>
              <p className="text-sm text-gray-500">Team Leader</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Failures into Success?
          </h2>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">FailLearn</h3>
              <p className="text-sm">
                A community growing through learning from failures.
              </p>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>Features</li>
                <li>Pricing</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            © 2024 FailLearn. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;