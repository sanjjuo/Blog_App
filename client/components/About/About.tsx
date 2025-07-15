"use client";
import { Badge } from "@/components/ui/badge";
import { socialMediaIcons } from "../Navbar/data";
import { AppLogo } from "../common/AppLogo/AppLogo";
import Link from "next/link";
import { Partnership } from "./data";

const About = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-center space-y-10">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800">About Projex</h1>
      <div className="space-y-10">
        <p className="text-gray-600 text-sm">
          Welcome to our coding project blog — a platform built to document,
          showcase, and explore real-world development projects across a range
          of domains. This blog is designed to offer in-depth insights into a
          wide variety of software projects, each crafted with a focus on clean
          design, scalable architecture, and practical problem-solving. From
          user interfaces to backend logic, every post highlights the decisions,
          methods, and patterns that shape high-quality digital products.
        </p>
        <div className="text-start">
          <h5 className="font-bold mb-3">Readers can discover:</h5>
          <ul className="list-disc space-y-5 text-gray-600 text-sm">
            <li>
              &quot;Hands-on project breakdowns covering structure, logic, and
              implementation&quot;
            </li>
            <li>
              &quot;Design and development best practices applied to real use
              cases &quot;
            </li>
            <li>
              &quot;Reusable code snippets, UI components, and architectural
              patterns&quot;
            </li>
            <li>
              &quot;Responsive layouts and thoughtful interactions designed with
              user experience in mind&quot;
            </li>
          </ul>
        </div>
        <p className="text-gray-600 text-sm">
          Whether exploring new ideas or analyzing real project workflows, our
          goal is to provide valuable, actionable content that supports
          developers, designers, and tech enthusiasts in building better
          solutions.
        </p>
      </div>

      {/* Optional Profile or Blog Image */}
      <div className="flex items-center justify-center">
        <AppLogo type="about-page" />
      </div>

      {/* Tech Stack Badges */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Partnership with
        </h2>
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {Partnership.map((tech) => (
            <Link key={tech.id} href={tech.href} target="_blank">
              <Badge className="rounded-full px-4 py-2 text-base tracking-wider cursor-pointer">
                {tech.label}
              </Badge>
            </Link>
          ))}
        </div>

        {/* Contact / Social */}
        <h2 className="text-sm font-medium mb-2 text-gray-700">
          Let’s Connect
        </h2>
        <ul className="flex items-center justify-center gap-10">
          {socialMediaIcons.map((data) => (
            <li key={data.id} className="cursor-pointer">
              {data.icon}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
