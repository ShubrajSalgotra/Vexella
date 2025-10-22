import React from "react";
import hero from "../assets/mix-hero.svg";

const Home = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white"
    >

      <div
        aria-hidden
        className="pointer-events-none absolute -top-36 -left-36 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl sm:h-96 sm:w-96 sm:bg-blue-200/30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-36 h-80 w-80 rounded-full bg-sky-200/20 blur-3xl sm:h-[28rem] sm:w-[28rem] sm:bg-sky-200/30"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
        <div className="min-h-[82vh] py-8 sm:py-10 lg:py-0 flex flex-col-reverse lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-14">

          <div className="w-full lg:w-5/12 text-center lg:text-left">
            <p className="text-blue-700/70 text-sm font-semibold tracking-wide mb-2 sm:mb-3">
              Vexella Pharmaceuticals Pvt Ltd
            </p>

            <h1 className="text-[26px] leading-[1.2] sm:text-[34px] sm:leading-tight md:text-5xl font-bold mb-3 sm:mb-4">
              Your <span className="text-blue-600">Health</span>, Our Commitment
            </h1>

            <p className="mx-auto lg:mx-0 max-w-[34ch] sm:max-w-[48ch] text-slate-600 text-[15px] sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-6">
              Vexella Pharmaceuticals combines innovative research with ethical
              practices to develop effective, accessible medications. Our
              commitment to honest science and patient care drives us to create
              treatments that truly improve lives.
            </p>

            <a
              href="#product"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-blue-700 active:scale-[.99] transition"
            >
              Products <span className="ml-2">→</span>
            </a>
          </div>

          <div className="w-full lg:w-7/12 flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-xl">
              <div
                aria-hidden
                className="absolute -inset-8 -z-10 rounded-[28px] bg-gradient-to-tr from-blue-100/35 via-transparent to-sky-100/35 blur-2xl"
              />
              <div className="aspect-[5/4] sm:aspect-[4/3] overflow-hidden rounded-[20px]">
                <img
                  src={hero}
                  alt="Vexella products"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(120% 95% at 50% 50%, black 74%, transparent 100%)",
                    maskImage:
                      "radial-gradient(120% 95% at 50% 50%, black 74%, transparent 100%)",
                  }}
                />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-slate-200/60 shadow-[0_8px_24px_rgba(2,6,23,0.06)]"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
