import InstragamIcon from "@/components/svg/InstagramIcon";
import TwitterIcon from "@/components/svg/TwitterIcon";
import YouTubeIcon from "@/components/svg/YoutubeIcon";

export const navbarLinks = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "blogs", href: "/blog" },
  { id: 3, label: "about", href: "/about" },
  { id: 4, label: "gallery", href: "/gallery" },
];

export const socialMediaIcons = [
  { id: 1, icon: <TwitterIcon className="w-6 h-6" /> },
  { id: 2, icon: <YouTubeIcon className="w-6 h-6" /> },
  { id: 3, icon: <InstragamIcon className="w-6 h-6" /> },
];
