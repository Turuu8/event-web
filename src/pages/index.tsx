import Image from "next/image";
import { Inter } from "next/font/google";
import SvgHomelight from  "../components/icons/homelight"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <SvgHomelight  className="w-24 h-24"/>
  </main>;
}
