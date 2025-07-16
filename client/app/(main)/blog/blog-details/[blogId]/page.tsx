import BlogDetailPage from "@/components/BlogDetailPage/BlogDetailPage";
import React from "react";

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: number | string }>;
}) => {
  const { blogId } = await params;
  return <BlogDetailPage blogId={blogId} />;
};

export default BlogDetailsPage;
