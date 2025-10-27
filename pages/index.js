import Head from "next/head";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PropertyDetails from "../components/PropertyDetails";
import EMICalculator from "../components/EMICalculator";
import PriceTrendGraph from "../components/PriceTrendGraph";
import DistanceCalculator from "../components/DistanceCalculator";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import BackToTop from "../components/BackToTop";
import WhyInvest from "../components/WhyInvest";
import Gallery from "../components/Gallery";

export default function Home() {
  const propertyData = {
    name: "Quadruplex 6 BHK Independent House Vasundhara",
    price: "25000000",
    priceCurrency: "INR",
    address: "Sector-12, Vasundhara, Ghaziabad, Uttar Pradesh, 201012",
    phone: "+918097892731",
    image: "https://yourdomain.com/images/front.png",
    url: "https://yourdomain.com",
    area: "2600",
    plotArea: "720",
    floors: "Ground+3",
    latitude: "28.6692",
    longitude: "77.3575",
  };

  // Track page view (Google Analytics)
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", {
        page_title: "Quadruplex 6 BHK House Vasundhara",
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  }, []);

  // Enhanced Real Estate Listing Schema
  const realEstateSchema = {
    "@context": "https://schema.org",
    "@type": "SingleFamilyResidence",
    name: propertyData.name,
    description:
      "Premium Quadruplex-style 6 BHK independent house for sale in Vasundhara Sector-12, Ghaziabad. Features: 2600 sq.ft covered area on 720 sq.ft plot, Ground+3 floors, East & Park facing, Semi-furnished, Awas Vikas approved, Gated society with 24/7 CCTV security, Parking for 2 cars, Near upcoming AIIMS Ghaziabad. Ready to move in.",
    image: [
      propertyData.image,
      `${propertyData.url}/images/living-room.png`,
      `${propertyData.url}/images/bedroom-1.jpg`,
      `${propertyData.url}/images/kitchen.jpg`,
    ],
    url: propertyData.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sector-12, Vasundhara",
      addressLocality: "Ghaziabad",
      addressRegion: "Uttar Pradesh",
      postalCode: "201012",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: propertyData.latitude,
      longitude: propertyData.longitude,
    },
    numberOfRooms: 4,
    numberOfBathroomsTotal: 4,
    numberOfBedrooms: 4,
    floorSize: {
      "@type": "QuantitativeValue",
      value: propertyData.area,
      unitCode: "FTK",
      unitText: "square feet",
    },
    occupancy: {
      "@type": "QuantitativeValue",
      value: 4,
      unitText: "bedrooms",
    },
    yearBuilt: "2023",
    offers: {
      "@type": "Offer",
      price: propertyData.price,
      priceCurrency: propertyData.priceCurrency,
      availability: "https://schema.org/InStock",
      validFrom: "2025-10-27",
      priceValidUntil: "2026-12-31",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "RealEstateAgent",
        name: "IT Properties",
        telephone: propertyData.phone,
      },
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "East Facing",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Park Facing",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Gated Society",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "CCTV Security",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "24/7 Guard",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Car Parking",
        value: "2 Cars",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Bike Parking",
        value: "2 Bikes",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Water Supply",
        value: "4 Tanks + Submersible",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Semi Furnished",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Awas Vikas Approved",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Separate Floor Entries",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Balconies",
        value: "Multiple",
      },
    ],
    tourBookingPage: `https://wa.me/918097892731?text=Hi, I want to schedule a visit`,
    potentialAction: {
      "@type": "ViewAction",
      target: propertyData.url,
    },
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "IT Properties",
    image: `${propertyData.url}/logo.png`,
    "@id": propertyData.url,
    url: propertyData.url,
    telephone: propertyData.phone,
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Vasundhara",
      addressLocality: "Ghaziabad",
      addressRegion: "Uttar Pradesh",
      postalCode: "201012",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: propertyData.latitude,
      longitude: propertyData.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Ghaziabad",
      },
      {
        "@type": "City",
        name: "Noida",
      },
      {
        "@type": "City",
        name: "Delhi",
      },
    ],
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the price of this 6 BHK house in Vasundhara?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The property is priced at ₹2.50 Crore. It's a Quadruplex-style 6 BHK independent house with 2600 sq.ft covered area on a 720 sq.ft plot in Vasundhara Sector-12, Ghaziabad.",
        },
      },
      {
        "@type": "Question",
        name: "Is this property Awas Vikas approved?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, this is an Awas Vikas approved property in a posh locality of Vasundhara, Ghaziabad with all legal documentation and clearances.",
        },
      },
      {
        "@type": "Question",
        name: "What amenities are available in this property?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The property features gated society, 24/7 CCTV security, parking for 2 cars and 2 bikes, 4 separate water tanks, own submersible, separate floor entries, spacious balconies, and is located near hospitals, schools, and markets.",
        },
      },
      {
        "@type": "Question",
        name: "Is AIIMS Ghaziabad nearby?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the upcoming AIIMS Satellite Centre in Vasundhara Sector-7 is within 3 km radius (approximately 5-7 minutes drive) from this property, making it a high-potential investment.",
        },
      },
      {
        "@type": "Question",
        name: "Is the property ready to move in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, this is a ready-to-move-in semi-furnished property. You can schedule a site visit by calling 8097892731.",
        },
      },
    ],
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: propertyData.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Uttar Pradesh",
        item: `${propertyData.url}/uttar-pradesh`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Ghaziabad",
        item: `${propertyData.url}/ghaziabad`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Vasundhara",
        item: `${propertyData.url}/ghaziabad/vasundhara`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "6 BHK House for Sale",
        item: propertyData.url,
      },
    ],
  };

  // Video Schema (if you add property video)
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Quadruplex 6 BHK House Tour - Vasundhara Ghaziabad",
    description:
      "Virtual tour of premium 6 BHK independent house in Vasundhara, Ghaziabad",
    thumbnailUrl: propertyData.image,
    uploadDate: "2025-10-27T08:00:00+05:30",
    contentUrl: `${propertyData.url}/videos/property-tour.mp4`,
    embedUrl: `${propertyData.url}/embed/property-tour`,
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags - Optimized */}
        <title>
          6 BHK House for Sale in Vasundhara Ghaziabad 
        </title>
        <meta
          name="title"
          content="6 BHK Independent House Vasundhara Ghaziabad | Quadruplex ₹2.50Cr | Near AIIMS"
        />
        <meta
          name="description"
          content="Premium Quadruplex 6 BHK house (2600 sq.ft) for sale in Vasundhara Sector-12, Ghaziabad. G+3, East & Park facing, Semi-furnished, Awas Vikas approved, Near AIIMS. Gated society, CCTV security, Ready to move. EMI available. Call ☎️ 8097892731"
        />
        <meta
          name="keywords"
          content="6 BHK house Vasundhara, independent house Ghaziabad, Vasundhara property for sale, Awas Vikas approved property Ghaziabad, quadruplex house Ghaziabad, house near AIIMS Ghaziabad, Vasundhara Sector 12 house, Ghaziabad real estate, property Vasundhara, house for sale Vasundhara, 4 bedroom house Ghaziabad, independent villa Vasundhara, Ghaziabad property, IT Properties Ghaziabad, ready to move house Ghaziabad, semi furnished house Vasundhara, gated society Vasundhara, east facing house Ghaziabad, park facing property Vasundhara"
        />

        {/* Additional SEO Meta Tags */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="language" content="en-IN" />
        <meta name="revisit-after" content="3 days" />
        <meta name="author" content="IT Properties" />
        <meta name="copyright" content="IT Properties 2025" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta httpEquiv="content-language" content="en-IN" />

        {/* Mobile Optimization */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="IT Properties" />

        {/* Canonical & Alternate */}
        <link rel="canonical" href={propertyData.url} />
        <link rel="alternate" hrefLang="en-in" href={propertyData.url} />
        <link
          rel="alternate"
          hrefLang="hi-in"
          href={`${propertyData.url}/hi`}
        />
        <link rel="alternate" hrefLang="x-default" href={propertyData.url} />

        {/* Open Graph - Enhanced */}
        <meta property="og:type" content="product" />
        <meta property="og:url" content={propertyData.url} />
        <meta
          property="og:site_name"
          content="IT Properties - Ghaziabad Real Estate"
        />
        <meta
          property="og:title"
          content="6 BHK Quadruplex House Vasundhara | ₹2.50Cr | Near AIIMS | IT Properties"
        />
        <meta
          property="og:description"
          content="Premium 6 BHK independent house (2600 sq.ft), G+3, East & Park facing, Semi-furnished, Awas Vikas approved, Near AIIMS Ghaziabad. Gated society with CCTV. Ready to move. EMI available ☎️ 8097892731"
        />
        <meta property="og:image" content={propertyData.image} />
        <meta property="og:image:secure_url" content={propertyData.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="6 BHK Independent House in Vasundhara Ghaziabad"
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:locale:alternate" content="hi_IN" />
        <meta property="product:price:amount" content={propertyData.price} />
        <meta property="product:price:currency" content="INR" />
        <meta property="product:availability" content="in stock" />
        <meta property="product:condition" content="new" />

        {/* Twitter Card - Enhanced */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@itproperties" />
        <meta name="twitter:creator" content="@itproperties" />
        <meta name="twitter:url" content={propertyData.url} />
        <meta
          name="twitter:title"
          content="6 BHK Quadruplex House Vasundhara Ghaziabad | ₹2.50Cr Near AIIMS"
        />
        <meta
          name="twitter:description"
          content="Premium 6 BHK house, 2600 sq.ft, G+3, East & Park facing, Near AIIMS. Gated society, Ready to move ☎️ 8097892731"
        />
        <meta name="twitter:image" content={propertyData.image} />
        <meta
          name="twitter:image:alt"
          content="6 BHK Independent House Vasundhara"
        />
        <meta name="twitter:label1" content="Price" />
        <meta name="twitter:data1" content="₹2.50 Crore" />
        <meta name="twitter:label2" content="Location" />
        <meta name="twitter:data2" content="Vasundhara, Ghaziabad" />

        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="IN-UP" />
        <meta
          name="geo.placename"
          content="Vasundhara, Ghaziabad, Uttar Pradesh"
        />
        <meta
          name="geo.position"
          content={`${propertyData.latitude};${propertyData.longitude}`}
        />
        <meta
          name="ICBM"
          content={`${propertyData.latitude}, ${propertyData.longitude}`}
        />
        <meta name="DC.title" content="6 BHK House Vasundhara Ghaziabad" />

        {/* Contact & Business Info */}
        <meta name="contact" content="8097892731" />
        <meta name="reply-to" content="contact@itproperties.com" />
        <meta name="owner" content="IT Properties" />

        {/* Dublin Core Meta Tags */}
        <meta name="DC.language" content="en" />
        <meta name="DC.creator" content="IT Properties" />
        <meta name="DC.publisher" content="IT Properties" />
        <meta name="DC.rights" content="Copyright 2025 IT Properties" />
        <meta name="DC.type" content="Text" />
        <meta name="DC.format" content="text/html" />

        {/* Icons & Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://wa.me" />

        {/* Structured Data - All Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>

      {/* Semantic HTML5 Structure */}
      <Navbar />
      <main className="min-h-screen" role="main">
        <HeroSection />
        <Gallery />
        <PropertyDetails />
        <WhyInvest />
        <PriceTrendGraph />
        <DistanceCalculator />
        <EMICalculator />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </>
  );
}
