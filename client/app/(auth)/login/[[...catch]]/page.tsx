import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign in",
};

const LoginPage = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default LoginPage;
