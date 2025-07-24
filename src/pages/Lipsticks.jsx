import React from "react"
import { Link } from "react-router-dom"
import ProductGrid from "../components/ProductGrid"
import { Button } from "../components/ui/button"
import { getProductsByCategory } from "../data/products"

const Lipsticks = () => {
  const lipsticks = getProductsByCategory("lipsticks")

  return (
    <div className="min-h-screen bg-gradient-to-b from-kylie-pink-light/10 to-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-kylie-pink/90 to-kylie-coral/90 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=1200&h=600&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-kylie-pink/80 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Lip Collection
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            From matte liquid lipsticks to glossy treatments, find your perfect
            lip companion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-kylie-pink hover:bg-kylie-nude-light px-8"
            >
              <Link to="/product/kylie-lip-kit-dolce-k">Shop Bestseller</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-kylie-pink px-8"
            >
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Category Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Lip Kit That Started It All
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our signature lip collection features everything from the iconic
            matte liquid lipsticks that made Kylie Beauty famous to nourishing
            lip butters and high-shine glosses. Each formula is carefully
            crafted to deliver bold color, long-lasting wear, and the perfect
            finish for any look.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid
            products={lipsticks}
            title="All Lip Products"
            subtitle={`${lipsticks.length} products to help you create the perfect pout`}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-kylie-nude-light/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Can't Decide? Start With the Classics
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            New to Kylie Beauty? Our bestselling lip kits are the perfect
            introduction to our world of beauty.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-kylie-pink hover:bg-kylie-pink-dark text-white px-8"
          >
            <Link to="/product/kylie-lip-kit-dolce-k">
              Shop Lip Kit - Dolce K
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Lipsticks
