import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign up",
};

const RegisterPage = () => {
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default RegisterPage;
