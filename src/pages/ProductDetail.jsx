import React, { useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Separator } from "../components/ui/separator"
import { getProductById, getProductsByCategory } from "../data/products"
import ProductGrid from "../components/ProductGrid"
import {
  Star,
  Heart,
  ShoppingBag,
  Share2,
  ChevronLeft,
  Truck,
  Shield,
  RefreshCw
} from "lucide-react"

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedShade, setSelectedShade] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const product = id ? getProductById(id) : null

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Product Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            The product you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </div>
    )
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4)
  const images = product.images || [product.image]

  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $35"
    },
    {
      icon: Shield,
      title: "Authentic Products",
      description: "100% genuine Kylie Beauty"
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description: "30-day return policy"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-kylie-nude-light/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link
              to="/"
              className="text-muted-foreground hover:text-kylie-pink transition-colors"
            >
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              to={`/${product.category}`}
              className="text-muted-foreground hover:text-kylie-pink transition-colors capitalize"
            >
              {product.category}
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-muted-foreground hover:text-kylie-pink"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-2xl bg-kylie-nude-light/20">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <Badge
                  className={`absolute top-4 left-4 text-white ${
                    product.badge === "NEW"
                      ? "bg-kylie-coral"
                      : product.badge === "BESTSELLER"
                      ? "bg-kylie-pink"
                      : product.badge === "LIMITED"
                      ? "bg-kylie-brown"
                      : product.badge === "SALE"
                      ? "bg-red-500"
                      : "bg-kylie-pink-dark"
                  }`}
                >
                  {product.badge}
                </Badge>
              )}
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? "border-kylie-pink"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= Math.floor(product.rating)
                          ? "fill-kylie-coral text-kylie-coral"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-kylie-pink">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Tags */}
              {product.tags && product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map(tag => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-kylie-pink-light/20 text-kylie-pink-dark border-0"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <Separator />

            {/* Shade Selection */}
            {product.shades && product.shades.length > 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Choose Shade: {product.shades[selectedShade]}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.shades.map((shade, index) => (
                    <button
                      key={shade}
                      onClick={() => setSelectedShade(index)}
                      className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                        selectedShade === index
                          ? "border-kylie-pink bg-kylie-pink text-white"
                          : "border-gray-200 bg-white text-foreground hover:border-kylie-pink"
                      }`}
                    >
                      {shade}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Quantity
              </h3>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <span className="text-lg font-medium w-12 text-center">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full bg-kylie-pink hover:bg-kylie-pink-dark text-white"
                disabled={!product.inStock}
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-kylie-pink text-kylie-pink hover:bg-kylie-pink hover:text-white"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Wishlist
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-kylie-nude-light/20"
                >
                  <feature.icon className="h-5 w-5 text-kylie-pink" />
                  <div>
                    <div className="font-medium text-sm text-foreground">
                      {feature.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-kylie-nude-light/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProductGrid
              products={relatedProducts}
              title="You Might Also Like"
              subtitle={`More ${product.category} from Kylie Beauty`}
            />
          </div>
        </section>
      )}
    </div>
  )
}

export default ProductDetail
