"use client"

import Link from "next/link"
import { Github, Twitter, Instagram, Heart, Terminal, Mail, ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const socialLinks = [
    { icon: Github, href: "https://github.com/MykeShale/code-folio", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/mykeshale", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/mykeshale", label: "Instagram" },
  ]

  const productLinks = [
    { href: "/builder", label: "Code Folio Builder" },
    { href: "/templates", label: "Templates" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
  ]

  const resourceLinks = [
    { href: "/docs", label: "Documentation" },
    { href: "/blog", label: "Blog" },
    { href: "/support", label: "Support" },
    { href: "/changelog", label: "Changelog" },
  ]

  const companyLinks = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ]

  return (
    <footer className="relative bg-slate-900 border-t border-slate-700/50 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 mb-16 animate-fade-in">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-6">
              <Sparkles className="h-4 w-4 mr-2 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-medium">Stay Updated</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Get the latest updates from
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Code Folio
              </span>
            </h3>
            <p className="text-slate-300 mb-8">
              Be the first to know about new templates, features, and developer resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in-up">
            <div className="flex items-center space-x-2 group">
              <div className="relative">
                <Terminal className="h-10 w-10 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-pulse" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Code Folio
              </span>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed max-w-md">
              Create stunning portfolio websites in minutes with our powerful, developer-focused tool. Transform your
              skills into professional showcases that get you noticed.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <div key={social.label} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Link
                    href={social.href}
                    className="group relative p-3 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-110"
                    onMouseEnter={() => setHoveredLink(social.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <social.icon className="h-5 w-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                    {hoveredLink === social.label && (
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded-md whitespace-nowrap animate-fade-in">
                        {social.label}
                      </div>
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="flex items-center space-x-3 text-slate-300">
              <Mail className="h-5 w-5 text-cyan-400" />
              <span>hello@codefolio.dev</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={link.href} className="animate-fade-in-up" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    <ArrowRight className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={link.href} className="animate-fade-in-up" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    <ArrowRight className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={link.href} className="animate-fade-in-up" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    <ArrowRight className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-slate-400">
              <p className="text-sm">© 2024 Code Folio. All rights reserved.</p>
              <div className="flex items-center gap-4 text-xs">
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                  Privacy
                </Link>
                <span>•</span>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                  Terms
                </Link>
                <span>•</span>
                <Link href="/cookies" className="hover:text-cyan-400 transition-colors">
                  Cookies
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-sm animate-fade-in-up">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>by</span>
              <Link
                href="https://github.com/MykeShale"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                Mike Ayoti
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyan-400/5 font-mono text-xs animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            >
              {["</>", "{}", "[]", "=>", "&&", "||", "fn()", "var", "let", "const"][Math.floor(Math.random() * 10)]}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
