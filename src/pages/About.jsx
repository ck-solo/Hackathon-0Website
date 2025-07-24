import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Award,
  Sparkles,
  Heart,
  Globe,
  TrendingUp,
  Star
} from "lucide-react"

const About = () => {
  const timeline = [
    {
      year: "2015",
      title: "The Birth of an Empire",
      description:
        "Kylie Jenner launched her beauty empire with a simple lip kit. Within minutes, the collection sold out — proving the power of influencer-led branding in the digital era.",
      icon: Sparkles,
      color: "bg-kylie-pink"
    },
    {
      year: "2018",
      title: "Global Expansion",
      description:
        "Kylie Cosmetics expanded internationally, bringing the iconic lip kits and growing product line to beauty lovers worldwide.",
      icon: Globe,
      color: "bg-kylie-coral"
    },
    {
      year: "2020",
      title: "Skincare Revolution",
      description:
        "Kylie Skin launched, extending the brand into skincare with gentle, effective formulas designed to create the perfect canvas for makeup.",
      icon: Heart,
      color: "bg-kylie-nude"
    },
    {
      year: "2023",
      title: "Brand Evolution",
      description:
        "A complete rebrand focused on inclusivity, sustainability, and innovation, establishing Kylie Beauty as a leader in modern cosmetics.",
      icon: TrendingUp,
      color: "bg-kylie-brown"
    }
  ]

  const achievements = [
    {
      icon: Users,
      number: "50M+",
      label: "Global Customers",
      description: "Beauty lovers worldwide"
    },
    {
      icon: Award,
      number: "200+",
      label: "Beauty Awards",
      description: "Industry recognition"
    },
    {
      icon: Star,
      number: "4.8/5",
      label: "Customer Rating",
      description: "Average product score"
    },
    {
      icon: Globe,
      number: "40+",
      label: "Countries",
      description: "Worldwide availability"
    }
  ]

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Los Angeles, CA",
      text:
        "Kylie Beauty completely transformed my makeup routine. The lip kits are absolutely incredible!",
      rating: 5
    },
    {
      name: "Emma L.",
      location: "New York, NY",
      text:
        "I've been using Kylie Skin for months and my complexion has never looked better. The glow serum is magic!",
      rating: 5
    },
    {
      name: "Ashley K.",
      location: "Miami, FL",
      text:
        "The brush set is professional quality and the pink handles are so cute. Worth every penny!",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-kylie-pink/90 to-kylie-coral/90 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=600&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-kylie-pink/80 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white text-kylie-pink mb-6 px-4 py-2">
                THE KYLIE STORY
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Kylie Jenner
              </h1>
              <h2 className="text-2xl md:text-3xl mb-6 opacity-90">
                The Brand, The Empire
              </h2>
              <p className="text-xl leading-relaxed opacity-90 mb-8">
                From a simple lip kit to a global beauty empire, discover the
                story behind one of the most influential beauty brands of our
                time.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-kylie-pink hover:bg-kylie-nude-light"
              >
                <Link to="/lipsticks">Shop the Legacy</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square relative">
                <img
                  src="https://images.unsplash.com/photo-1594736797933-d0051ba2fe65?w=500&h=500&fit=crop"
                  alt="Kylie Jenner"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kylie-pink/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              The Journey to Beauty Empire
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-xl">
                <strong className="text-foreground">
                  Kylie Jenner launched her beauty empire in 2015 with a simple
                  lip kit.
                </strong>{" "}
                Within days, the collection sold out — proving the power of
                influencer-led branding in the digital era.
              </p>

              <p>
                Since then, Kylie Cosmetics has grown into a global makeup
                powerhouse. From matte lipsticks to luminous highlighters and
                skincare essentials, Kylie's product line reflects her personal
                flair and loyal fanbase.
              </p>

              <p>
                <strong className="text-kylie-pink">Her mission:</strong> To
                empower beauty lovers with accessible, high-performance
                cosmetics that look and feel luxurious.
              </p>

              <p>
                Kylie's branding combines powerful aesthetics, social media
                marketing, and irresistible products that capture global
                attention. The journey from influencer to business mogul is now
                a model for 21st-century entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-kylie-nude-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Legacy in the Making
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From startup to global empire, follow the key moments that shaped
              Kylie Beauty
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-kylie-pink-light/30 hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <Card className="bg-white shadow-lg border-kylie-pink-light/20">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div
                            className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center`}
                          >
                            <item.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-kylie-pink">
                              {item.year}
                            </div>
                            <div className="text-lg font-semibold text-foreground">
                              {item.title}
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div
                    className={`hidden md:flex w-6 h-6 ${item.color} rounded-full border-4 border-white shadow-lg z-10`}
                  ></div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              By the Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The impact of Kylie Beauty speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center bg-white shadow-lg border-kylie-pink-light/20 hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-kylie-pink-light/20 rounded-full mb-4">
                    <achievement.icon className="h-8 w-8 text-kylie-pink" />
                  </div>
                  <div className="text-3xl font-bold text-kylie-pink mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-r from-kylie-pink/10 to-kylie-coral/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real reviews from beauty lovers around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg border-kylie-pink-light/20"
              >
                <CardContent className="p-6">
                  <div className="flex space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-kylie-coral text-kylie-coral"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-kylie-pink to-kylie-coral text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be Part of the Story
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions of beauty lovers who trust Kylie Beauty for their
            everyday glow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-kylie-pink hover:bg-kylie-nude-light px-8"
            >
              <Link to="/lipsticks">Shop Bestsellers</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-kylie-pink px-8"
            >
              <Link to="/signup">Join the Community</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
