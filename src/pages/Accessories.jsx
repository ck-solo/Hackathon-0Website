import React from "react"
import { Link } from "react-router-dom"
import ProductGrid from "../components/ProductGrid"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { getProductsByCategory } from "../data/products"
import { Brush, MonitorSpeaker, ShoppingBag } from "lucide-react"

const Accessories = () => {
  const accessories = getProductsByCategory("accessories")

  const categories = [
    {
      icon: Brush,
      title: "Brushes & Tools",
      description: "Professional-quality brushes for flawless application",
      count: 2
    },
    {
      icon: ShoppingBag,
      title: "Beauty Bags",
      description: "Stylish storage for all your Kylie Beauty essentials",
      count: 1
    },
    {
      icon: MonitorSpeaker,
      title: "Mirrors & Tech",
      description: "LED mirrors and high-tech beauty accessories",
      count: 1
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-kylie-brown-light/10 to-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-kylie-brown/90 to-kylie-nude/90 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200&h=600&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-kylie-brown/80 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-kylie-pink text-white mb-6 px-4 py-2">
            PROFESSIONAL TOOLS
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Beauty Accessories
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Professional tools and stylish accessories to complete your beauty
            routine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-kylie-brown hover:bg-kylie-nude-light px-8"
            >
              <Link to="/product/makeup-brush-set">Shop Brush Set</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-kylie-brown px-8"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Everything You Need
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From professional brushes to stylish storage solutions, our
              accessories help you apply and organize your beauty products like
              a pro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white shadow-sm border border-kylie-pink-light/20 hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-kylie-brown-light/20 rounded-full mb-4">
                  <category.icon className="h-8 w-8 text-kylie-brown" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                <Badge
                  variant="secondary"
                  className="bg-kylie-pink-light/20 text-kylie-pink-dark"
                >
                  {category.count}{" "}
                  {category.count === 1 ? "Product" : "Products"}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-kylie-nude-light/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-kylie-pink text-white mb-4">
                BESTSELLER
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Essential Brush Set
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our 12-piece professional brush set includes everything you need
                for face and eye makeup application. Each brush is crafted with
                synthetic bristles that work beautifully with both powder and
                liquid formulas.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-8">
                <li>• 12 professional-quality brushes</li>
                <li>• Synthetic, cruelty-free bristles</li>
                <li>• Rose gold ferrules with pink handles</li>
                <li>• Includes storage pouch</li>
              </ul>
              <Button
                asChild
                size="lg"
                className="bg-kylie-pink hover:bg-kylie-pink-dark text-white"
              >
                <Link to="/product/makeup-brush-set">Shop Now - $89</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square relative">
                <img
                  src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&h=500&fit=crop"
                  alt="Essential Brush Set"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kylie-brown/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid
            products={accessories}
            title="All Accessories"
            subtitle={`${accessories.length} essential tools for your beauty routine`}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-kylie-brown/10 to-kylie-nude/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Complete Your Setup
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Elevate your makeup game with professional tools designed to help
            you achieve flawless results every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-kylie-pink hover:bg-kylie-pink-dark text-white px-8"
            >
              <Link to="/product/makeup-brush-set">Shop Brush Set</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-kylie-pink text-kylie-pink hover:bg-kylie-pink hover:text-white px-8"
            >
              <Link to="/product/pink-makeup-bag">Shop Makeup Bag</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Accessories
