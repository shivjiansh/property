import { useState } from "react";

export default function PriceTrendGraph() {
  const [activeTab, setActiveTab] = useState("5year");

  // Real data based on Vasundhara Ghaziabad market research
  const priceData = {
    "5year": [
      { year: "2020", price: 5200, growth: 0 },
      { year: "2021", price: 5720, growth: 10 },
      { year: "2022", price: 6520, growth: 14 },
      { year: "2023", price: 7330, growth: 12.4 },
      { year: "2024", price: 7670, growth: 4.6 },
      { year: "2025", price: 8466, growth: 10.42 },
    ],
    projection: [
      { year: "2025", price: 8466, growth: 10.42 },
      { year: "2026", price: 9348, growth: 10.4 },
      { year: "2027", price: 10283, growth: 10 },
      { year: "2028", price: 11311, growth: 10 },
      { year: "2029", price: 12442, growth: 10 },
      { year: "2030", price: 13686, growth: 10 },
    ],
  };

  const currentData = priceData[activeTab];
  const maxPrice = Math.max(...currentData.map((d) => d.price));
  const totalAppreciation = activeTab === "5year" ? "62.8%" : "61.7%";

  return (
    <section
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50"
      id="price-trends"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-4">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-green-600 font-semibold text-sm sm:text-base">
              Investment Analysis
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Price Appreciation Trends
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Track historical price growth and future projections for Vasundhara,
            Ghaziabad
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tab Selector */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-gray-200">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <button
                onClick={() => setActiveTab("5year")}
                className={`w-full sm:w-auto px-4 sm:px-6 py-3 rounded-lg sm:rounded-xl font-bold transition text-sm sm:text-base ${
                  activeTab === "5year"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Historical (2020-2025)
              </button>
              <button
                onClick={() => setActiveTab("projection")}
                className={`w-full sm:w-auto px-4 sm:px-6 py-3 rounded-lg sm:rounded-xl font-bold transition text-sm sm:text-base ${
                  activeTab === "projection"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Future Projection (2025-2030)
              </button>
            </div>

            {/* Summary Card (Mobile-friendly) */}
            <div className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border-2 border-blue-200">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">
                    Total Appreciation
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-blue-600">
                    {totalAppreciation}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">
                    Current Rate
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-green-600">
                    ₹{currentData[currentData.length - 1].price}/sq.ft
                  </p>
                </div>
              </div>
            </div>

            {/* Data Table - Mobile Optimized */}
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-3 sm:px-6 py-3 text-left font-bold text-gray-700 text-xs sm:text-sm">
                        Year
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-right font-bold text-gray-700 text-xs sm:text-sm">
                        Price/sq.ft
                      </th>
                      <th className="px-3 sm:px-6 py-3 text-right font-bold text-gray-700 text-xs sm:text-sm">
                        Growth
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.map((data, index) => (
                      <tr
                        key={data.year}
                        className={`${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        } hover:bg-blue-50 transition`}
                      >
                        <td className="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-gray-900 text-sm sm:text-base">
                          {data.year}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-right font-bold text-blue-600 text-sm sm:text-base">
                          ₹{data.price.toLocaleString()}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-right text-sm sm:text-base">
                          {data.growth > 0 ? (
                            <span className="inline-flex items-center text-green-600 font-semibold">
                              <svg
                                className="w-3 h-3 sm:w-4 sm:h-4 mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              +{data.growth}%
                            </span>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Insights - Mobile Stacked */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Key Insights */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border-2 border-green-200">
              <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-3 sm:mb-4 flex items-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-green-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Key Insights
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">•</span>
                  <span>
                    Steady appreciation of <strong>10-12% annually</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">•</span>
                  <span>
                    Sector 12 shows highest growth at{" "}
                    <strong>22.16% YoY</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">•</span>
                  <span>
                    Circle rates increasing by <strong>5-10%</strong> in 2025
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-lg">•</span>
                  <span>Metro connectivity driving demand and prices</span>
                </li>
              </ul>
            </div>

            {/* Investment Recommendation */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border-2 border-yellow-200">
              <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-3 sm:mb-4 flex items-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-yellow-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Investment Recommendation
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                <strong>Excellent time to invest</strong> with projected 62%
                appreciation over 5 years.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    Expected ROI: <strong>10-12% annually</strong>
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    Rental Yield: <strong>3-4% per annum</strong>
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    Best holding period: <strong>3-5 years</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 sm:mt-8 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200">
            <p className="text-xs sm:text-sm text-gray-500 text-center leading-relaxed">
              * Data based on Housing.com, RealtyNXT, and Ghaziabad market
              research. Projections are estimates and actual values may vary
              based on market conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
