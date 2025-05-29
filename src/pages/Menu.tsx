
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crown, Sparkles, Star, Facebook, Instagram, Youtube } from 'lucide-react';

const Menu = () => {
  const [selectedBranch, setSelectedBranch] = useState('hamilton');

  const hamiltonMenu = {
    starters: [
      { name: 'Samosa (2 pcs)', description: 'Crispy pastry filled with spiced potatoes', price: '$8.50', type: 'veg', image: 'photo-1618160702438-9b02ab6515c9' },
      { name: 'Chicken Tikka', description: 'Marinated chicken pieces grilled to perfection', price: '$12.90', type: 'non-veg', image: 'photo-1721322800607-8c38375eef04' },
      { name: 'Paneer Pakora', description: 'Cottage cheese fritters with mint chutney', price: '$9.50', type: 'veg', image: 'photo-1472396961693-142e6e269027' }
    ],
    mains: [
      { name: 'Butter Chicken', description: 'Creamy tomato curry with tender chicken', price: '$18.90', type: 'non-veg', image: 'photo-1466721591366-2d5fba72006d' },
      { name: 'Dal Makhani', description: 'Slow-cooked black lentils in rich gravy', price: '$15.50', type: 'veg', image: 'photo-1493962853295-0fd70327578a' },
      { name: 'Lamb Rogan Josh', description: 'Aromatic lamb curry with Kashmiri spices', price: '$22.90', type: 'non-veg', image: 'photo-1618160702438-9b02ab6515c9' },
      { name: 'Palak Paneer', description: 'Cottage cheese in spiced spinach gravy', price: '$16.90', type: 'veg', image: 'photo-1721322800607-8c38375eef04' }
    ]
  };

  const papatoetoeMenu = {
    starters: [
      { name: 'Vegetable Samosa (2 pcs)', description: 'Crispy pastry filled with spiced vegetables', price: '$8.50', type: 'veg', image: 'photo-1472396961693-142e6e269027' },
      { name: 'Paneer Tikka', description: 'Marinated cottage cheese grilled with spices', price: '$11.90', type: 'veg', image: 'photo-1466721591366-2d5fba72006d' },
      { name: 'Aloo Tikki', description: 'Spiced potato patties with tamarind chutney', price: '$8.90', type: 'veg', image: 'photo-1493962853295-0fd70327578a' }
    ],
    mains: [
      { name: 'Chana Masala', description: 'Chickpeas in aromatic tomato-onion gravy', price: '$15.50', type: 'veg', image: 'photo-1618160702438-9b02ab6515c9' },
      { name: 'Vegetable Biryani', description: 'Fragrant basmati rice with mixed vegetables', price: '$17.90', type: 'veg', image: 'photo-1721322800607-8c38375eef04' },
      { name: 'Malai Kofta', description: 'Vegetable dumplings in creamy cashew curry', price: '$18.50', type: 'veg', image: 'photo-1472396961693-142e6e269027' },
      { name: 'Rajma Curry', description: 'Kidney beans in spiced tomato gravy', price: '$14.90', type: 'veg', image: 'photo-1466721591366-2d5fba72006d' }
    ]
  };

  const currentMenu = selectedBranch === 'hamilton' ? hamiltonMenu : papatoetoeMenu;

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
              <a href="/" className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Halwai
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Section */}
        <div className="text-center mb-12 transform hover:scale-105 transition-all duration-500">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <Crown className="w-12 h-12 text-amber-500 animate-bounce" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Our Exquisite Menu
            </h1>
            <Crown className="w-12 h-12 text-amber-500 animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Branch Selection */}
        <div className="text-center mb-12">
          <div className="flex justify-center space-x-6 mb-8">
            <Button
              onClick={() => setSelectedBranch('hamilton')}
              className={`px-8 py-4 text-lg font-semibold rounded-xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl ${
                selectedBranch === 'hamilton' 
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-2xl scale-105' 
                  : 'bg-white/90 text-amber-700 border-2 border-amber-400 hover:bg-amber-50'
              }`}
            >
              <Crown className="w-5 h-5 mr-2" />
              Hamilton Branch (Veg & Non-Veg)
            </Button>
            <Button
              onClick={() => setSelectedBranch('papatoetoe')}
              className={`px-8 py-4 text-lg font-semibold rounded-xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl ${
                selectedBranch === 'papatoetoe' 
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-2xl scale-105' 
                  : 'bg-white/90 text-green-700 border-2 border-green-400 hover:bg-green-50'
              }`}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Papatoetoe Branch (Pure Vegetarian)
            </Button>
          </div>
        </div>

        {/* Online Ordering */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-amber-800 mb-6 flex items-center justify-center">
            <Star className="w-8 h-8 mr-3 text-amber-500" />
            Order Online
            <Star className="w-8 h-8 ml-3 text-amber-500" />
          </h2>
          <div className="flex justify-center space-x-6">
            <Button className="bg-gradient-to-r from-slate-800 to-slate-900 text-white hover:from-slate-900 hover:to-black px-10 py-4 text-lg font-semibold rounded-xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl">
              Order on Uber Eats
            </Button>
            <Button className="bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 px-10 py-4 text-lg font-semibold rounded-xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl">
              Order on DoorDash
            </Button>
          </div>
        </div>

        {/* Menu Sections */}
        <div className="space-y-16">
          {/* Starters */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent flex items-center justify-center">
              <Crown className="w-10 h-10 mr-4 text-amber-500" />
              Premium Starters
              <Crown className="w-10 h-10 ml-4 text-amber-500" />
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentMenu.starters.map((item, index) => (
                <Card key={index} className="group overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-white/95 to-amber-50/90 backdrop-blur-sm border-2 border-amber-200 rounded-2xl">
                  <div className="h-56 relative overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=400&h=300`}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <Sparkles className="absolute top-4 right-4 w-6 h-6 text-amber-400 animate-pulse" />
                  </div>
                  <CardContent className="p-6 relative">
                    <div className="absolute -top-4 right-6">
                      <Badge 
                        variant={item.type === 'veg' ? 'default' : 'destructive'} 
                        className={`px-4 py-2 text-sm font-semibold rounded-full shadow-lg ${
                          item.type === 'veg' 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' 
                            : 'bg-gradient-to-r from-red-500 to-red-600 text-white'
                        }`}
                      >
                        {item.type === 'veg' ? '🌿 VEG' : '🍖 NON-VEG'}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-amber-900 mb-3 group-hover:text-amber-700 transition-colors">{item.name}</h3>
                    <p className="text-amber-700 text-sm mb-4 leading-relaxed">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">{item.price}</span>
                      <Button size="sm" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold px-6 py-2 rounded-xl transform transition-all duration-300 hover:scale-110 shadow-lg">
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Main Courses */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent flex items-center justify-center">
              <Crown className="w-10 h-10 mr-4 text-amber-500" />
              Signature Main Courses
              <Crown className="w-10 h-10 ml-4 text-amber-500" />
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentMenu.mains.map((item, index) => (
                <Card key={index} className="group overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-white/95 to-amber-50/90 backdrop-blur-sm border-2 border-amber-200 rounded-2xl">
                  <div className="h-56 relative overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=400&h=300`}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <Crown className="absolute top-4 right-4 w-6 h-6 text-amber-400 animate-pulse" />
                  </div>
                  <CardContent className="p-6 relative">
                    <div className="absolute -top-4 right-6">
                      <Badge 
                        variant={item.type === 'veg' ? 'default' : 'destructive'} 
                        className={`px-4 py-2 text-sm font-semibold rounded-full shadow-lg ${
                          item.type === 'veg' 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' 
                            : 'bg-gradient-to-r from-red-500 to-red-600 text-white'
                        }`}
                      >
                        {item.type === 'veg' ? '🌿 VEG' : '🍖 NON-VEG'}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-amber-900 mb-3 group-hover:text-amber-700 transition-colors">{item.name}</h3>
                    <p className="text-amber-700 text-sm mb-4 leading-relaxed">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">{item.price}</span>
                      <Button size="sm" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold px-6 py-2 rounded-xl transform transition-all duration-300 hover:scale-110 shadow-lg">
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Social Media Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-amber-100 to-orange-100 p-8 rounded-2xl border-2 border-amber-200">
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

export default Menu;
