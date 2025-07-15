import { socialMediaIcons } from "@/components/Navbar/data";

const SocialMediaIcons = () => {
  return (
    <ul className="flex items-center gap-10">
      {socialMediaIcons.map((data) => (
        <li key={data.id} className="cursor-pointer fill-white">
          {data.icon}
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaIcons;
