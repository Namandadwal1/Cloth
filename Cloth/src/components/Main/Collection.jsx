import React from "react";

function Collection() {
  return (
    <div className="h-screen w-full lg:px-10 md:px-5 px-2 pt-5">
      <div className="bg-white flex flex-col lg:justify-between md:justify-between justify-around rounded-lg lg:h-[90%] md:h-[90%] h-full  ">
        <div className="heading">
          <h1 className="text-black font-[font5] uppercase text-center lg:text-[7vw] md:text-[7vw] text-[13vw] leading-[12vw] lg:leading-[7vw] lg:leading-[7vw]">
            Our collection
          </h1>
        </div>
        <div className="prducts  flex lg:flex-wrap md:flex-wrap flex-wrap overflow-scroll gap-5 justify-around  p-5 ">
          <div className="group z-10 relative w-[350px] bg-zinc-900 border border-zinc-800 p-4 rounded-3xl overflow-hidden transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl hover:shadow-orange-500/10">
            {/* Image Container with Gradient Overlay */}
            <div className="relative h-[280px] w-full bg-gradient-to-br from-orange-500 to-rose-600 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
              {/* Badge */}
              <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                New Arrival
              </span>
            </div>

            {/* Details Section */}
            <div className="pt-5 pb-2">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-white font-bold text-2xl tracking-tight">
                  Trending T-shirt
                </h2>
                <span className="text-orange-500 font-mono font-bold text-xl">
                  ₹999
                </span>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Crafted with precision engineering and a minimalist aesthetic
                for the modern professional.
              </p>

              {/* Interactive Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 bg-white hover:bg-zinc-200 text-zinc-900 font-bold py-3 rounded-xl transition-all active:scale-95 cursor-pointer">
                  Add to Cart
                </button>
                <button className="bg-zinc-800 hover:bg-zinc-700 text-white w-14 flex items-center justify-center rounded-xl border border-zinc-700 transition-all active:scale-95 cursor-pointer text-2xl">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="group z-10 relative w-[350px] bg-zinc-900 border border-zinc-800 p-4 rounded-3xl overflow-hidden transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl hover:shadow-orange-500/10">
            {/* Image Container with Gradient Overlay */}
            <div className="relative h-[280px] w-full bg-gradient-to-br from-orange-500 to-rose-600 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
              {/* Badge */}
              <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                New Arrival
              </span>
            </div>

            {/* Details Section */}
            <div className="pt-5 pb-2">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-white font-bold text-2xl tracking-tight">
                  Trending T-shirt
                </h2>
                <span className="text-orange-500 font-mono font-bold text-xl">
                  ₹999
                </span>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Crafted with precision engineering and a minimalist aesthetic
                for the modern professional.
              </p>

              {/* Interactive Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 bg-white hover:bg-zinc-200 text-zinc-900 font-bold py-3 rounded-xl transition-all active:scale-95 cursor-pointer">
                  Add to Cart
                </button>
                <button className="bg-zinc-800 hover:bg-zinc-700 text-white w-14 flex items-center justify-center rounded-xl border border-zinc-700 transition-all active:scale-95 cursor-pointer text-2xl">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="group z-10 relative w-[350px] bg-zinc-900 border border-zinc-800 p-4 rounded-3xl overflow-hidden transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl hover:shadow-orange-500/10">
            {/* Image Container with Gradient Overlay */}
            <div className="relative h-[280px] w-full bg-gradient-to-br from-orange-500 to-rose-600 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
              {/* Badge */}
              <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                New Arrival
              </span>
            </div>

            {/* Details Section */}
            <div className="pt-5 pb-2">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-white font-bold text-2xl tracking-tight">
                  Trending T-shirt
                </h2>
                <span className="text-orange-500 font-mono font-bold text-xl">
                  ₹999
                </span>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Crafted with precision engineering and a minimalist aesthetic
                for the modern professional.
              </p>

              {/* Interactive Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 bg-white hover:bg-zinc-200 text-zinc-900 font-bold py-3 rounded-xl transition-all active:scale-95 cursor-pointer">
                  Add to Cart
                </button>
                <button className="bg-zinc-800 hover:bg-zinc-700 text-white w-14 flex items-center justify-center rounded-xl border border-zinc-700 transition-all active:scale-95 cursor-pointer text-2xl">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
