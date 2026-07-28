import { recommendations } from "../constants/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";


const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 relative">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <header className="mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Testi<span className="text-primary">monials</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Discover what clients, business owners, and team members are saying about their experience working with me.
          </p>
        </header>
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 24 },
          }}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="pb-10"
        >
          {recommendations.map((rec) => (
            <SwiperSlide
              key={rec.id} className="h-full">
              <div
                className="h-full flex flex-col justify-between bg-card p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{rec.message}</p>
                <p className="mt-6 text-right text-primary font-semibold text-sm md:text-base">— {rec.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;