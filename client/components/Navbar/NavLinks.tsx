"use client";
import React from "react";
import { navbarLinks } from "./data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
      {navbarLinks.map((data) => (
        <Link href={data.href} key={data.id}>
          <li
            className={cn(
              pathname === data.href
                ? "border-blue-500 text-blue-500"
                : "border-b-transparent",
              "capitalize cursor-pointer border-b-2 text-black"
            )}
          >
            {data.label}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavLinks;
