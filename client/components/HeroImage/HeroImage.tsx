import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroImage = () => {
  return (
    <section className="relative w-full h-[300px] lg:h-[500px] rounded-xl overflow-hidden">
      {/* Background Image */}
      <Image
        src="/image2.jpg"
        width={1000}
        height={500}
        quality={100}
        alt="Hero banner"
        className="w-full h-full object-cover rounded-xl"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-6 rounded-xl">
        <h1 className="text-2xl md:text-5xl font-bold mb-2">
          Build Better with Code
        </h1>
        <p className="text-sm md:text-lg max-w-xl mb-6">
          Discover hands-on projects, tutorials, and code snippets that empower
          your learning and development journey.
        </p>
        <Link href="/blog">
          <Button className="bg-white text-black font-semibold px-6 py-3 h-12 rounded-lg hover:bg-gray-200 transition">
            Explore Projects
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroImage;
