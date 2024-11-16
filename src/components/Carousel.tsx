"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "Edward Hisley",
    position: "Chief Marketing Officer",
    quote: "I have been using pagedone for several months now, and I must say that it has made my life a lot easier. The platform's intuitive interface and ease of use have allowed me to manage my finances more effectively and make informed investment decisions. I particularly like the product's auto-tracking feature, which has saved me a lot of time and effort",
    backgroundImage:
      'url("https://img.freepik.com/fotos-premium/vista-rascacielos-abajo_9493-4976.jpg")',
  },
  {
    name: "Jane Doe",
    position: "CEO",
    quote: "This platform has transformed the way we handle our finances...",
    backgroundImage:
      'url("https://static.casadomo.com/media/2019/10/bloom-holding-plataforma-edificios-inteligentes-iot-implementacion.png")',
  },
  {
    name: "John Smith",
    position: "Developer",
    quote: "Amazing tools for project management!",
    backgroundImage:
      'url("https://st3.depositphotos.com/3498197/13535/i/450/depositphotos_135354900-stock-photo-downtown-manhattan-skycrapers.jpg")',
  },
];

const CoverflowCarousel = () => {
  return (
    <div className="w-full my-8 mx-auto">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-[80%] h-[20rem] sm:h-[22rem] md:h-[24rem] lg:w-[90%] lg:h-[30rem]"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: testimonial.backgroundImage,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="p-8 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg text-white flex flex-col justify-end"
          >
            <div className="lg:mx-20 lg:flex lg:flex-col lg:justify-center lg:h-full lg:items-start">
              <p className="mt-4 text-lg font-bold lg:mb-3 lg:text-xl">{testimonial.name}</p>
              <p className="text-sm lg:mb-12">{testimonial.position}</p>
              <div className="overflow-hidden text-ellipsis h-40">

                <p className="text-lg">{testimonial.quote}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CoverflowCarousel;
