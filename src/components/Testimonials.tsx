import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import Quote from "./Quote";

import { TestimonialsData } from "@/data/data";

const Testimonials = () => {
  const { heading, content, testimonials } = TestimonialsData();
  const options = {
    type: "loop",
    gap: "1rem",
    pagination: false,
    autoplay: true,
    interval: 5000,
    pauseOnHover: false,
    resetProgress: false,
  };
  return (
    <section className="isolate overflow-hidden bg-white px-6 lg:px-8">
      <div className="relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-4xl">
        <div className="absolute top-0 left-1/2 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,var(--color-indigo-100),white)] opacity-20 lg:left-36" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center" />
        <div className="text-center">
          <h2 className="text-indigo-700">{heading}</h2>
          {content}
        </div>
        <Splide
          options={options}
          tag="section"
          hasTrack={false}
          aria-label="Read testimonials"
        >
          <SplideTrack>
            {testimonials?.map((testimonial) => (
              <SplideSlide key={testimonial.name}>
                <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
                  <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
                    <Quote />
                    <blockquote className="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                      <p>{testimonial.quote}</p>
                    </blockquote>
                  </div>
                  <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
                    <img
                      alt=""
                      src={testimonial.image}
                      className="rounded-xl bg-indigo-50 lg:rounded-3xl shadow-blue"
                    />
                  </div>
                  <figcaption className="text-base lg:col-start-1 lg:row-start-3">
                    <div className="font-semibold text-indigo-700">
                      {testimonial.name}
                    </div>
                    <div className="mt-1 text-zinc-400">
                      {testimonial.title}
                    </div>
                  </figcaption>
                </figure>
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
            <button className="splide__arrow splide__arrow--next text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </Splide>
      </div>
    </section>
  );
};

export default Testimonials;
