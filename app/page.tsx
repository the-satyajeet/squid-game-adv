import Nav from "@/app/components/nav";
import Image from "next/image";
import Hero from "./components/hero";
import Intro from "./components/intro";

export default function Home() {
  return (
    <main className="">
      <Nav></Nav>
      <Hero></Hero>
      <Intro></Intro>
    </main>
  );
}
