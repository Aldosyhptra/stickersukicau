"use client";

import Link from "next/link";
import Navbar from "./navbar";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
        <Navbar />
    
        <div className="relative w-screen h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0 bg-[url('/img/hero.png')] bg-cover bg-center bg-no-repeat brightness-50 z-0" />

            {/* Konten Utama */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <div className="relative z-10 text-white text-center p-8">
                <h1 className="text-4xl font-bold mb-4">Selamat Datang di Sticker SukiCau</h1>
                <p className="text-lg mb-6">Temukan dan bagikan stiker WhatsApp terbaik di sini!</p>
                <Link href="/collection">
                    <button className="border-white border-1 rounded p-3 hover:border-black hover:bg-black hover:scale-105 transition-all duration-200 cursor-pointer">
                    Lihat Koleksi
                    </button>
                </Link>
                </div>
            </motion.div>
                </div>
    </section>

  );
}