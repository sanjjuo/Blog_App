"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

const Profile = () => {
  return (
    <SignedIn>
      <UserButton
        appearance={{ elements: { userButtonAvatarBox: "w-10 h-10" } }}
        aria-label="User account"
      />
    </SignedIn>
  );
};

export default Profile;
