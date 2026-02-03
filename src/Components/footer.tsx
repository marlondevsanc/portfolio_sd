export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-700 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Logo */}
        <h2 className="text-2xl font-bold font-juana text-gray-900">Sinfonía Digital</h2>
        
        {/* Descripción */}
        <p className="mt-3 text-sm max-w-md font-juana">
          Diseñamos experiencias digitales, combinando creatividad y estrategia 
          para que tu marca destaque en el mundo online.
        </p>

        {/* Línea inferior */}
        <div className="border-t border-gray-300 mt-6 font-juana pt-4 text-xs text-gray-500 w-full">
          © {new Date().getFullYear()} Sinfonía Digital — Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
