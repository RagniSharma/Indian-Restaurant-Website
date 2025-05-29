
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin, Clock, Mail, Calendar, Crown, Sparkles, Star } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Floating Golden Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Sparkles className="w-3 h-3 text-amber-400" />
          </div>
        ))}
      </div>

      {/* Paisley Pattern Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 shadow-2xl border-b-4 border-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Crown className="w-8 h-8 text-amber-400 animate-pulse" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Halwai</h1>
              <div className="text-amber-200 text-sm font-medium">हलवाई</div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-amber-200 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Home</Link>
                <Link to="/menu" className="text-amber-200 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Menu</Link>
                <Link to="/reservations" className="text-amber-200 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Reservations</Link>
                <Link to="/catering" className="text-amber-200 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Catering</Link>
                <Link to="/about" className="text-amber-200 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">About</Link>
                <Link to="/contact" className="text-amber-200 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Contact</Link>
                <Link to="/feedback" className="text-amber-200 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Feedback</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-800 via-orange-700 to-red-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center space-x-6 mb-8">
            <Crown className="w-16 h-16 text-amber-400 animate-bounce" />
            <div>
              <h1 className="text-7xl md:text-8xl font-bold mb-4 animate-fade-in bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">
                Authentic Indian Cuisine
              </h1>
              <p className="text-2xl text-amber-200 font-medium">प्रामाणिक भारतीय व्यंजन</p>
            </div>
            <Crown className="w-16 h-16 text-amber-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-2xl md:text-3xl mb-12 animate-fade-in text-amber-100 font-medium">
            Experience the rich flavors of traditional Indian cooking at our two exquisite New Zealand locations
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
            <Link to="/menu">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-500 text-amber-900 hover:from-amber-400 hover:to-yellow-400 font-bold px-12 py-4 text-xl rounded-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                <Crown className="w-6 h-6 mr-3" />
                View Our Premium Menus
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-amber-300 text-amber-200 hover:bg-amber-300 hover:text-amber-900 font-bold px-12 py-4 text-xl rounded-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl">
              <Sparkles className="w-6 h-6 mr-3" />
              Order Online
            </Button>
          </div>
        </div>
      </section>

      {/* Branch Selection */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center space-x-4 mb-6">
              <Star className="w-10 h-10 text-amber-500 animate-pulse" />
              <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">Our Premium Locations</h2>
              <Star className="w-10 h-10 text-amber-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            <p className="text-xl text-amber-800 font-medium">हमारे प्रीमियम स्थान</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Hamilton Branch */}
            <Card className="group overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-white/95 to-amber-50/90 backdrop-blur-sm border-4 border-amber-300 rounded-3xl">
              <div className="h-80 bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <Crown className="absolute top-6 right-6 w-12 h-12 text-amber-200 animate-pulse" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold">Hamilton Branch</h3>
                  <p className="text-amber-200">हैमिल्टन शाखा</p>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-amber-700 text-lg mb-6 font-medium">Serving both vegetarian and non-vegetarian authentic premium Indian dishes</p>
                <div className="space-y-3 text-amber-700 mb-8">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-amber-600" />
                    <span className="font-medium">123 Victoria Street, Hamilton</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-amber-600" />
                    <span className="font-medium">(07) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-amber-600" />
                    <span className="font-medium">Open: 11:00 AM - 10:00 PM</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Link to="/menu/hamilton">
                    <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-3 rounded-xl transform transition-all duration-300 hover:scale-105">
                      <Crown className="w-5 h-5 mr-2" />
                      View Hamilton Menu
                    </Button>
                  </Link>
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 border-2 border-amber-600 text-amber-700 hover:bg-amber-50 font-semibold rounded-xl">
                      Uber Eats
                    </Button>
                    <Button variant="outline" className="flex-1 border-2 border-amber-600 text-amber-700 hover:bg-amber-50 font-semibold rounded-xl">
                      DoorDash
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Papatoetoe Branch */}
            <Card className="group overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-white/95 to-green-50/90 backdrop-blur-sm border-4 border-green-300 rounded-3xl">
              <div className="h-80 bg-gradient-to-br from-green-400 via-emerald-500 to-green-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <Sparkles className="absolute top-6 right-6 w-12 h-12 text-green-200 animate-pulse" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold">Papatoetoe Branch</h3>
                  <p className="text-green-200">पापातोयेटो शाखा</p>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-green-700 text-lg mb-6 font-medium">Exclusively pure vegetarian Indian cuisine with traditional premium flavors</p>
                <div className="space-y-3 text-green-700 mb-8">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-green-600" />
                    <span className="font-medium">456 Great South Road, Papatoetoe</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-green-600" />
                    <span className="font-medium">(09) 987-6543</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-green-600" />
                    <span className="font-medium">Open: 11:00 AM - 10:00 PM</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Link to="/menu/papatoetoe">
                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 rounded-xl transform transition-all duration-300 hover:scale-105">
                      <Sparkles className="w-5 h-5 mr-2" />
                      View Papatoetoe Menu
                    </Button>
                  </Link>
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 border-2 border-green-600 text-green-700 hover:bg-green-50 font-semibold rounded-xl">
                      Uber Eats
                    </Button>
                    <Button variant="outline" className="flex-1 border-2 border-green-600 text-green-700 hover:bg-green-50 font-semibold rounded-xl">
                      DoorDash
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="relative z-10 bg-gradient-to-r from-white/80 to-amber-50/80 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent mb-4">Quick Premium Services</h2>
            <p className="text-xl text-amber-800 font-medium">त्वरित प्रीमियम सेवाएं</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/reservations">
              <Card className="text-center hover:shadow-2xl transition-all duration-500 cursor-pointer h-full transform hover:scale-105 bg-gradient-to-br from-white/95 to-amber-50/90 backdrop-blur-sm border-2 border-amber-200 rounded-2xl">
                <CardContent className="p-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-200 to-orange-300 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 hover:scale-110">
                    <Calendar className="w-10 h-10 text-amber-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-3">Book a Premium Table</h3>
                  <p className="text-amber-700 font-medium">Reserve your table at either of our exquisite locations</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/catering">
              <Card className="text-center hover:shadow-2xl transition-all duration-500 cursor-pointer h-full transform hover:scale-105 bg-gradient-to-br from-white/95 to-green-50/90 backdrop-blur-sm border-2 border-green-200 rounded-2xl">
                <CardContent className="p-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-200 to-emerald-300 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 hover:scale-110">
                    <Crown className="w-10 h-10 text-green-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 mb-3">Premium Catering</h3>
                  <p className="text-green-700 font-medium">Get a premium quote for your special events and celebrations</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/feedback">
              <Card className="text-center hover:shadow-2xl transition-all duration-500 cursor-pointer h-full transform hover:scale-105 bg-gradient-to-br from-white/95 to-blue-50/90 backdrop-blur-sm border-2 border-blue-200 rounded-2xl">
                <CardContent className="p-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-200 to-indigo-300 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 hover:scale-110">
                    <Star className="w-10 h-10 text-blue-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">Share Your Experience</h3>
                  <p className="text-blue-700 font-medium">Tell us about your dining experience with us</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-amber-900 via-orange-900 to-red-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <Crown className="w-10 h-10 text-amber-400" />
            <h3 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Halwai</h3>
            <Crown className="w-10 h-10 text-amber-400" />
          </div>
          <p className="text-amber-200 text-lg mb-2">Authentic Premium Indian Cuisine in New Zealand</p>
          <p className="text-amber-300 mb-6">न्यूज़ीलैंड में प्रामाणिक प्रीमियम भारतीय व्यंजन</p>
          <div className="flex justify-center space-x-8">
            <a href="#" className="text-amber-300 hover:text-amber-400 transition-all duration-300 hover:scale-110 font-medium">Facebook</a>
            <a href="#" className="text-amber-300 hover:text-amber-400 transition-all duration-300 hover:scale-110 font-medium">Instagram</a>
            <a href="#" className="text-amber-300 hover:text-amber-400 transition-all duration-300 hover:scale-110 font-medium">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
