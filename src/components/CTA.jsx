import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/60 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-4xl px-6 sm:px-8 text-center">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold">
          Ready to elevate your People analytics?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-3 text-gray-700">
          Get a personalized walkthrough of AI-MIR. We’ll tailor the demo to your data and metrics.
        </motion.p>

        <motion.form initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 grid sm:grid-cols-3 gap-3">
          <input type="text" placeholder="Full name" className="sm:col-span-1 col-span-3 rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-500/40" />
          <input type="email" placeholder="Work email" className="sm:col-span-1 col-span-3 rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-500/40" />
          <button className="sm:col-span-1 col-span-3 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-white text-sm font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow">
            Request demo
          </button>
        </motion.form>
        <p className="mt-3 text-xs text-gray-500">By submitting, you agree to our privacy policy.</p>
      </div>
    </section>
  )
}
