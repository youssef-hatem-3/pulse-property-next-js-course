import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";
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
