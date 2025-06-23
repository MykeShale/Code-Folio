"use client"

import Link from "next/link"
import { ArrowRight, Code2, Sparkles, Terminal, Zap, Globe, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const codeSnippet = `const portfolio = {
  name: "Your Name",
  role: "Full Stack Developer",
  skills: ["React", "Node.js", "TypeScript"],
  deploy: () => "One click to live!"
}`

  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-slate-700 rounded mb-8 max-w-md mx-auto"></div>
              <div className="h-16 bg-slate-700 rounded mb-8"></div>
              <div className="h-32 bg-slate-700 rounded mb-8 max-w-2xl mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Floating code elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/10 font-mono text-sm animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          >
            {["</>", "{}", "[]", "=>", "&&", "||"][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-sm mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 mr-2 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">Professional Code Folio Builder</span>
          </div>

          {/* Main heading with typewriter effect */}
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-4xl lg:text-7xl font-bold mb-4">
              <span className="text-white">Build </span>
              <TypewriterEffect
                words={["Stunning", "Professional", "Modern", "Responsive"]}
                className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              />
              <br />
              <span className="text-white">Portfolios in </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Minutes
              </span>
            </h1>
          </div>

          {/* Code preview */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-slate-400 text-sm ml-4 font-mono">portfolio.js</span>
            </div>
            <pre className="text-left text-sm font-mono text-slate-300 leading-relaxed">
              <code>{codeSnippet}</code>
            </pre>
          </div>

          {/* Subheading */}
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            A powerful, developer-focused tool that transforms your skills into stunning portfolio websites. No design
            experience required—just pure code elegance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up">
            <div className="transform hover:scale-105 transition-transform">
              <Button
                size="lg"
                asChild
                className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 shadow-lg shadow-cyan-500/25"
              >
                <Link href="/builder">
                  <Terminal className="mr-2 h-5 w-5" />
                  Start Building
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 py-4 border-slate-600 text-slate-300 hover:bg-slate-800/50 backdrop-blur-sm"
              >
                <Link href="/demo">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </Button>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Build in minutes, not hours" },
              { icon: Globe, title: "One-Click Deploy", desc: "Deploy to GitHub Pages instantly" },
              { icon: Code2, title: "Developer First", desc: "Built by developers, for developers" },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${1.4 + index * 0.2}s` }}
              >
                <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-3 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </section>
  )
}
