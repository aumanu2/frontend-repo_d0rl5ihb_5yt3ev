export default function Logos() {
  const logos = ['Aurora', 'Nimbus', 'Quanta', 'Vertex', 'Helix', 'Pulse']
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center">
        <p className="text-xs uppercase tracking-wider text-gray-500">Trusted by forward-thinking teams</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {logos.map((name) => (
            <div key={name} className="h-10 rounded-xl border border-black/10 bg-white/70 backdrop-blur grid place-items-center text-sm font-semibold text-gray-700">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
