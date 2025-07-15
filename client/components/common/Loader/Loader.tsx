"use client";
import { Loader2 } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[90vh]">
      <Loader2 className="w-12 h-12 animate-spin" />
    </div>
  );
};

export default Loader;
