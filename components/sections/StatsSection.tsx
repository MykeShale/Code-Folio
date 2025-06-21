"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const stats = [
  { number: 10000, suffix: "+", label: "Portfolios Created" },
  { number: 99, suffix: "%", label: "Uptime Guarantee" },
  { number: 50, suffix: "ms", label: "Average Load Time" },
  { number: 24, suffix: "/7", label: "Developer Support" },
]

function AnimatedNumber({ number, suffix }: { number: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < number) {
        setCount(Math.min(count + Math.ceil(number / 50), number))
      }
    }, 50)
    return () => clearTimeout(timer)
  }, [count, number])

  return (
    <span className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function StatsSection() {
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
            Trusted by
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Developers
            </span>
            <br />
            Worldwide
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-105">
                <div className="mb-4">
                  <AnimatedNumber number={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-slate-300 text-lg font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
