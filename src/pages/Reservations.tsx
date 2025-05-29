import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, Crown, Star } from 'lucide-react';

const Reservations = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    toast({
      title: "Reservation Submitted!",
      description: "We'll contact you shortly to confirm your booking.",
    });
    // Reset form
    setFormData({
      name: '',
      phone: '',
      branch: '',
      date: '',
      time: '',
      guests: '',
      specialRequests: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Luxurious Background with Indian Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-100 to-red-100">
        {/* Paisley Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.3'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v30H30zM0 30c0-16.569 13.431-30 30-30v30H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Floating Golden Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              <Star className="w-3 h-3 text-amber-400 fill-current animate-spin" style={{
                animationDuration: `${5 + Math.random() * 5}s`
              }} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation with Indian Premium Theme */}
      <nav className="relative bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 shadow-2xl border-b-4 border-amber-400">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center group">
              <Crown className="w-8 h-8 text-amber-400 mr-3 animate-pulse" />
              <a href="/" className="text-3xl font-bold text-amber-100 hover:text-amber-300 transition-all duration-300 transform hover:scale-105">
                हलवाई Halwai
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Luxurious Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-amber-600 mr-3 animate-spin" style={{ animationDuration: '3s' }} />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Premium Reservations
            </h1>
            <Sparkles className="w-8 h-8 text-amber-600 ml-3 animate-spin" style={{ animationDuration: '3s' }} />
          </div>
          <p className="text-xl text-gray-700 font-medium">
            Reserve your table for an exquisite culinary journey
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 3D Floating Reservation Card */}
        <Card className="relative shadow-2xl transform hover:scale-105 transition-all duration-500 animate-fade-in border-2 border-amber-200 bg-gradient-to-br from-white via-amber-50 to-orange-50">
          {/* Decorative Border Elements */}
          <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
          
          <CardHeader className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-orange-100/50 rounded-t-lg"></div>
            <CardTitle className="relative text-4xl text-center bg-gradient-to-r from-amber-700 via-orange-600 to-red-600 bg-clip-text text-transparent font-bold">
              ✨ Secure Your Premium Table ✨
            </CardTitle>
          </CardHeader>
          
          <CardContent className="relative p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Section */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200 transform hover:scale-102 transition-all duration-300">
                <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
                  <Crown className="w-5 h-5 mr-2" />
                  Guest Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3 group">
                    <Label htmlFor="name" className="text-amber-800 font-medium">Your Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      placeholder="Enter your distinguished name"
                      className="border-2 border-amber-200 focus:border-amber-400 focus:ring-amber-200 bg-white/80 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-3 group">
                    <Label htmlFor="phone" className="text-amber-800 font-medium">Contact Number *</Label>
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
              </div>

              {/* Branch Selection */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200 transform hover:scale-102 transition-all duration-300">
                <h3 className="text-xl font-semibold text-orange-800 mb-4 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Choose Your Location
                </h3>
                <div className="space-y-3 group">
                  <Label htmlFor="branch" className="text-orange-800 font-medium">Select Branch *</Label>
                  <Select onValueChange={(value) => handleInputChange('branch', value)} required>
                    <SelectTrigger className="border-2 border-orange-200 focus:border-orange-400 bg-white/80 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300 h-12">
                      <SelectValue placeholder="Choose your preferred location" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/95 backdrop-blur-sm border-2 border-orange-200">
                      <SelectItem value="hamilton" className="text-orange-800 hover:bg-orange-100">
                        🏰 Hamilton Branch (Veg & Non-Veg Delicacies)
                      </SelectItem>
                      <SelectItem value="papatoetoe" className="text-green-800 hover:bg-green-100">
                        🌿 Papatoetoe Branch (Pure Vegetarian Haven)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Reservation Details */}
              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border border-red-200 transform hover:scale-102 transition-all duration-300">
                <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2 fill-current" />
                  Premium Dining Details
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3 group">
                    <Label htmlFor="date" className="text-red-800 font-medium">Preferred Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="border-2 border-red-200 focus:border-red-400 focus:ring-red-200 bg-white/80 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-3 group">
                    <Label htmlFor="time" className="text-red-800 font-medium">Preferred Time *</Label>
                    <Select onValueChange={(value) => handleInputChange('time', value)} required>
                      <SelectTrigger className="border-2 border-red-200 focus:border-red-400 bg-white/80 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent className="bg-white/95 backdrop-blur-sm border-2 border-red-200">
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="11:30">11:30 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="12:30">12:30 PM</SelectItem>
                        <SelectItem value="13:00">1:00 PM</SelectItem>
                        <SelectItem value="13:30">1:30 PM</SelectItem>
                        <SelectItem value="14:00">2:00 PM</SelectItem>
                        <SelectItem value="18:00">6:00 PM</SelectItem>
                        <SelectItem value="18:30">6:30 PM</SelectItem>
                        <SelectItem value="19:00">7:00 PM</SelectItem>
                        <SelectItem value="19:30">7:30 PM</SelectItem>
                        <SelectItem value="20:00">8:00 PM</SelectItem>
                        <SelectItem value="20:30">8:30 PM</SelectItem>
                        <SelectItem value="21:00">9:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3 group">
                    <Label htmlFor="guests" className="text-red-800 font-medium">Party Size *</Label>
                    <Select onValueChange={(value) => handleInputChange('guests', value)} required>
                      <SelectTrigger className="border-2 border-red-200 focus:border-red-400 bg-white/80 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300">
                        <SelectValue placeholder="Guests" />
                      </SelectTrigger>
                      <SelectContent className="bg-white/95 backdrop-blur-sm border-2 border-red-200">
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="5">5 Guests</SelectItem>
                        <SelectItem value="6">6 Guests</SelectItem>
                        <SelectItem value="7">7 Guests</SelectItem>
                        <SelectItem value="8">8 Guests</SelectItem>
                        <SelectItem value="9+">9+ Guests (Large Party)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200 transform hover:scale-102 transition-all duration-300">
                <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Special Preferences
                </h3>
                <div className="space-y-3 group">
                  <Label htmlFor="specialRequests" className="text-purple-800 font-medium">Special Requests (Optional)</Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    placeholder="Share your special dietary requirements, celebration details, or any special requests to make your experience extraordinary..."
                    className="min-h-[120px] border-2 border-purple-200 focus:border-purple-400 focus:ring-purple-200 bg-white/80 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700 text-white font-bold px-16 py-4 text-lg rounded-xl shadow-xl transform hover:scale-110 transition-all duration-300 border-2 border-amber-400"
                >
                  <Crown className="w-6 h-6 mr-3" />
                  Secure Premium Reservation
                  <Sparkles className="w-6 h-6 ml-3 animate-pulse" />
                </Button>
              </div>

              {/* Footer Notes */}
              <div className="text-center bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-xl border border-amber-200 space-y-2">
                <p className="text-amber-800 font-semibold">🌟 Premium Service Guarantee 🌟</p>
                <p className="text-amber-700">We'll contact you within 2 hours to confirm your reservation</p>
                <p className="text-amber-700">For immediate assistance, call us directly at your preferred location</p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reservations;
