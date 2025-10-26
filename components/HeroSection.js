export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-16 sm:py-24 md:py-32 lg:py-40 min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("/images/front.png")`,
            opacity: 0.3,
          }}
        ></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-blue-900/50 to-slate-800/60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          {/* Awas Vikas Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full border border-white/20 mb-2 sm:mb-4">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs sm:text-sm font-semibold">
              Awas Vikas Approved
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-2xl px-4">
            Quadruplex
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mt-1 sm:mt-2">
              East Facing
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-1 sm:mt-2">
              House
            </span>
          </h1>

          {/* Location */}
          <div className="flex items-center justify-center space-x-2 text-base sm:text-lg px-4">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base sm:text-xl">Vasundhara, Ghaziabad</span>
          </div>

          {/* Property Info Cards */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 max-w-3xl mx-auto shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
              <div className="py-2 sm:py-0">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">
                  ₹2.50 Cr
                </div>
                <div className="text-xs sm:text-sm text-gray-300 mt-1">
                  Price
                </div>
              </div>
              <div className="border-t sm:border-t-0 sm:border-l border-white/20 py-2 sm:py-0">
                <div className="text-2xl sm:text-3xl font-bold">2600 sq.ft</div>
                <div className="text-xs sm:text-sm text-gray-300 mt-1">
                  Area
                </div>
              </div>
              <div className="border-t sm:border-t-0 sm:border-l border-white/20 py-2 sm:py-0">
                <div className="text-2xl sm:text-3xl font-bold">Ground+3</div>
                <div className="text-xs sm:text-sm text-gray-300 mt-1">
                  Floors
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center pt-4 sm:pt-6 px-4">
            <a
              href="#emi-calculator"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-lg sm:rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              <span>Calculate EMI</span>
            </a>

            <a
              href="https://wa.me/918097892731?text=Hi, I'm interested in scheduling the visit to your 4 BHK property in Vasundhara."
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white rounded-lg sm:rounded-xl font-bold hover:bg-green-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              Schedule Visit
            </a>

            <a
              href="#gallery"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-900 rounded-lg sm:rounded-xl font-bold hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              Gallery
            </a>
          </div>

          {/* Features */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 pt-4 text-xs sm:text-sm px-4">
            <div className="flex items-center space-x-2">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Ready To Move In</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Gated Society</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>CCTV Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
