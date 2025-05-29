
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Mail, Crown, Sparkles, Star, Facebook, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Floating Golden Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
        ))}
      </div>

      {/* Central Golden Mandala */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <div className="w-96 h-96 opacity-5">
          <div className="w-full h-full rounded-full border-8 border-amber-400 animate-spin" style={{ animationDuration: '20s' }}>
            <div className="w-full h-full rounded-full border-4 border-orange-400 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
              <div className="w-full h-full rounded-full border-2 border-yellow-400 flex items-center justify-center">
                <Crown className="w-24 h-24 text-amber-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 shadow-2xl border-b-4 border-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Crown className="w-8 h-8 text-amber-400 animate-pulse" />
              <a href="/" className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Halwai
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 transform hover:scale-105 transition-all duration-500">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <Crown className="w-12 h-12 text-amber-500 animate-bounce" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <Crown className="w-12 h-12 text-amber-500 animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-xl text-amber-800 font-medium">Get in touch with us at either of our locations</p>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Branch Information */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Hamilton Branch */}
          <Card className="shadow-2xl bg-gradient-to-br from-white/95 to-amber-50/90 backdrop-blur-sm border-2 border-amber-200 rounded-2xl transform hover:scale-105 transition-all duration-500">
            <CardHeader className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-t-2xl">
              <CardTitle className="text-2xl text-center flex items-center justify-center">
                <Crown className="w-6 h-6 mr-2" />
                Hamilton Branch
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-amber-900">Address</h3>
                    <p className="text-amber-700">123 Victoria Street<br />Hamilton Central<br />Hamilton 3204, New Zealand</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-amber-900">Phone</h3>
                    <p className="text-amber-700">(07) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-amber-900">Email</h3>
                    <p className="text-amber-700">hamilton@halwai.co.nz</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-amber-900">Opening Hours</h3>
                    <div className="text-amber-700 space-y-1">
                      <p>Monday - Thursday: 11:00 AM - 9:00 PM</p>
                      <p>Friday - Saturday: 11:00 AM - 10:00 PM</p>
                      <p>Sunday: 12:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-amber-700 mb-3 flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Serving vegetarian and non-vegetarian cuisine
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white transform hover:scale-105 transition-all duration-300">
                      View Hamilton Menu
                    </Button>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 transform hover:scale-105 transition-all duration-300">
                        Uber Eats
                      </Button>
                      <Button variant="outline" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 transform hover:scale-105 transition-all duration-300">
                        DoorDash
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Papatoetoe Branch */}
          <Card className="shadow-2xl bg-gradient-to-br from-white/95 to-green-50/90 backdrop-blur-sm border-2 border-green-200 rounded-2xl transform hover:scale-105 transition-all duration-500">
            <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-2xl">
              <CardTitle className="text-2xl text-center flex items-center justify-center">
                <Sparkles className="w-6 h-6 mr-2" />
                Papatoetoe Branch
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-green-900">Address</h3>
                    <p className="text-green-700">456 Great South Road<br />Papatoetoe<br />Auckland 2025, New Zealand</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-green-900">Phone</h3>
                    <p className="text-green-700">(09) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-green-900">Email</h3>
                    <p className="text-green-700">papatoetoe@halwai.co.nz</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-green-900">Opening Hours</h3>
                    <div className="text-green-700 space-y-1">
                      <p>Monday - Thursday: 11:00 AM - 9:00 PM</p>
                      <p>Friday - Saturday: 11:00 AM - 10:00 PM</p>
                      <p>Sunday: 12:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-green-700 mb-3 flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Exclusively vegetarian cuisine
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white transform hover:scale-105 transition-all duration-300">
                      View Papatoetoe Menu
                    </Button>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50 transform hover:scale-105 transition-all duration-300">
                        Uber Eats
                      </Button>
                      <Button variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50 transform hover:scale-105 transition-all duration-300">
                        DoorDash
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Maps Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-2xl bg-gradient-to-br from-white/95 to-amber-50/90 backdrop-blur-sm border-2 border-amber-200 rounded-2xl transform hover:scale-105 transition-all duration-500">
            <CardHeader>
              <CardTitle className="text-xl text-amber-600 flex items-center justify-center">
                <MapPin className="w-5 h-5 mr-2" />
                Hamilton Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 rounded-lg flex items-center justify-center relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=500&h=300"
                  alt="Hamilton Location"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg flex items-center justify-center">
                  <p className="text-white font-semibold text-lg">Hamilton Branch Location</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-2xl bg-gradient-to-br from-white/95 to-green-50/90 backdrop-blur-sm border-2 border-green-200 rounded-2xl transform hover:scale-105 transition-all duration-500">
            <CardHeader>
              <CardTitle className="text-xl text-green-600 flex items-center justify-center">
                <MapPin className="w-5 h-5 mr-2" />
                Papatoetoe Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 rounded-lg flex items-center justify-center relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=500&h=300"
                  alt="Papatoetoe Location"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg flex items-center justify-center">
                  <p className="text-white font-semibold text-lg">Papatoetoe Branch Location</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* General Contact Information */}
        <Card className="shadow-2xl bg-gradient-to-br from-white/95 to-amber-50/90 backdrop-blur-sm border-2 border-amber-200 rounded-2xl transform hover:scale-105 transition-all duration-500 mb-8">
          <CardHeader>
            <CardTitle className="text-3xl text-center bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent flex items-center justify-center">
              <Crown className="w-8 h-8 mr-3 text-amber-500" />
              General Information
              <Crown className="w-8 h-8 ml-3 text-amber-500" />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-xl border border-amber-200">
                <h3 className="text-lg font-semibold text-amber-900 mb-3 flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  General Inquiries
                </h3>
                <p className="text-amber-700 mb-2">info@halwai.co.nz</p>
                <p className="text-amber-700">(07) 123-4567</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-xl border border-green-200">
                <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center justify-center">
                  <Star className="w-5 h-5 mr-2 fill-current" />
                  Catering Services
                </h3>
                <p className="text-green-700 mb-2">catering@halwai.co.nz</p>
                <p className="text-green-700">Available at both locations</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-xl border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-900 mb-3 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Follow Us
                </h3>
                <div className="flex justify-center space-x-3">
                  <Button variant="outline" size="sm" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transform hover:scale-110 transition-all duration-300">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-2 border-pink-600 text-pink-600 hover:bg-pink-50 transform hover:scale-110 transition-all duration-300">
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-2 border-red-600 text-red-600 hover:bg-red-50 transform hover:scale-110 transition-all duration-300">
                    <Youtube className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Media Section */}
        <div className="text-center bg-gradient-to-r from-amber-100 to-orange-100 p-8 rounded-2xl border-2 border-amber-200">
          <h3 className="text-2xl font-bold text-amber-800 mb-6 flex items-center justify-center">
            <Sparkles className="w-6 h-6 mr-3" />
            Connect With Us
            <Sparkles className="w-6 h-6 ml-3" />
          </h3>
          <div className="flex justify-center space-x-6">
            <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transform hover:scale-110 transition-all duration-300">
              <Facebook className="w-5 h-5 mr-2" />
              Facebook
            </Button>
            <Button variant="outline" className="border-2 border-pink-600 text-pink-600 hover:bg-pink-50 transform hover:scale-110 transition-all duration-300">
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </Button>
            <Button variant="outline" className="border-2 border-red-600 text-red-600 hover:bg-red-50 transform hover:scale-110 transition-all duration-300">
              <Youtube className="w-5 h-5 mr-2" />
              YouTube
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
