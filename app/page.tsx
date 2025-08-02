'use client';

import Footer from "./ui/Footer";
import Menu from "./ui/Menu";
import Navbar from "./ui/Navbar";

export default function Home() {

  return (
    <div className="bg-white dark:bg-gray-800 bg-[radial-gradient(#9333ea_0px,transparent_1px)] [background-size:20px_20px] font-[family-name:var(--font-geist-sans)] pt-2 md:pt-4 flex flex-col justify-between min-h-screen">
        <Navbar />
        <Menu />
        <Footer />
    </div>
  );
}
