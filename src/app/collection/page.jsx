'use client';

import Navbar from "../components/navbar";
import CollectionCard from "../components/collection";

export default function Collection() {
  return (
    <section className="w-full">
      <Navbar />
      <CollectionCard />
    </section>
  );
}
