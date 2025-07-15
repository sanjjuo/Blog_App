import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <section className="px-4 py-8">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Project Gallery</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Explore a curated selection of visuals from recent projects. This
          gallery showcases responsive layouts, creative designs, and attention
          to detail that bring each concept to life.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-10 gap-5 h-auto md:h-[600px]">
        {/* Main project preview */}
        <div className="md:col-span-3 md:row-span-6">
          <Image
            src="/image1.jpg"
            width={1000}
            height={600}
            quality={100}
            alt="Main project preview"
            className="w-full h-40 md:h-full object-cover rounded-xl"
          />
        </div>

        {/* UI showcase */}
        <div className="md:col-span-2 md:row-span-5">
          <Image
            src="/image3.jpg"
            width={1000}
            height={600}
            quality={100}
            alt="UI showcase"
            className="w-full h-40 md:h-full object-cover rounded-xl"
          />
        </div>

        {/* Component layout */}
        <div className="md:col-span-2 md:row-span-5">
          <Image
            src="/image4.jpg"
            width={1000}
            height={600}
            quality={100}
            alt="Component layout"
            className="w-full h-40 md:h-full object-cover rounded-xl"
          />
        </div>

        {/* Responsive design preview */}
        <div className="md:col-span-3 md:row-span-4">
          <Image
            src="/image5.jpg"
            width={1000}
            height={600}
            quality={100}
            alt="Responsive design preview"
            className="w-full h-40 md:h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
