import Image from "next/image";
import Hero1 from "../components/Hero1";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-primary-dark text-light">
      <Header />
      <Hero1 />
    </div>
  );
}
