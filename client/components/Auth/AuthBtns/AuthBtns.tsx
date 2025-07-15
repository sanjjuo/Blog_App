"use client";
import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

const AuthBtns = () => {
  return (
    <div className="flex items-center gap-3">
      <SignedOut>
        <SignInButton>
          <Button className="bg-black border hover:border-black rounded-full font-medium text-sm hover:bg-white hover:text-black">
            Sign In
          </Button>
        </SignInButton>

        <SignUpButton>
          <Button className="bg-transparent border border-black text-black rounded-full font-medium text-sm hover:bg-black hover:text-white">
            Sign Up
          </Button>
        </SignUpButton>
      </SignedOut>
    </div>
  );
};

export default AuthBtns;
