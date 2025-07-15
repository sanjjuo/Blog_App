import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="sticky top-0 w-full bg-white z-50">
        <Navbar />
      </div>
      <div className="py-10 main-container">{children}</div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
