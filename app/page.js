import Hero from "@/components/hero/Hero";
import InfoBoxes from "@/components/infoBoxes/InfoBoxes";
import HomeProperties from "@/components/homeProperties/HomeProperties";
import connectDB from "@/config/database";


export default function Home() {
  connectDB();
  return (
    <div className="">
      <Hero/>
      <InfoBoxes/>
      <HomeProperties/>
    </div>
  );
}
