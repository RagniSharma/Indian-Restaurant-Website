
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Crown, Sparkles, Star, Facebook, Instagram, Youtube } from 'lucide-react';

const Catering = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    eventTime: '',
    guests: '',
    foodPreference: '',
    venue: '',
    budget: '',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Catering request submitted:', formData);
    toast({
      title: "Catering Request Submitted!",
      description: "We'll contact you within 24 hours with a detailed quote.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      eventTime: '',
      guests: '',
      foodPreference: '',
      venue: '',
      budget: '',
      specialRequests: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 transform hover:scale-105 transition-all duration-500">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <Crown className="w-12 h-12 text-amber-500 animate-bounce" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Catering Services
            </h1>
            <Crown className="w-12 h-12 text-amber-500 animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-xl text-amber-800 font-medium">Let us make your special event memorable with authentic Indian cuisine</p>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        <Card className="shadow-2xl bg-gradient-to-br from-white/95 to-amber-50/90 backdrop-blur-sm border-2 border-amber-200 rounded-2xl transform hover:scale-105 transition-all duration-500 mb-8">
          <CardHeader className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-orange-100/50 rounded-t-2xl"></div>
            <CardTitle className="relative text-3xl text-center bg-gradient-to-r from-amber-700 via-orange-600 to-red-600 bg-clip-text text-transparent flex items-center justify-center">
              <Star className="w-8 h-8 mr-3 text-amber-500 fill-current" />
              Request a Catering Quote
              <Star className="w-8 h-8 ml-3 text-amber-500 fill-current" />
            </CardTitle>
          </CardHeader>
          <CardContent className="relative p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
                  <Crown className="w-5 h-5 mr-2" />
                  Contact Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3 group">
                    <Label htmlFor="name" className="text-amber-800 font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      placeholder="Enter your full name"
                      className="border-2 border-amber-200 focus:border-amber-400 focus:ring-amber-200 bg-white/80 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-3 group">
                    <Label htmlFor="phone" className="text-amber-800 font-medium">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      placeholder="(09) 123-4567"
                      className="border-2 border-amber-200 focus:border-amber-400 focus:ring-amber-200 bg-white/80 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="mt-6 space-y-3 group">
                  <Label htmlFor="email" className="text-amber-800 font-medium">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    placeholder="your.email@example.com"
                    className="border-2 border-amber-200 focus:border-amber-400 focus:ring-amber-200 bg-white/80 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Event Details */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-semibold text-orange-800 mb-4 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Event Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3 group">
                    <Label htmlFor="eventType" className="text-orange-800 font-medium">Event Type *</Label>
                    <Select onValueChange={(value) => handleInputChange('eventType', value)} required>
                      <SelectTrigger className="border-2 border-orange-200 focus:border-orange-400 bg-white/80 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent className="bg-white/95 backdrop-blur-sm border-2 border-orange-200">
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="birthday">Birthday Party</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="anniversary">Anniversary</SelectItem>
                        <SelectItem value="festival">Festival Celebration</SelectItem>
                        <SelectItem value="graduation">Graduation Party</SelectItem>
                        <SelectItem value="family-gathering">Family Gathering</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3 group">
                    <Label htmlFor="guests" className="text-orange-800 font-medium">Number of Guests *</Label>
                    <Select onValueChange={(value) => handleInputChange('guests', value)} required>
                      <SelectTrigger className="border-2 border-orange-200 focus:border-orange-400 bg-white/80 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300">
                        <SelectValue placeholder="Select guest count" />
                      </SelectTrigger>
                      <SelectContent className="bg-white/95 backdrop-blur-sm border-2 border-orange-200">
                        <SelectItem value="10-25">10-25 guests</SelectItem>
                        <SelectItem value="26-50">26-50 guests</SelectItem>
                        <SelectItem value="51-100">51-100 guests</SelectItem>
                        <SelectItem value="101-200">101-200 guests</SelectItem>
                        <SelectItem value="200+">200+ guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-3 group">
                    <Label htmlFor="eventDate" className="text-orange-800 font-medium">Event Date *</Label>
                    <Input
                      id="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => handleInputChange('eventDate', e.target.value)}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="border-2 border-orange-200 focus:border-orange-400 focus:ring-orange-200 bg-white/80 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-3 group">
                    <Label htmlFor="eventTime" className="text-orange-800 font-medium">Event Time</Label>
                    <Input
                      id="eventTime"
                      type="time"
                      value={formData.eventTime}
                      onChange={(e) => handleInputChange('eventTime', e.target.value)}
                      className="border-2 border-orange-200 focus:border-orange-400 focus:ring-orange-200 bg-white/80 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border border-red-200">
                <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2 fill-current" />
                  Additional Details
                </h3>
                <div className="space-y-6">
                  <div className="space-y-3 group">
                    <Label htmlFor="foodPreference" className="text-red-800 font-medium">Food Preference *</Label>
                    <Select onValueChange={(value) => handleInputChange('foodPreference', value)} required>
                      <SelectTrigger className="border-2 border-red-200 focus:border-red-400 bg-white/80 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300">
                        <SelectValue placeholder="Select food preference" />
                      </SelectTrigger>
                      <SelectContent className="bg-white/95 backdrop-blur-sm border-2 border-red-200">
                        <SelectItem value="vegetarian">Vegetarian Only</SelectItem>
                        <SelectItem value="non-vegetarian">Non-Vegetarian (includes veg options)</SelectItem>
                        <SelectItem value="mixed">Mixed Menu (separate veg/non-veg sections)</SelectItem>
                        <SelectItem value="custom">Custom Menu (please specify in requests)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3 group">
                    <Label htmlFor="venue" className="text-red-800 font-medium">Event Venue</Label>
                    <Input
                      id="venue"
                      type="text"
                      value={formData.venue}
                      onChange={(e) => handleInputChange('venue', e.target.value)}
                      placeholder="Event location or venue name"
                      className="border-2 border-red-200 focus:border-red-400 focus:ring-red-200 bg-white/80 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-3 group">
                    <Label htmlFor="budget" className="text-red-800 font-medium">Estimated Budget (Optional)</Label>
                    <Select onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger className="border-2 border-red-200 focus:border-red-400 bg-white/80 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent className="bg-white/95 backdrop-blur-sm border-2 border-red-200">
                        <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                        <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                        <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                        <SelectItem value="5000+">$5,000+</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3 group">
                    <Label htmlFor="specialRequests" className="text-red-800 font-medium">Special Requests & Dietary Requirements</Label>
                    <Textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      placeholder="Please include any dietary restrictions, specific dishes you'd like, setup requirements, or other special requests..."
                      className="min-h-[120px] border-2 border-red-200 focus:border-red-400 focus:ring-red-200 bg-white/80 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700 text-white font-bold px-16 py-4 text-lg rounded-xl shadow-xl transform hover:scale-110 transition-all duration-300 border-2 border-amber-400"
                >
                  <Crown className="w-6 h-6 mr-3" />
                  Request Quote
                  <Sparkles className="w-6 h-6 ml-3 animate-pulse" />
                </Button>
              </div>

              <div className="text-center bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-xl border border-amber-200 space-y-2">
                <p className="text-amber-800 font-semibold">* Required fields</p>
                <p className="text-amber-700">We'll contact you within 24 hours with a detailed quote and menu suggestions</p>
                <p className="text-amber-700">Minimum 7 days advance notice required for catering orders</p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Catering Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-2xl bg-gradient-to-br from-white/95 to-amber-50/90 backdrop-blur-sm border-2 border-amber-200 rounded-2xl transform hover:scale-105 transition-all duration-500">
            <CardHeader>
              <CardTitle className="text-xl text-amber-600 flex items-center justify-center">
                <Crown className="w-5 h-5 mr-2" />
                Our Catering Services Include:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-amber-700">
                <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-amber-500 fill-current" /> Authentic Indian cuisine preparation</li>
                <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-amber-500 fill-current" /> Professional food setup and presentation</li>
                <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-amber-500 fill-current" /> Serving utensils and disposable plates</li>
                <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-amber-500 fill-current" /> Customizable menu options</li>
                <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-amber-500 fill-current" /> Dietary restriction accommodations</li>
                <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-amber-500 fill-current" /> Delivery to your venue</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-2xl bg-gradient-to-br from-white/95 to-green-50/90 backdrop-blur-sm border-2 border-green-200 rounded-2xl transform hover:scale-105 transition-all duration-500">
            <CardHeader>
              <CardTitle className="text-xl text-green-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 mr-2" />
                Contact Information:
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold text-green-800">Hamilton Branch:</h4>
                <p className="text-green-700">(07) 123-4567</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-800">Papatoetoe Branch:</h4>
                <p className="text-green-700">(09) 987-6543</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-800">Email:</h4>
                <p className="text-green-700">catering@halwai.co.nz</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Media Section */}
        <div className="text-center bg-gradient-to-r from-amber-100 to-orange-100 p-8 rounded-2xl border-2 border-amber-200">
          <h3 className="text-2xl font-bold text-amber-800 mb-6 flex items-center justify-center">
            <Sparkles className="w-6 h-6 mr-3" />
            Follow Us on Social Media
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

export default Catering;
