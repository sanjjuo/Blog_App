"use client";
import { useFetchAllBlogs } from "@/services/reactQueryService";
import React from "react";
import { Badge } from "../ui/badge";

const BlogDetailPage = ({ blogId }: { blogId: number | string }) => {
  const { data } = useFetchAllBlogs();
  const blogDetails = data?.find((blog) => String(blog?.id) === String(blogId));
  console.log(blogDetails);
  return (
    <div className="max-w-[1000px] mx-auto lg:py-20">
      <h1 className="font-bold text-xl lg:text-4xl text-center first-letter:uppercase">
        {blogDetails?.title}
      </h1>
      <ul className="flex flex-wrap justify-center items-center gap-2 mt-7">
        {blogDetails?.skills.map((skill, index) => (
          <li key={index}>
            <Badge className="rounded-full w-auto h-10 text-base tracking-wide capitalize">
              {skill}
            </Badge>
          </li>
        ))}
      </ul>
      <p
        className="first-letter:uppercase mt-16"
        dangerouslySetInnerHTML={{ __html: blogDetails?.content || "" }}
      />

      <div className="flex items-center gap-2 text-sm mt-10">
        <span className="text-gray-400">Posted by</span>
        <span className="font-bold">{blogDetails?.postedBy}</span>
      </div>
    </div>
  );
};

export default BlogDetailPage;
