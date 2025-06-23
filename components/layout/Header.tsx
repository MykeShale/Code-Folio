"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Terminal, Github, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return (
      <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="animate-pulse bg-slate-700 h-8 w-48 rounded"></div>
            <div className="animate-pulse bg-slate-700 h-8 w-32 rounded"></div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="transform hover:scale-105 transition-transform">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Terminal className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-pulse" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Code Folio
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "Builder", "Templates", "Docs"].map((item, index) => (
              <div key={item} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="relative text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  {item}
                  <div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 w-0 group-hover:w-full transition-all duration-300" />
                </Link>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="transform hover:scale-105 transition-transform">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                <Link href="https://github.com/MykeShale/code-folio">
                  <Github className="h-4 w-4 mr-2" />
                  Star Our GitHub
                </Link>
              </Button>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <Button
                size="sm"
                asChild
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
              >
                <Link href="/builder">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Get Started
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 transform hover:scale-95 transition-transform"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-slate-300" /> : <Menu className="h-6 w-6 text-slate-300" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700/50 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {["Home", "Builder", "Templates", "Docs"].map((item, index) => (
                <div key={item} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-slate-300 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
