import React from "react";
import SocialMediaIcons from "../common/SocialMediaIcons/SocialMediaIcons";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center h-[30vh] lg:h-[20vh] space-y-10">
      <p className="text-white">
        &copy; Projex copyright @ {new Date().getFullYear()}
      </p>
      <SocialMediaIcons />
    </div>
  );
};

export default Footer;
