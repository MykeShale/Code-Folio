"use client"

import { motion } from "framer-motion"
import {
  Terminal,
  Smartphone,
  Zap,
  Save,
  Download,
  Globe,
  BarChart3,
  Share2,
  ImageIcon,
  Moon,
  Github,
  Eye,
  Rocket,
} from "lucide-react"

const features = [
  {
    icon: Terminal,
    title: "Developer-First Interface",
    description: "Intuitive form interface designed specifically for developers who value efficiency",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Eye,
    title: "Premium Templates",
    description: "Professionally crafted templates that showcase your skills with modern design",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Real-Time Preview",
    description: "Watch your portfolio come to life with instant visual feedback as you build",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Moon,
    title: "Advanced Theming",
    description: "Dark/light modes with customizable color schemes and typography options",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive layouts that look stunning on every device and screen size",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: Github,
    title: "Git Integration",
    description: "Seamless GitHub Pages deployment with automatic CI/CD pipeline setup",
    gradient: "from-gray-500 to-slate-500",
  },
  {
    icon: Save,
    title: "Smart Auto-Save",
    description: "Never lose your progress with intelligent local storage and cloud sync",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Download,
    title: "Export & Deploy",
    description: "Download static files or deploy instantly to multiple hosting platforms",
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "SEO Optimized",
    description: "Built-in SEO best practices, meta tags, and social media optimization",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    icon: BarChart3,
    title: "Analytics Integration",
    description: "Track portfolio performance with Google Analytics and custom metrics",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Share2,
    title: "Social Integration",
    description: "Connect all your social profiles with beautiful, interactive link displays",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: ImageIcon,
    title: "Asset Optimization",
    description: "Automatic image compression and WebP conversion for lightning-fast loading",
    gradient: "from-orange-500 to-red-500",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Dominate
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Packed with cutting-edge features designed by developers, for developers. Build portfolios that stand out in
            today's competitive landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-500 h-full">
                <div className="relative mb-6">
                  <div
                    className={`bg-gradient-to-r ${feature.gradient} p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                    initial={false}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Build Something Amazing?</h3>
            <p className="text-slate-300 mb-8 text-lg">
              Join thousands of developers who've already created stunning portfolios with our platform.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300"
            >
              <Rocket className="inline-block mr-2 h-5 w-5" />
              Start Building Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
