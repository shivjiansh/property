export default function WhyInvest() {
  const reasons = [
    {
      title: "Prime Location Advantage",
      desc: "Located in posh Vasundhara, Awas Vikas-approved area known for safety, cleanliness, and superior infrastructure.",
    },
    {
      title: "Upcoming AIIMS Ghaziabad",
      desc: "Proposed AIIMS campus in Vasundhara will transform locality into healthcare hotspot, driving price appreciation.",
      badge: "🚀",
    },
    {
      title: "World-Class Amenities",
      desc: "Hospitals, schools, markets just steps away ensuring complete urban convenience.",
    },
    {
      title: "Premium Construction",
      desc: "Quadruplex-style 6 BHK with spacious balconies + roof, park & sunrise views, top-quality finishes.",
    },
    {
      title: "Independent Floor Concept",
      desc: "Each floor has separate entrance for privacy and rental flexibility.",
    },
    {
      title: "Reliable Infrastructure",
      desc: "Four water tanks, own submersible, Jal Nigam connection - uninterrupted water supply.",
    },
    {
      title: "Secure Gated Environment",
      desc: "24×7 guarded society with CCTV cameras ensuring safety.",
    },
    {
      title: "Ample Parking",
      desc: "Dedicated parking for 2 four-wheelers + 2 two-wheelers, rare in urban Ghaziabad.",
    },
    {
      title: "Green Healthy Lifestyle",
      desc: "East & park facing with natural light, ventilation, lush greenery views.",
    },
    {
      title: "Excellent Investment Value",
      desc: "At ₹2.50 Cr for 2600 sq.ft, high appreciation potential with infrastructure growth.",
      badge: "💰",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-blue-50 to-white"
      id="why-invest"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-bold text-blue-600 text-sm sm:text-lg">
              Premium Investment
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 px-4">
            Why Invest in This Property?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
            Top 10 compelling reasons for smart investment
          </p>
        </div>

        {/* Investment Reasons Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
            >
              {/* Header with number and badge */}
              <div className="flex justify-between items-start mb-4">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-blue-600 text-base sm:text-lg shadow-sm">
                  {i + 1}
                </div>
                {r.badge && (
                  <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-sm">
                    {r.badge}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 leading-tight">
                {r.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-xl sm:rounded-2xl shadow-2xl p-8 sm:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
              Ready to Make a Smart Investment?
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Contact IT Properties today for site visit, detailed brochure, and
              exclusive payment plans
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a
                href="tel:8097892731"
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-blue-600 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center space-x-2 sm:space-x-3"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Call 8097892731</span>
              </a>
              <a
                href="https://wa.me/918097892731?text=Hi, I want to invest in the Vasundhara property. Please share details."
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-green-500 text-white rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center space-x-2 sm:space-x-3"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
