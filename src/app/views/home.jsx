import Link from "next/link";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import "../globals.css"; 

export default function Home() {
  return (
    <section className="hero">
        <Navbar />
        <Hero />
        <Footer />
    </section>

  );
}