export default function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} AI-MIR Analytics. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Security</a>
          <a href="#" className="hover:text-gray-900">Terms</a>
        </div>
      </div>
    </footer>
  )
}
