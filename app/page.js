
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Pricing from "./Components/Pricing/Pricing";
import CouponsCarousel from "./Components/CouponsCarousel/Coupons";
import "./globals.css";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Pricing />
      <CouponsCarousel />
      <Footer />
    </div>
  );
}
