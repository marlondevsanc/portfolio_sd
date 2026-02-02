'use client';
import { useState } from 'react';
import PortfolioCarousel from '../Components/portfoliocarousel';
import { portfolio } from '../data/portfolio';

const services = [
  {
    key: 'redes',
    title: 'Gestión de Redes Sociales',
    description:
      'Creamos contenido pensado para conectar, comunicar y construir marca.'
  },
  {
    key: 'portafolio1',
    title: 'Producción Audiovisual',
    description:
      'Transformamos cada instante en contenido visual memorable, con una mirada estética y estratégica.'
  },
  {
    key: 'portafolio2',
    title: 'Eventos & Sesiones',
    description:
      'Capturamos momentos reales con sensibilidad, cuidando cada detalle.'
  }
];

export default function PortfolioLayout() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="py-20 px-6">
      {/* Header */}
      <h2 className="font-juana text-3xl font-bold text-center mb-2">
        Portafolio
      </h2>
      <p className="font-juana text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Proyectos reales, marcas reales y contenido creado con intención.
      </p>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-12 flex-wrap">
        {services.map(service => (
          <button
            key={service.key}
            onClick={() => setActiveService(service)}
            className={`font-juana px-4 py-2 border-b-2 transition-all ${activeService.key === service.key
                ? 'border-black text-black'
                : 'border-transparent text-gray-400 hover:text-black'
              }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <PortfolioCarousel
        items={portfolio}
        tipo={activeService.key}
      />
    </section>
  );
}
