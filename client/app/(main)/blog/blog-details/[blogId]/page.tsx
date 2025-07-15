import React from "react";

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  return <div>{blogId}</div>;
};

export default BlogDetailsPage;
