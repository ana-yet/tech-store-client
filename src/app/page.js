import Image from "next/image";
import TechStoreBanner from "./components/TechStoreBanner/TechStoreBanner";
import TopProduct from "./components/TopProduct/TopProduct";

export default function Home() {
  return (
    <div className="font-sans   ">
      <TechStoreBanner />
      <TopProduct />
    </div>
  );
}
