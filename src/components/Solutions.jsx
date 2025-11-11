import { motion } from 'framer-motion'
import { BarChart3, Users, Brain, Sparkles } from 'lucide-react'

const items = [
  {
    icon: BarChart3,
    title: 'Workforce Intelligence',
    desc: 'Track headcount, attrition, hiring funnel, and DEI KPIs with real-time, filterable dashboards.'
  },
  {
    icon: Brain,
    title: 'Predictive Retention',
    desc: 'Spot churn risk early and act with data-backed interventions using explainable AI.'
  },
  {
    icon: Users,
    title: 'Performance Analytics',
    desc: 'Uncover drivers of high performance and align goals with compensation outcomes.'
  },
  {
    icon: Sparkles,
    title: 'Automated Reporting',
    desc: 'Turn monthly reporting into a single click with branded exports and scheduled summaries.'
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/60 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold">
            Built for modern People teams
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-3 text-gray-700 max-w-2xl mx-auto">
            Everything you need to move from manual spreadsheets to proactive, AI-powered decisions.
          </motion.p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur hover:shadow-xl">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white grid place-items-center shadow-md shadow-purple-500/30">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-700">{desc}</p>
              <div className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
