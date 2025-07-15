"use client";
import Link from "next/link";
import { AppLogo } from "../common/AppLogo/AppLogo";
import CreateNewBtn from "../common/BlogCards/CreateNewBtn";
import { Button } from "../ui/button";
import MobileNavbar from "./MobileNavbar";
import NavLinks from "./NavLinks";
import { useUser } from "@clerk/nextjs";
import Profile from "../Auth/Profile/Profile";
import AuthBtns from "../Auth/AuthBtns/AuthBtns";

const Navbar = () => {
  const { isSignedIn } = useUser();
  return (
    <div className="main-container flex items-center justify-between h-20">
      <div>
        <AppLogo type="navbar" />
      </div>
      <div className="hidden lg:block">
        <NavLinks />
      </div>
      <div className="hidden lg:block">
        {isSignedIn ? (
          <div className="flex items-center gap-2">
            <Link href="/blog/create-new-blog">
              <Button>Create a new blog</Button>
            </Link>
            <Profile />
          </div>
        ) : (
          <AuthBtns />
        )}
      </div>

      {/* mobile navbar */}
      <div className="lg:hidden flex items-center gap-2">
        {isSignedIn ? <CreateNewBtn /> : <AuthBtns />}
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
