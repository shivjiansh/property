import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PropertyDetails from '../components/PropertyDetails';
import EMICalculator from '../components/EMICalculator';
import PriceTrendGraph from '../components/PriceTrendGraph';
import DistanceCalculator from '../components/DistanceCalculator';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import BackToTop from '../components/BackToTop';
import WhyInvest from '../components/WhyInvest';
import Gallery from '../components/Gallery';
export default function Home() {
  return (
    <>
      <Head>
        <title>
          1 BHK Fully Furnished Flat Vasundhara - ₹2.60 Cr | IT Properties
        </title>
        <meta
          name="description"
          content="Premium 1 BHK, G+3, Park & East Facing, Awas Vikas property in Vasundhara, Ghaziabad. World class amenities, gated society. Contact IT Properties 8097892731"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <main className="min-h-screen">
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