import { motion } from 'framer-motion'
import { ShieldCheck, Layers, LineChart, Zap } from 'lucide-react'

const features = [
  {
    icon: LineChart,
    title: 'Real-time Insights',
    desc: 'Live metrics stream from your HRIS, ATS, and payroll systems with no manual effort.'
  },
  {
    icon: Layers,
    title: 'Unified Data Model',
    desc: 'Clean, deduplicated, and governed HR data with lineage, ownership, and access controls.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    desc: 'SSO, SOC 2, GDPR, role-based access, encryption at rest and in transit.'
  },
  {
    icon: Zap,
    title: 'Fast Time-to-Value',
    desc: 'Out-of-the-box dashboards and templates get you to ROI in weeks, not quarters.'
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold">
              A beautiful analytics experience
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-3 text-gray-700">
              From executive scorecards to drill-down funnels, explore your people data with smooth, tactile interactions, and export-ready visuals.
            </motion.p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} className="rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white grid place-items-center shadow">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-3 font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-gray-700">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="aspect-[16/10] rounded-3xl border border-black/10 bg-white/70 p-4 backdrop-blur shadow-2xl">
              <div className="h-full w-full rounded-2xl bg-gradient-to-br from-purple-100 via-blue-100 to-orange-100" />
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl bg-gradient-to-br from-purple-400 to-blue-400 blur-2xl opacity-40" />
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-2xl bg-gradient-to-br from-orange-400 to-fuchsia-400 blur-2xl opacity-40" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
