import CreateBlogPost from "@/components/CreateBlogPost/CreateBlogPost";

const CreateNewBlogPage = () => {
  return (
    <div>
      <h1 className="text-center text-2xl md:text-3xl font-bold">
        Create a blog post
      </h1>
      <div className="mt-10">
        <CreateBlogPost />
      </div>
    </div>
  );
};

export default CreateNewBlogPage;
