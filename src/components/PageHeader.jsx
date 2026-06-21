// Shared header for inner pages (Why Choose Us, FAQ, Privacy, Terms).
// `subtitle` and `meta` are optional. `meta` renders pill badges (e.g.
// "Last updated …", "5 min read") — pass `{ icon, label }` per item.
export default function PageHeader({ title, subtitle, meta = [] }) {
  return (
    <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 pt-32 pb-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-blue-200">
            {subtitle}
          </p>
        )}
        {meta.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
            {meta.map(({ icon: Icon, label }, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-blue-100 backdrop-blur-sm"
              >
                {Icon && <Icon className="h-4 w-4" />}
                {label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
