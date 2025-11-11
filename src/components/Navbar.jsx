import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Features', href: '#features' },
    { name: 'Customers', href: '#customers' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/60 dark:bg-black/30 border border-white/30 rounded-2xl shadow-[0_8px_40px_-12px_rgba(31,38,135,0.37)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-orange-400 grid place-items-center text-white shadow-lg">
                <Sparkles size={18} />
              </div>
              <span className="text-lg font-semibold tracking-tight">AI-MIR</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-gray-900">Contact</a>
              <a href="#contact" className="inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-white text-sm font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow">
                Book a demo
              </a>
            </div>

            <button className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/50 backdrop-blur p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a key={item.name} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm hover:bg-white/60">
                    {item.name}
                  </a>
                ))}
                <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-white text-sm font-semibold shadow-lg shadow-purple-500/25">
                  Book a demo
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
