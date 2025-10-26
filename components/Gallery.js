import { useState, useEffect } from "react";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Property images
  const images = [
    {
      url: "/images/front.png",
      title: "Exterior View",
      description: "Front view of the property with park facing",
    },
    {
      url: "/images/living-room.png",
      title: "Living Room",
      description: "Spacious living area with natural lighting",
    },
    {
      url: "/images/living2room.png",
      title: "Master Bedroom",
      description: "Fully furnished bedroom with balcony access",
    },
    {
      url: "/images/bedroom.png",
      title: "Modular Kitchen",
      description: "Modern kitchen with premium fittings",
    },
    {
      url: "/images/balcony.png",
      title: "Balcony View",
      description: "Park and greenery view from balcony",
    },
    {
      url: "/images/stair.png",
      title: "Parking Area",
      description: "Dedicated parking for 2 cars and bikes",
    },
    {
      url: "/images/kitchen.png",
      title: "Main Entrance",
      description: "Gated society entrance with security",
    },
    {
      url: "/images/bathroom.png",
      title: "Bathroom",
      description: "Premium bathroom with modern fixtures",
    },
    {
      url: "/images/stair.png",
      title: "Staircase",
      description: "Separate entrance for each floor",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      id="gallery"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full mb-6">
            <svg
              className="w-6 h-6 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-bold text-purple-600 text-lg">
              Property Gallery
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Visual Tour of Your Dream Home
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore every corner of this premium property through our
            interactive carousel
          </p>
        </div>

        {/* Main Carousel */}
        <div className="max-w-6xl mx-auto">
        

          {/* Thumbnail Grid */}
          <div className="mt-6 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-3">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-4 ring-blue-500 scale-105 shadow-xl"
                    : "ring-2 ring-gray-200 hover:ring-blue-300 opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-1 left-1 text-white text-xs font-bold bg-black/50 px-2 py-0.5 rounded">
                  {index + 1}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Virtual Tour CTA */}
        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl shadow-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Want a Live Virtual Tour?</h3>
          <p className="text-xl mb-8 opacity-90">
            Schedule a video call with our property expert for a detailed
            walkthrough
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:8097892731"
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-xl flex items-center space-x-2"
            >
              <svg
                className="w-5 h-5"
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
              href="https://wa.me/918097892731?text=Hi, I want to schedule a virtual tour"
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition shadow-xl flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
