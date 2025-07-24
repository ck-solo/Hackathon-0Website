import React from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Star, Heart, ShoppingBag } from "lucide-react"

const Index = () => {
  const featuredProducts = [
    {
      id: "kylie-lip-kit-dolce-k",
      name: "Lip Kit - Dolce K",
      price: 29,
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
      badge: "BESTSELLER",
      category: "lipsticks"
    },
    {
      id: "glow-serum",
      name: "Kylie Glow Serum",
      price: 42,
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
      badge: "NEW",
      category: "skincare"
    },
    {
      id: "makeup-brush-set",
      name: "Essential Brush Set",
      price: 89,
      image:
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop",
      badge: "LIMITED",
      category: "accessories"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-kylie-pink-light/30 via-kylie-nude-light to-kylie-peach-light/40">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=800&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <Badge className="bg-kylie-pink text-white px-4 py-1 text-sm font-medium">
                  NEW ARRIVAL
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-kylie-pink via-kylie-coral to-kylie-pink-dark bg-clip-text text-transparent">
                    Glow Bold
                  </span>
                  <br />
                  <span className="text-foreground">in 2025</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-lg">
                  with Kylie Beauty
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-kylie-coral text-kylie-coral"
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground">
                    Loved by 2M+ customers
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="bg-kylie-pink hover:bg-kylie-pink-dark text-white px-8 py-3 text-lg"
                  >
                    <Link to="/lipsticks">Shop Now</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-kylie-pink text-kylie-pink hover:bg-kylie-pink hover:text-white px-8 py-3 text-lg"
                  >
                    <Link to="/about">Our Story</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero Product */}
            <div className="relative">
              <div
                className="relative group cursor-pointer"
                onClick={() =>
                  (window.location.href = "/product/peach-mango-lip-butter")
                }
              >
                <div className="absolute inset-0 bg-gradient-to-r from-kylie-pink/20 to-kylie-coral/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
                <Card className="relative bg-white/80 backdrop-blur-sm border-kylie-pink-light/30 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="aspect-square relative mb-6">
                      <img
                        src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=500&fit=crop"
                        alt="Peach Mango Lip Butter"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                      <Badge className="absolute top-4 left-4 bg-kylie-coral text-white">
                        FEATURED
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">
                          Peach Mango Lip Butter
                        </h3>
                        <p className="text-muted-foreground">
                          Ultra-nourishing lip treatment with tropical twist
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-kylie-pink">
                          $24
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-muted-foreground">
                            4.9
                          </span>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map(star => (
                              <Star
                                key={star}
                                className="h-4 w-4 fill-kylie-coral text-kylie-coral"
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      <Button className="w-full bg-kylie-pink hover:bg-kylie-pink-dark text-white">
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-kylie-nude-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Beauty Must-Haves
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the products that made Kylie Beauty a global phenomenon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <Card
                key={product.id}
                className="group cursor-pointer bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-kylie-pink-light/20"
              >
                <CardContent className="p-6">
                  <div className="aspect-square relative mb-4 overflow-hidden rounded-xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <Badge className="absolute top-3 left-3 bg-kylie-pink text-white">
                      {product.badge}
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-kylie-pink transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-kylie-pink">
                        ${product.price}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-kylie-pink text-kylie-pink hover:bg-kylie-pink hover:text-white"
                      >
                        <Link to={`/product/${product.id}`}>View</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-kylie-pink text-kylie-pink hover:bg-kylie-pink hover:text-white px-8"
            >
              <Link to="/lipsticks">Shop All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-kylie-pink to-kylie-coral text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Beauty Revolution
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Be the first to know about new launches, exclusive offers, and
            beauty tips from Kylie herself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-kylie-pink hover:bg-kylie-nude-light px-8"
            >
              <Link to="/signup">Create Account</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-kylie-pink px-8"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index
