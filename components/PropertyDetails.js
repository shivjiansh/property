import { useState } from "react";

export default function PropertyDetails() {
  const [currentSpecIndex, setCurrentSpecIndex] = useState(0);

  const highlights = [
    "Awas Vikas Property in porch locality",
    "World class amenities",
    "Hospital, School & market available at door steps",
    "Fully furnished East and Park Facing Flat",
    "6 BHK with Ground + 3 Floor along with spacious Balconies",
    "Perfect view of Greenery, Sunrise and park",
    "Four separate water tanks for individual floors",
    "All floors have separate entries via stairs",
    "Two cars parking spaces",
    "Enough space for Two Wheeler parking",
    "Guard, Gated Society with CCTV cameras",
    "Own Submersible along with Jal Nigam connection with motor",
  ];

  const specs = [
    {
      label: "Property Type",
      value: "Quadruplex-style 6 BHK home",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      label: "Location",
      value: "Sector-12, Vasundhara, Ghaziabad",
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    },
    {
      label: "Plot Area",
      value: "720 sq.ft",
      icon: "M4 5a1 1 0 011-1h4a1 1 0 010 2H6v13h2a1 1 0 110 2H5a1 1 0 01-1-1V5zm11 0a1 1 0 10-2 0v15a1 1 0 102 0V5z",
    },
    {
      label: "Covered Area",
      value: "2600 sq.ft",
      icon: "M9 4a1 1 0 012 0v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4z",
    },
    {
      label: "Facing",
      value: "East & Park Facing",
      icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
    },
    {
      label: "Furnishing",
      value: "Semi Furnished",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    },
    {
      label: "Parking",
      value: "2 Car + 2 Bike",
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },
    {
      label: "Water Supply",
      value: "Submersible + Jal Nigam + 4 Tanks",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    },
    {
      label: "Security",
      value: "Guard + CCTV + Gated Society",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
      label: "Price",
      value: "₹2.50 Crore",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      highlight: true,
    },
  ];

  const nextSpec = () => {
    setCurrentSpecIndex((prev) => (prev + 1) % specs.length);
  };

  const prevSpec = () => {
    setCurrentSpecIndex((prev) => (prev - 1 + specs.length) % specs.length);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Property Overview
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Premium Awas Vikas property with world-class amenities in the heart
            of Vasundhara
          </p>
        </div>

        {/* Specifications */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Premium Header */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 p-6 sm:p-8 md:p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-purple-500/20 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-lg sm:rounded-xl">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                      Property Specifications
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-blue-100 mt-1">
                      Complete technical details
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Grid (Hidden on Mobile) */}
            <div className="hidden md:block p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-6">
                {specs.map((spec, index) => (
                  <div
                    key={index}
                    className={`group relative p-6 rounded-2xl transition-all duration-300 ${
                      spec.highlight
                        ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 shadow-lg hover:shadow-2xl hover:scale-105"
                        : "bg-gradient-to-br from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1"
                    }`}
                  >
                    {spec.highlight && (
                      <div className="absolute -top-3 -right-3 z-10">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center space-x-1">
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span>Featured</span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div
                          className={`flex-shrink-0 p-3.5 rounded-xl shadow-lg ${
                            spec.highlight
                              ? "bg-gradient-to-br from-yellow-400 to-orange-500"
                              : "bg-gradient-to-br from-blue-500 to-blue-700"
                          } group-hover:scale-110 transition-transform duration-300`}
                        >
                          <svg
                            className="w-7 h-7 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d={spec.icon}
                            />
                          </svg>
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                            {spec.label}
                          </p>
                          <p
                            className={`text-lg font-bold leading-tight ${
                              spec.highlight
                                ? "text-orange-700"
                                : "text-blue-700 group-hover:text-blue-800"
                            }`}
                          >
                            {spec.value}
                          </p>
                        </div>
                      </div>

                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2">
                        <svg
                          className={`w-5 h-5 ${
                            spec.highlight ? "text-orange-500" : "text-blue-600"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>

                    <div
                      className={`absolute bottom-0 right-0 w-20 h-20 ${
                        spec.highlight ? "bg-orange-200/30" : "bg-blue-200/30"
                      } rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Carousel */}
            <div className="block md:hidden p-6">
              <div className="relative">
                {/* Carousel Slide */}
                <div className="overflow-hidden">
                  <div className="relative">
                    {specs.map((spec, index) => (
                      <div
                        key={index}
                        className={`transition-all duration-500 ${
                          index === currentSpecIndex ? "block" : "hidden"
                        }`}
                      >
                        <div
                          className={`p-6 rounded-2xl ${
                            spec.highlight
                              ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 shadow-lg"
                              : "bg-gradient-to-br from-gray-50 to-blue-50 border-2 border-gray-200"
                          }`}
                        >
                          {spec.highlight && (
                            <div className="flex justify-center mb-3">
                              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center space-x-1">
                                <svg
                                  className="w-3 h-3"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span>Featured</span>
                              </div>
                            </div>
                          )}

                          <div className="flex flex-col items-center text-center space-y-4">
                            <div
                              className={`p-4 rounded-xl shadow-lg ${
                                spec.highlight
                                  ? "bg-gradient-to-br from-yellow-400 to-orange-500"
                                  : "bg-gradient-to-br from-blue-500 to-blue-700"
                              }`}
                            >
                              <svg
                                className="w-10 h-10 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d={spec.icon}
                                />
                              </svg>
                            </div>

                            <div>
                              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                                {spec.label}
                              </p>
                              <p
                                className={`text-xl font-bold leading-tight ${
                                  spec.highlight
                                    ? "text-orange-700"
                                    : "text-blue-700"
                                }`}
                              >
                                {spec.value}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSpec}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition z-10"
                  aria-label="Previous specification"
                >
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={nextSpec}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition z-10"
                  aria-label="Next specification"
                >
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {specs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSpecIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSpecIndex
                        ? "w-8 h-2 bg-blue-600"
                        : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to specification ${index + 1}`}
                  />
                ))}
              </div>

              {/* Counter */}
              <div className="text-center mt-4 text-sm text-gray-600 font-semibold">
                {currentSpecIndex + 1} / {specs.length}
              </div>

              {/* Swipe Hint */}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
