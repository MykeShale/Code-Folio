"use client"

import { Header } from "@/components/layout/Header"
import { PortfolioForm } from "@/components/builder/PortfolioForm"
import { PreviewPanel } from "@/components/builder/PreviewPanel"

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <Header />

      <div className="container mx-auto px-4 py-8 pt-24 relative">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Build Your
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Code Folio
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Create a stunning portfolio that showcases your skills and gets you noticed by top employers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <PortfolioForm />
          </div>

          <div className="lg:sticky lg:top-24 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <PreviewPanel />
          </div>
        </div>
      </div>
    </div>
  )
}
