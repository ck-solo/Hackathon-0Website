import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Home, Search, Heart } from "lucide-react"

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kylie-pink-light/20 via-kylie-nude-light to-kylie-peach-light/30 flex items-center justify-center px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-kylie-pink/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-kylie-coral/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-md">
        {/* 404 Text */}
        <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-kylie-pink to-kylie-coral bg-clip-text text-transparent mb-4">
          404
        </div>

        {/* Error Message */}
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Oops! Page Not Found
        </h1>

        <p className="text-lg text-muted-foreground mb-8">
          This page seems to have vanished like your favorite lipstick. Let's
          get you back to finding your perfect beauty match!
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button
            asChild
            size="lg"
            className="w-full bg-kylie-pink hover:bg-kylie-pink-dark text-white"
          >
            <Link to="/" className="flex items-center justify-center space-x-2">
              <Home className="h-5 w-5" />
              <span>Go Home</span>
            </Link>
          </Button>

          <div className="grid grid-cols-2 gap-3">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-kylie-pink text-kylie-pink hover:bg-kylie-pink hover:text-white"
            >
              <Link
                to="/lipsticks"
                className="flex items-center justify-center space-x-2"
              >
                <Search className="h-4 w-4" />
                <span>Shop Lips</span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-kylie-coral text-kylie-coral hover:bg-kylie-coral hover:text-white"
            >
              <Link
                to="/skincare"
                className="flex items-center justify-center space-x-2"
              >
                <Heart className="h-4 w-4" />
                <span>Skincare</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Popular Links */}
        <div className="mt-12 pt-8 border-t border-kylie-pink-light/20">
          <p className="text-sm text-muted-foreground mb-4">
            Popular destinations:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              to="/lipsticks"
              className="text-kylie-pink hover:text-kylie-pink-dark transition-colors"
            >
              Lipsticks
            </Link>
            <Link
              to="/skincare"
              className="text-kylie-pink hover:text-kylie-pink-dark transition-colors"
            >
              Skincare
            </Link>
            <Link
              to="/accessories"
              className="text-kylie-pink hover:text-kylie-pink-dark transition-colors"
            >
              Accessories
            </Link>
            <Link
              to="/about"
              className="text-kylie-pink hover:text-kylie-pink-dark transition-colors"
            >
              About Kylie
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
