import Image from "next/image";
import Hero1 from "../components/Hero1";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Section from "../components/Section";
import Content from "../components/Content";
import Extra from "../components/Extra";

export default function Home() {
  return (
    <div className="bg-primary-dark text-light">
      <Header />
      <Hero1 />
      <Slider />
      <Section />
      <Content />
      <Extra />
    </div>
  );
}
