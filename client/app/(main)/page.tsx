import BlogCards from "@/components/common/BlogCards/BlogCards";
import Gallery from "@/components/common/Gallery/Gallery";
import HeroImage from "@/components/HeroImage/HeroImage";
import React from "react";

const HomePage = () => {
  return (
    <div className="space-y-10 py-10">
      <HeroImage />
      <Gallery />
      <BlogCards cards="home" />
    </div>
  );
};

export default HomePage;
