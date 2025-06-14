
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Leaf, Brain, Utensils, Dumbbell, Moon, BookOpen } from 'lucide-react';

const Wellness = () => {
  const healthTips = [
    {
      i: '1',
      title: 'Stay Hydrated',
      description: 'Drink at least 8 glasses of water daily to maintain optimal body function.',
      category: 'General',
      icon: <Heart className="w-5 h-5" />
    },
    {
      id: '2',
      title: 'Regular Exercise',
      description: '30 minutes of moderate exercise daily can significantly improve your health.',
      category: 'Fitness',
      icon: <Dumbbell className="w-5 h-5" />
    },
    {
      id: '3',
      title: 'Quality Sleep',
      description: 'Aim for 7-9 hours of quality sleep each night for better recovery.',
      category: 'Sleep',
      icon: <Moon className="w-5 h-5" />
    }
  ];

  const homeRemedies = [
    {
      id: '1',
      title: 'Honey and Ginger for Cough',
      ingredients: ['2 tsp honey', '1 tsp fresh ginger juice', 'Warm water'],
      instructions: 'Mix honey and ginger juice in warm water. Drink twice daily.',
      condition: 'Cough & Cold'
    },
    {
      id: '2',
      title: 'Turmeric Milk for Immunity',
      ingredients: ['1 cup warm milk', '1/2 tsp turmeric powder', 'Pinch of black pepper'],
      instructions: 'Mix all ingredients and drink before bedtime.',
      condition: 'Immunity Boost'
    },
    {
      id: '3',
      title: 'Lemon Water for Digestion',
      ingredients: ['1 lemon', '1 glass warm water', 'Optional: honey'],
      instructions: 'Squeeze lemon in warm water, add honey if desired. Drink on empty stomach.',
      condition: 'Digestion'
    }
  ];

  const articles = [
    {
      id: '1',
      title: 'Understanding Mental Health: Breaking the Stigma',
      excerpt: 'Mental health is just as important as physical health. Learn how to recognize signs and seek help.',
      category: 'Mental Health',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop'
    },
    {
      id: '2',
      title: 'Nutrition Basics: Building a Balanced Diet',
      excerpt: 'Discover the fundamentals of nutrition and how to create meals that nourish your body.',
      category: 'Nutrition',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=200&fit=crop'
    },
    {
      id: '3',
      title: 'Exercise for Beginners: Starting Your Fitness Journey',
      excerpt: 'Simple exercises and tips to help you start your fitness journey safely and effectively.',
      category: 'Fitness',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Wellness & Knowledge Hub</h1>
          <p className="text-gray-600">Your guide to a healthier, happier lifestyle</p>
        </div>

        <Tabs defaultValue="health-tips" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="health-tips">Health Tips</TabsTrigger>
            <TabsTrigger value="home-remedies">Home Remedies</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="daily-quote">Daily Quote</TabsTrigger>
          </TabsList>

          <TabsContent value="health-tips" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {healthTips.map((tip) => (
                <Card key={tip.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          {tip.icon}
                        </div>
                        <CardTitle className="text-lg">{tip.title}</CardTitle>
                      </div>
                      <Badge variant="outline">{tip.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Tips Section */}
            <Card className="bg-gradient-to-r from-blue-50 to-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-600" />
                  Daily Wellness Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Drink 8 glasses of water</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Exercise for 30 minutes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Eat 5 servings of fruits/vegetables</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Get 7-8 hours of sleep</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Practice mindfulness/meditation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Take breaks from screen time</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="home-remedies" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {homeRemedies.map((remedy) => (
                <Card key={remedy.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{remedy.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">{remedy.condition}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Ingredients:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {remedy.ingredients.map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Instructions:</h4>
                      <p className="text-sm text-gray-600">{remedy.instructions}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-800 flex items-center gap-2">
                  ⚠️ Important Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-700 text-sm">
                  Home remedies are for general wellness and should not replace professional medical advice. 
                  Always consult a healthcare provider for serious health conditions or before trying new treatments.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="articles" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {articles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="aspect-video bg-gray-200 relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{article.category}</Badge>
                      <span className="text-xs text-gray-500">{article.readTime}</span>
                    </div>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{article.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="daily-quote" className="space-y-6">
            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-purple-900">Daily Health Quote</CardTitle>
                <CardDescription>Inspiration for your wellness journey</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <blockquote className="text-xl italic text-purple-800 mb-4">
                  "Health is not about the weight you lose, but about the life you gain."
                </blockquote>
                <p className="text-purple-600">- Unknown</p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-blue-600" />
                    Mental Health Corner
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Take a moment to check in with yourself. How are you feeling today?
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm">🧘‍♀️ Try a 5-minute meditation</p>
                    <p className="text-sm">📱 Limit social media today</p>
                    <p className="text-sm">🌱 Practice gratitude</p>
                    <p className="text-sm">🤗 Connect with a friend</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-green-600" />
                    Nutrition Spotlight
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Today's superfood: <strong>Blueberries</strong>
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>• Rich in antioxidants</p>
                    <p>• Supports brain health</p>
                    <p>• Boosts immune system</p>
                    <p>• Great for heart health</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Wellness;
