import Image from "next/image";
import Options from "./components/Options";
import MenCollection from "./components/MenCollection";
import WomenCollection from "./components/WomenCollection";
import TopSeller from "./components/TopSeller";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div>
      <Options />
      <MenCollection />
      <WomenCollection />
      <TopSeller />
      <Banner />
    </div>
  );
}
