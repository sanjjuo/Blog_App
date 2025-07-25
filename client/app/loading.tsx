"use client";
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 5000); // 500ms artificial delay

    return () => clearTimeout(timeout);
  }, []);

  if (!show) return null;

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid" />
    </div>
  );
};

export default Loader;
