import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { videos } from '../data/videos';

export default function ReelsCarousel() {
    return (
        <section className="py-10 px-6">
            <h2 className="font-juana text-3xl font-bold text-center mb-10">
                Producción de Reels
            </h2>
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {videos.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative flex justify-center">
                            {/* Contenedor tipo reel */}
                            <div className="w-64 h-[360px] md:w-72 md:h-[400px] lg:w-80 lg:h-[450px] rounded-xl overflow-hidden shadow-lg bg-gray-900 relative">

                                {/* Info arriba, logo + texto */}
                                <div className="absolute top-3 left-3 bg-gray-500/90 text-white flex items-center gap-2 px-2 py-1 rounded-lg max-w-[calc(100%-1rem)]">
                                    {item.logo && (
                                        <img
                                            src={item.logo}
                                            alt={item.title + ' logo'}
                                            className="w-6 h-6 md:w-7 md:h-7 object-contain rounded-full flex-shrink-0"
                                            loading='lazy'
                                        />
                                    )}
                                    <span className="font-juana font-semibold text-sm md:text-base lg:text-lg truncate">{item.title}</span>
                                </div>

                                {/* Video */}
                                <video
                                    src={item.src}
                                    className="w-full h-full object-cover"
                                    controls
                                ></video>

                            </div>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </section>
    );
}
