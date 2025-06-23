"use client"

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, Download, Share, Monitor, Smartphone, Tablet } from "lucide-react"
import { useState } from "react"

export function PreviewPanel() {
  const [viewMode, setViewMode] = useState<"desktop" | "tablet" | "mobile">("desktop")

  const viewModes = [
    { key: "desktop", icon: Monitor, label: "Desktop" },
    { key: "tablet", icon: Tablet, label: "Tablet" },
    { key: "mobile", icon: Smartphone, label: "Mobile" },
  ]

  return (
    <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden h-fit animate-fade-in">
      <CardHeader className="bg-slate-800/50 border-b border-slate-700/50">
        <CardTitle className="flex items-center gap-2 text-white">
          <Eye className="h-5 w-5 text-cyan-400" />
          Live Preview
        </CardTitle>

        {/* View mode selector */}
        <div className="flex gap-2 mt-4">
          {viewModes.map(({ key, icon: Icon, label }) => (
            <button
              key={key}
              onClick={() => setViewMode(key as any)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all transform hover:scale-105 ${
                viewMode === key
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                  : "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        {/* Preview Area */}
        <div className="relative">
          <div
            className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700/50 overflow-hidden transition-all duration-300 ${
              viewMode === "desktop"
                ? "aspect-video"
                : viewMode === "tablet"
                  ? "aspect-[4/5] max-w-md mx-auto"
                  : "aspect-[9/16] max-w-xs mx-auto"
            }`}
          >
            {/* Browser chrome for desktop */}
            {viewMode === "desktop" && (
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center">
                  <div className="bg-slate-700 rounded px-3 py-1 text-xs text-slate-400 inline-block">
                    yourname.github.io
                  </div>
                </div>
              </div>
            )}

            {/* Preview content */}
            <div className="p-6 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                  <Eye className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">Preview Coming Soon</h3>
                <p className="text-slate-400 text-sm mb-2">Live preview functionality</p>
                <p className="text-slate-500 text-xs">Feature in development</p>

                {/* Animated dots */}
                <div className="flex justify-center gap-1 mt-4">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <div className="transform hover:scale-102 transition-transform">
            <Button
              variant="outline"
              size="sm"
              disabled
              className="w-full border-slate-600 text-slate-400 hover:bg-slate-800/50"
            >
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
          <div className="transform hover:scale-102 transition-transform">
            <Button
              variant="outline"
              size="sm"
              disabled
              className="w-full border-slate-600 text-slate-400 hover:bg-slate-800/50"
            >
              <Share className="h-4 w-4 mr-2" />
              Deploy
            </Button>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Development Progress</span>
            <span className="text-cyan-400">In Progress</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full w-[25%] animate-pulse" />
          </div>
          <p className="text-xs text-slate-500 text-center">Export and deployment features coming soon</p>
        </div>
      </CardContent>
    </div>
  )
}
