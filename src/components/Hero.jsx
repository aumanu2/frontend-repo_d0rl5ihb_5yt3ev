import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/90 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-gray-700 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse" />
            Introducing AI-MIR HR Analytics
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Turn People Data into Decisions
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="mt-5 text-lg text-gray-700 max-w-xl">
            AI-MIR delivers real-time insights across hiring, performance, and retention. Beautiful dashboards, predictive models, and automated reporting — all in one elegant platform.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-white text-sm font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow">
              Book a demo
            </a>
            <a href="#solutions" className="inline-flex items-center rounded-xl border border-black/10 bg-white/60 px-5 py-3 text-sm font-semibold text-gray-800 backdrop-blur hover:bg-white">
              See solutions
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.7 }} className="mt-10 flex items-center gap-6 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-orange-400" />
              <span>Enterprise-grade security</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
              <span>90-day ROI</span>
            </div>
          </motion.div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  )
}
