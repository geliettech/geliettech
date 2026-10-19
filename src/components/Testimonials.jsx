import { recommendations } from "../constants/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";


const Testimonials = () => {
  return (
    <section id="testimonials" className="section-shell">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <header className="mb-12 text-left md:mb-14">
          <p className="section-kicker">Kind words</p>
          <h2 className="section-title">
            What people <span className="text-primary">say</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
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
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 text-left shadow-sm transition hover:shadow-lg md:p-8">
                <p className="text-base leading-8 text-muted-foreground md:text-lg">“{rec.message}”</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-foreground">{rec.name}</p>
                  <p className="mt-1 text-xs font-medium text-primary">{rec.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;