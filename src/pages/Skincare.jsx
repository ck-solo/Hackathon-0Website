import React from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { getProductsByCategory } from '../data/products';
import { Sparkles, Heart, Leaf } from 'lucide-react';

const Skincare = () => {
  const skincareProducts = getProductsByCategory('skincare');

  const benefits = [
    {
      icon: Sparkles,
      title: 'Radiant Glow',
      description: 'Achieve that signature Kylie glow with vitamin-enriched formulas',
    },
    {
      icon: Heart,
      title: 'Gentle Care',
      description: 'Nourishing ingredients that love your skin as much as you do',
    },
    {
      icon: Leaf,
      title: 'Clean Beauty',
      description: 'Formulated without harsh chemicals for healthier skin',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-kylie-nude-light/20 to-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-kylie-nude/90 to-kylie-peach/90 text-foreground overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&h=600&fit=crop')] bg-cover bg-center opacity-30"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-kylie-nude/80 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-kylie-pink text-white mb-6 px-4 py-2">NEW SKINCARE LINE</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Kylie Skin</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Gentle, effective skincare that gives you the perfect canvas for makeup
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-kylie-pink hover:bg-kylie-pink-dark text-white px-8">
              <Link to="/product/glow-serum">Try Glow Serum</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-kylie-pink text-kylie-pink hover:bg-kylie-pink hover:text-white px-8"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Skincare That Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our skincare line is designed to prep, protect, and perfect your skin for any look.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white shadow-sm border border-kylie-pink-light/20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-kylie-pink-light/20 rounded-full mb-4">
                  <benefit.icon className="h-8 w-8 text-kylie-pink" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Introduction */}
      <section className="py-16 bg-kylie-nude-light/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Your Daily Glow Routine</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From gentle cleansers to hydrating serums, our skincare collection is formulated to work seamlessly
            with your makeup routine. Each product is designed to enhance your natural beauty while providing the
            perfect base for flawless makeup application.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid
            products={skincareProducts}
            title="Complete Skincare Collection"
            subtitle={`${skincareProducts.length} products for your perfect skincare routine`}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-kylie-pink/10 to-kylie-coral/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Start Your Glow Journey</h2>
          <p className="text-lg text-muted-foreground mb-8">
            New to skincare? Begin with our bestselling Kylie Glow Serum for instant radiance.
          </p>
          <Button asChild size="lg" className="bg-kylie-pink hover:bg-kylie-pink-dark text-white px-8">
            <Link to="/product/glow-serum">Shop Glow Serum - $42</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Skincare;
