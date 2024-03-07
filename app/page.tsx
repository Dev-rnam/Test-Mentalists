import Image from "next/image";
import { Navbar } from "./components/navbar";
import { Heoro } from "./components/heroe";
import { CardClient } from "./components/card-client";
import { Tags } from "./components/tags";
import MainCard from "./components/main-card";
import { CardHereo } from "./components/card-heoroe";
import { CurveText } from "./components/curve";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  items-center relative main-start">
      <Navbar />
      <Heoro />
      <CardClient />
      <div className="card rounded-xl" />
      <Tags />
      <CardHereo />
      <div className="box-main"></div>
      <div className="bg">
        <Image src="/bg.png" height={350} width={230} alt="bg" />
      </div>
    </main>
  );
}
