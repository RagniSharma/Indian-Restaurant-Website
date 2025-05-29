
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, Sparkles, Star, Facebook, Instagram, Youtube } from 'lucide-react';

const About = () => {
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
              About Halwai
            </h1>
            <Crown className="w-12 h-12 text-amber-500 animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-xl text-amber-800 font-medium">
            Bringing authentic Indian flavors to New Zealand with passion, tradition, and love
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <Card className="shadow-2xl bg-gradient-to-br from-white/95 to-amber-50/90 backdrop-blur-sm border-2 border-amber-200 rounded-2xl transform hover:scale-105 transition-all duration-500">
            <CardContent className="p-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6 text-center flex items-center justify-center">
                <Star className="w-8 h-8 mr-3 text-amber-500 fill-current" />
                Our Story
                <Star className="w-8 h-8 ml-3 text-amber-500 fill-current" />
              </h2>
              <div className="prose prose-lg mx-auto text-amber-800 space-y-6 leading-relaxed">
                <p>
                  Founded with a deep passion for authentic Indian cuisine, Halwai began as a dream to bring the rich, 
                  diverse flavors of India to the beautiful communities of New Zealand. Our name "Halwai" traditionally 
                  refers to confectioners and sweet makers in Indian culture, reflecting our commitment to creating 
                  delightful culinary experiences.
                </p>
                <p>
                  What started as a family recipe collection has grown into two thriving restaurants, each carefully 
                  designed to serve the unique preferences of our local communities. Our Hamilton branch offers a 
                  comprehensive menu featuring both vegetarian and non-vegetarian dishes, while our Papatoetoe location 
                  specializes exclusively in vegetarian cuisine.
                </p>
                <p>
                  Every dish we serve is prepared with traditional cooking methods, authentic spices imported directly 
                  from India, and fresh local ingredients. We believe that food is not just sustenance, but a way to 
                  bring people together and share the warmth of Indian hospitality.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent flex items-center justify-center">
            <Crown className="w-10 h-10 mr-4 text-amber-500" />
            Meet Our Team
            <Crown className="w-10 h-10 ml-4 text-amber-500" />
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-2xl bg-gradient-to-br from-white/95 to-amber-50/90 backdrop-blur-sm border-2 border-amber-200 rounded-2xl transform hover:scale-105 transition-all duration-500">
              <CardContent className="p-6">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=200&h=200&crop=face"
                    alt="Chef Rajesh Kumar"
                    className="w-28 h-28 rounded-full object-cover border-4 border-amber-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Chef Rajesh Kumar</h3>
                <p className="text-amber-600 font-medium mb-3 flex items-center justify-center">
                  <Crown className="w-4 h-4 mr-1" />
                  Head Chef & Owner
                </p>
                <p className="text-amber-700 text-sm">
                  With over 20 years of culinary experience in India and New Zealand, Chef Rajesh brings authentic 
                  flavors and innovative techniques to every dish.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-2xl bg-gradient-to-br from-white/95 to-green-50/90 backdrop-blur-sm border-2 border-green-200 rounded-2xl transform hover:scale-105 transition-all duration-500">
              <CardContent className="p-6">
                <div className="w-32 h-32 bg-gradient-to-br from-green-200 to-emerald-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=200&h=200&crop=face"
                    alt="Priya Sharma"
                    className="w-28 h-28 rounded-full object-cover border-4 border-green-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-2">Priya Sharma</h3>
                <p className="text-green-600 font-medium mb-3 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 mr-1" />
                  Operations Manager
                </p>
                <p className="text-green-700 text-sm">
                  Priya ensures every customer receives exceptional service while maintaining the high standards 
                  that Halwai is known for across both locations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-2xl bg-gradient-to-br from-white/95 to-blue-50/90 backdrop-blur-sm border-2 border-blue-200 rounded-2xl transform hover:scale-105 transition-all duration-500">
              <CardContent className="p-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=200&h=200&crop=face"
                    alt="Arjun Patel"
                    className="w-28 h-28 rounded-full object-cover border-4 border-blue-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Arjun Patel</h3>
                <p className="text-blue-600 font-medium mb-3 flex items-center justify-center">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  Sous Chef
                </p>
                <p className="text-blue-700 text-sm">
                  Specializing in traditional vegetarian cuisine, Arjun creates innovative plant-based dishes 
                  that honor time-tested Indian cooking traditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent flex items-center justify-center">
            <Sparkles className="w-10 h-10 mr-4 text-amber-500" />
            Our Values
            <Sparkles className="w-10 h-10 ml-4 text-amber-500" />
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center shadow-2xl bg-gradient-to-br from-white/95 to-amber-50/90 backdrop-blur-sm border-2 border-amber-200 rounded-2xl transform hover:scale-105 transition-all duration-500">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Authenticity</h3>
                <p className="text-amber-700 text-sm">Traditional recipes and cooking methods passed down through generations</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-2xl bg-gradient-to-br from-white/95 to-green-50/90 backdrop-blur-sm border-2 border-green-200 rounded-2xl transform hover:scale-105 transition-all duration-500">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">Quality</h3>
                <p className="text-green-700 text-sm">Fresh ingredients and highest standards in every dish we prepare</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-2xl bg-gradient-to-br from-white/95 to-blue-50/90 backdrop-blur-sm border-2 border-blue-200 rounded-2xl transform hover:scale-105 transition-all duration-500">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Community</h3>
                <p className="text-blue-700 text-sm">Building connections and serving our local New Zealand communities</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-2xl bg-gradient-to-br from-white/95 to-purple-50/90 backdrop-blur-sm border-2 border-purple-200 rounded-2xl transform hover:scale-105 transition-all duration-500">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Hospitality</h3>
                <p className="text-purple-700 text-sm">Warm, welcoming service that makes every guest feel like family</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="mb-16">
          <Card className="shadow-2xl bg-gradient-to-r from-amber-600 to-red-600 text-white border-2 border-amber-400 rounded-2xl transform hover:scale-105 transition-all duration-500">
            <CardContent className="p-8 text-center">
              <h2 className="text-4xl font-bold mb-6 flex items-center justify-center">
                <Crown className="w-10 h-10 mr-4" />
                Our Commitment to You
                <Crown className="w-10 h-10 ml-4" />
              </h2>
              <p className="text-lg mb-6 max-w-4xl mx-auto leading-relaxed">
                At Halwai, we're committed to providing an exceptional dining experience that celebrates the rich 
                culinary heritage of India while embracing the diverse, multicultural spirit of New Zealand. 
                Whether you're dining in our restaurants, ordering for delivery, or planning a special event with 
                our catering services, we promise to deliver authentic flavors, warm hospitality, and memories 
                that will last a lifetime.
              </p>
              <p className="text-xl font-semibold flex items-center justify-center">
                <Sparkles className="w-6 h-6 mr-2" />
                Thank you for being part of the Halwai family! 🙏
                <Sparkles className="w-6 h-6 ml-2" />
              </p>
            </CardContent>
          </Card>
        </section>

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

export default About;
