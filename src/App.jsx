import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Features from './components/Features'
import Logos from './components/Logos'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Solutions />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
