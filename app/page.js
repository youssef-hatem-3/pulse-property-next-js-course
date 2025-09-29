import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Image from "next/image";
import InfoBoxes from "@/components/infoBoxes/InfoBoxes";
import Properties from "@/app/properties/Properties.jsx";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <InfoBoxes/>
      <Properties/>
      <Footer/>
    </div>
  );
}
