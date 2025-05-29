
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Crown, Sparkles, Star, Facebook, Instagram, Youtube } from 'lucide-react';

const Feedback = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    feedbackType: '',
    branch: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    toast({
      title: "Thank you for your feedback!",
      description: "Your feedback helps us improve our service.",
    });
    // Reset form
    setFormData({
      name: '',
      contact: '',
      feedbackType: '',
      branch: '',
      comment: ''
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
              Share Your Feedback
            </h1>
            <Crown className="w-12 h-12 text-amber-500 animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-xl text-amber-800 font-medium">We value your opinion and use your feedback to improve our service</p>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        <Card className="shadow-2xl bg-gradient-to-br from-white/95 to-amber-50/90 backdrop-blur-sm border-2 border-amber-200 rounded-2xl transform hover:scale-105 transition-all duration-500">
          <CardHeader className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-orange-100/50 rounded-t-2xl"></div>
            <CardTitle className="relative text-3xl text-center bg-gradient-to-r from-amber-700 via-orange-600 to-red-600 bg-clip-text text-transparent flex items-center justify-center">
              <Star className="w-8 h-8 mr-3 text-amber-500 fill-current" />
              Customer Feedback Form
              <Star className="w-8 h-8 ml-3 text-amber-500 fill-current" />
            </CardTitle>
          </CardHeader>
          <CardContent className="relative p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3 group">
                    <Label htmlFor="name" className="text-amber-800 font-medium">Your Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      placeholder="Enter your name"
                      className="border-2 border-amber-200 focus:border-amber-400 focus:ring-amber-200 bg-white/80 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-3 group">
                    <Label htmlFor="contact" className="text-amber-800 font-medium">Contact (Optional)</Label>
                    <Input
                      id="contact"
                      type="text"
                      value={formData.contact}
                      onChange={(e) => handleInputChange('contact', e.target.value)}
                      placeholder="Email or phone number"
                      className="border-2 border-amber-200 focus:border-amber-400 focus:ring-amber-200 bg-white/80 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3 group">
                    <Label htmlFor="feedbackType" className="text-orange-800 font-medium">Type of Feedback *</Label>
                    <Select onValueChange={(value) => handleInputChange('feedbackType', value)} required>
                      <SelectTrigger className="border-2 border-orange-200 focus:border-orange-400 bg-white/80 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300">
                        <SelectValue placeholder="Select feedback type" />
                      </SelectTrigger>
                      <SelectContent className="bg-white/95 backdrop-blur-sm border-2 border-orange-200">
                        <SelectItem value="compliment">Compliment</SelectItem>
                        <SelectItem value="suggestion">Suggestion</SelectItem>
                        <SelectItem value="complaint">Complaint</SelectItem>
                        <SelectItem value="food-quality">Food Quality</SelectItem>
                        <SelectItem value="service">Service</SelectItem>
                        <SelectItem value="cleanliness">Cleanliness</SelectItem>
                        <SelectItem value="pricing">Pricing</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3 group">
                    <Label htmlFor="branch" className="text-orange-800 font-medium">Which Branch?</Label>
                    <Select onValueChange={(value) => handleInputChange('branch', value)}>
                      <SelectTrigger className="border-2 border-orange-200 focus:border-orange-400 bg-white/80 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300">
                        <SelectValue placeholder="Select branch (if applicable)" />
                      </SelectTrigger>
                      <SelectContent className="bg-white/95 backdrop-blur-sm border-2 border-orange-200">
                        <SelectItem value="hamilton">Hamilton Branch</SelectItem>
                        <SelectItem value="papatoetoe">Papatoetoe Branch</SelectItem>
                        <SelectItem value="both">Both Branches</SelectItem>
                        <SelectItem value="general">General Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border border-red-200">
                <div className="space-y-3 group">
                  <Label htmlFor="comment" className="text-red-800 font-medium">Your Feedback *</Label>
                  <Textarea
                    id="comment"
                    value={formData.comment}
                    onChange={(e) => handleInputChange('comment', e.target.value)}
                    required
                    placeholder="Please share your detailed feedback, suggestions, or experience with us..."
                    className="min-h-[150px] border-2 border-red-200 focus:border-red-400 focus:ring-red-200 bg-white/80 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="text-center">
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700 text-white font-bold px-16 py-4 text-lg rounded-xl shadow-xl transform hover:scale-110 transition-all duration-300 border-2 border-amber-400"
                >
                  <Crown className="w-6 h-6 mr-3" />
                  Submit Feedback
                  <Sparkles className="w-6 h-6 ml-3 animate-pulse" />
                </Button>
              </div>

              <div className="text-center bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-xl border border-amber-200 space-y-2">
                <p className="text-amber-800 font-semibold">* Required fields</p>
                <p className="text-amber-700">Your feedback is important to us and helps us serve you better</p>
                <p className="text-amber-700">If you've provided contact information, we may reach out to follow up</p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <Card className="shadow-2xl bg-gradient-to-br from-white/95 to-amber-50/90 backdrop-blur-sm border-2 border-amber-200 rounded-2xl transform hover:scale-105 transition-all duration-500">
            <CardHeader>
              <CardTitle className="text-xl text-amber-600 flex items-center justify-center">
                <Crown className="w-5 h-5 mr-2" />
                Other Ways to Reach Us:
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold text-amber-800">Hamilton Branch:</h4>
                <p className="text-amber-700">(07) 123-4567</p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800">Papatoetoe Branch:</h4>
                <p className="text-amber-700">(09) 987-6543</p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800">Email:</h4>
                <p className="text-amber-700">feedback@halwai.co.nz</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-2xl bg-gradient-to-br from-white/95 to-green-50/90 backdrop-blur-sm border-2 border-green-200 rounded-2xl transform hover:scale-105 transition-all duration-500">
            <CardHeader>
              <CardTitle className="text-xl text-green-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 mr-2" />
                Follow Us:
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-green-700">Stay connected with us on social media for updates, special offers, and more!</p>
              <div className="flex space-x-4">
                <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transform hover:scale-110 transition-all duration-300">
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
                <Button variant="outline" className="border-2 border-pink-600 text-pink-600 hover:bg-pink-50 transform hover:scale-110 transition-all duration-300">
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
                <Button variant="outline" className="border-2 border-red-600 text-red-600 hover:bg-red-50 transform hover:scale-110 transition-all duration-300">
                  <Youtube className="w-4 h-4 mr-2" />
                  YouTube
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
