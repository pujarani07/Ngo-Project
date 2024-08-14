import Image from "next/image";
import { Inter } from "next/font/google";
import Mainlayout from "@/layout/Mainlayout";
import Slide1 from "@/components/Home/Slide1";
import Educationsupport from "@/components/Home/Educationsupport";
import Healthcareinitiative from "@/components/Home/Healthcareinitiative";
import Livehood from "@/components/Home/Livehood";
import Wateraccess from "@/components/Home/Wateraccess";
import Communities from "@/components/Home/Communities";
import Questionanswerpage from "@/components/Home/Questionanswerpage";
import Volunteer from "@/components/Home/Volunteer";
import Supporters from "@/components/Home/Supporters";
import Card from "@/components/Home/Card";
import ImpactCauses from "@/components/Home/Impactcauses";
import CommonComponent from "@/components/common/CommonComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <Mainlayout>
    <Slide1/>
    <CommonComponent/>
    <ImpactCauses/>
    <Communities/>
    <Questionanswerpage/>
    <Volunteer/>
    <Supporters/>
    <Card/>
   </Mainlayout>
  );
}
