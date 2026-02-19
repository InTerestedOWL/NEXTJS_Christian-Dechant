"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Title from "@/app/components/shared/title";

export default function CustomerTestimonials() {
  const testimonials = [
    {
      name: "Caroline Grabowski",
      role: "JagdTausch",
      image: "/jagdtausch_company.jpg",
      text: "Great collaboration — always reliable, punctual, and passionate about his work. He took his time with everything and did a fantastic job!"
    },
    /* {
       name: "Philipp Werdecker",
       role: "CEO, VirtualShift",
       image: "/",
       text: "Super Zusammenarbeit – immer zuverlässig, pünktlich und mit viel Herz bei der Sache. Er hat sich für alles Zeit genommen und tolle Arbeit geleistet!"
     },*/
    {
      name: "Student representation for the specialization in sensor technology, actuator technology, and electronics at Darmstadt Technical University",
      role: "Students",
      image: "",
      text: "Competent advice and reliable implementation of customer-specific requirements!"
    }

  ];

  return (
    <div
      className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
      style={ { backgroundImage: `url(experience-figure.png)` } }
      id="testimonials"
    >
      <div className="container">
        <Title
          title={ 'What my customers say' }
          subtitle={ 'Here is what my Customers say about my work' }
          text=""></Title>

        <Swiper
          modules={ [ Navigation, Pagination, Autoplay ] }
          spaceBetween={ 30 }
          slidesPerView={ 1 }
          navigation
          pagination={ { clickable: true } }
          autoplay={ { delay: 5000 } }
          loop
          className="pb-12 mb-4"
        >
          { testimonials.map((testimonial, index) => (
            <SwiperSlide key={ index }>
              <div className="mx-auto max-w-md rounded-2xl bg-white p-8 text-center shadow-md">
                { testimonial.image !== '' ? <Image
                  src={ testimonial.image }
                  alt={ testimonial.name }
                  width={ 80 }
                  height={ 80 }
                  className="mx-auto mb-4 h-20 w-20 rounded-full object-cover"
                /> : <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-200">
                  <i className="bx bxs-user text-4xl text-gray-400"></i>
                </div> }
                <p className="text-grey-dark mb-4 text-lg italic">
                  “{ testimonial.text }”
                </p>
                <h4 className="font-body text-lg font-bold text-primary">
                  { testimonial.name }
                </h4>
                <span className="text-sm text-gray-500">{ testimonial.role }</span>
              </div>
            </SwiperSlide>
          )) }
        </Swiper>
      </div>
    </div>
  );
}
