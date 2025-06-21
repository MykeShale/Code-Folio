"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Check, Copy, Terminal } from "lucide-react"

export function CodeShowcase() {
  const [copied, setCopied] = useState(false)

  const codeExample = `// Generate your portfolio with a single command
npx create-portfolio-builder my-portfolio

// Or use our visual builder
const portfolio = new PortfolioBuilder()
  .setTheme('cyberpunk')
  .addProject({
    name: 'AI Chat App',
    tech: ['React', 'Node.js', 'OpenAI'],
    github: 'https://github.com/user/ai-chat'
  })
  .deploy('github-pages')

console.log('🚀 Portfolio deployed successfully!')`

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Code Your Way to
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Success</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Whether you prefer visual builders or command-line interfaces, we've got you covered.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
            {/* Terminal header */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-800/50 border-b border-slate-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Terminal className="h-4 w-4" />
                <span className="text-sm font-mono">portfolio-builder</span>
              </div>
              <motion.button
                onClick={handleCopy}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-3 py-1 rounded-md bg-slate-700/50 hover:bg-slate-600/50 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-green-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-slate-400" />
                    <span className="text-sm text-slate-400">Copy</span>
                  </>
                )}
              </motion.button>
            </div>

            {/* Code content */}
            <div className="p-6">
              <pre className="text-sm font-mono text-slate-300 leading-relaxed overflow-x-auto">
                <code className="language-javascript">{codeExample}</code>
              </pre>
            </div>
          </div>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
