import { useState } from "react";

export default function DistanceCalculator() {
  const [customLocation, setCustomLocation] = useState("");
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);

  const locations = [
    {
      name: "Max Super Speciality Hospital",
      distance: "7 km",
      time: "10 min",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    },
    {
      name: "Vaishali Metro Station",
      distance: "4.6 km",
      time: "7 min",
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },
    {
      name: "Jaipuria School",
      distance: "0.8 km",
      time: "2 min",
      icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
    },
    {
      name: "Noida",
      distance: "5.9 km",
      time: "10 min",
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    },
    {
      name: "Delhi",
      distance: "7.2 km",
      time: "15 min",
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    },
    {
      name: "Gurugram",
      distance: "45 km",
      time: "58 min",
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    },
  ];

  const nextLocation = () => {
    setCurrentLocationIndex((prev) => (prev + 1) % locations.length);
  };

  const prevLocation = () => {
    setCurrentLocationIndex(
      (prev) => (prev - 1 + locations.length) % locations.length
    );
  };

  return (
    <section
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white"
      id="distance"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-green-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-bold text-blue-600 text-sm sm:text-lg">
              Location & Connectivity
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Excellent Connectivity
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Well-connected to hospitals, schools, metro stations, and major city
            centers
          </p>
        </div>

        {/* Desktop Grid (Hidden on Mobile) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {locations.map((loc, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-3 rounded-xl">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={loc.icon}
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-900">{loc.name}</h4>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    Distance
                  </p>
                  <p className="font-bold text-blue-600 text-lg">
                    {loc.distance}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    Time
                  </p>
                  <p className="font-bold text-lg text-gray-900">{loc.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden mb-12">
          <div className="relative max-w-md mx-auto">
            {/* Carousel Slide */}
            <div className="overflow-hidden">
              {locations.map((loc, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentLocationIndex ? "block" : "hidden"
                  }`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-xl shadow-lg">
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
                            d={loc.icon}
                          />
                        </svg>
                      </div>

                      <h4 className="font-bold text-xl text-gray-900">
                        {loc.name}
                      </h4>

                      <div className="w-full grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                            Distance
                          </p>
                          <p className="font-bold text-blue-600 text-xl">
                            {loc.distance}
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                            Time
                          </p>
                          <p className="font-bold text-gray-900 text-xl">
                            {loc.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevLocation}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition z-10"
              aria-label="Previous location"
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
              onClick={nextLocation}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition z-10"
              aria-label="Next location"
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
            {locations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentLocationIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentLocationIndex
                    ? "w-8 h-2 bg-blue-600"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to location ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4 text-sm text-gray-600 font-semibold">
            {currentLocationIndex + 1} / {locations.length}
          </div>
        </div>

        {/* AIIMS Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 text-white">
            <div className="space-y-4 sm:space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  🏥 AIIMS Coming to Vasundhara
                </h3>
                <span className="bg-yellow-400 text-green-900 text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full whitespace-nowrap">
                  Game Changer
                </span>
              </div>

              <p className="text-base sm:text-lg leading-relaxed">
                <strong>AIIMS</strong> approved for{" "}
                <strong>Vasundhara Sector 7, Ghaziabad</strong> – A landmark
                healthcare development transforming the entire NCR and West UP
                region.
              </p>

              {/* Key Details */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5">
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-400 font-bold text-lg">•</span>
                    <span>
                      <strong>Distance:</strong> Within 3 km radius (approx. 5-7
                      min drive)
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-400 font-bold text-lg">•</span>
                    <span>
                      <strong>Nearby:</strong> Namo Bharat Station, NH-9,
                      Delhi-Meerut Expressway
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-400 font-bold text-lg">•</span>
                    <span>
                      <strong>Other:</strong> Kaushambi Bus Depot, Anand Vihar
                      Railway/Bus Station
                    </span>
                  </li>
                </ul>
              </div>

              {/* Investment Impact */}
              <div className="bg-yellow-400 text-green-900 rounded-lg sm:rounded-xl p-4 sm:p-5">
                <p className="font-bold text-base sm:text-lg mb-3">
                  🚀 Investment Impact:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-sm sm:text-base">
                  <div className="flex items-center space-x-2">
                    <span>✓</span>
                    <span>Healthcare Hub Status</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>✓</span>
                    <span>Property Value Surge</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>✓</span>
                    <span>Infrastructure Boost</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm opacity-80 italic">
                Source: Proposal approved in Awas Vikas Parishad board meeting,
                Lucknow (March 2025). Initiative by UP Chief Minister Yogi
                Adityanath.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
