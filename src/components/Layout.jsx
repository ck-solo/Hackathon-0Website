import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, ShoppingBag, User } from "lucide-react"
import { Button } from "./ui/button"

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Lipsticks", href: "/lipsticks" },
    { name: "Skincare", href: "/skincare" },
    { name: "Accessories", href: "/accessories" },
    { name: "About", href: "/about" }
  ]

  const isActive = path => {
    if (path === "/" && location.pathname === "/") return true
    if (path !== "/" && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-kylie-pink-light/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-kylie-pink to-kylie-coral bg-clip-text text-transparent">
                KYLIE BEAUTY
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-kylie-pink border-b-2 border-kylie-pink"
                      : "text-foreground hover:text-kylie-pink"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/login" className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link
                  to="/signup"
                  className="bg-kylie-pink hover:bg-kylie-pink-dark"
                >
                  Sign Up
                </Link>
              </Button>
              <Button variant="ghost" size="sm">
                <ShoppingBag className="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-kylie-pink-light/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-kylie-pink bg-kylie-pink-light/10"
                      : "text-foreground hover:text-kylie-pink hover:bg-kylie-pink-light/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-kylie-pink-light/20 pt-3 mt-3">
                <Link
                  to="/login"
                  className="block px-3 py-2 text-sm font-medium text-foreground hover:text-kylie-pink"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 text-sm font-medium text-kylie-pink"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="min-h-screen">{children}</main>

      {/* Footer */}
      <footer className="bg-kylie-nude-light border-t border-kylie-pink-light/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-kylie-pink to-kylie-coral bg-clip-text text-transparent mb-4">
                KYLIE BEAUTY
              </div>
              <p className="text-muted-foreground text-sm max-w-md">
                Empowering beauty lovers with accessible, high-performance
                cosmetics that look and feel luxurious.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    to="/lipsticks"
                    className="hover:text-kylie-pink transition-colors"
                  >
                    Lipsticks
                  </Link>
                </li>
                <li>
                  <Link
                    to="/skincare"
                    className="hover:text-kylie-pink transition-colors"
                  >
                    Skincare
                  </Link>
                </li>
                <li>
                  <Link
                    to="/accessories"
                    className="hover:text-kylie-pink transition-colors"
                  >
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-kylie-pink transition-colors"
                  >
                    About Kylie
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Account</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    to="/login"
                    className="hover:text-kylie-pink transition-colors"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="hover:text-kylie-pink transition-colors"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-kylie-pink-light/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Kylie Beauty. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
