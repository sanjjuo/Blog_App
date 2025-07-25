"use client";
import React from "react";
import Tiptap from "./TextEditor/TipTap";
import AddBlogDetails from "./AddBlogDetails/AddBlogDetails";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogPostSchema } from "@/schemas/blogPostSchema";
import { Controller, useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAddBlog } from "@/services/reactQueryService";
import { useUserDetails } from "../../hooks/UserDetailsHook/useUserDetailsHook";

// Infer type from schema
type BlogPostFormData = z.infer<typeof blogPostSchema>;

const CreateBlogPost = () => {
  const form = useForm<BlogPostFormData>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      title: "",
      skills: [],
      visibility: "private",
      content: "",
      postedBy: "",
    },
  });

  const { handleSubmit, control } = form;
  const router = useRouter();
  const { mutate } = useAddBlog();
  const { name, email } = useUserDetails();

  const formSubmit = (data: BlogPostFormData) => {
    const formDataWithUser = {
      ...data,
      postedBy: name || email,
    };

    console.log("Form data:", formDataWithUser);

    mutate(formDataWithUser, {
      onSuccess: () => {
        toast.success("Post is created");
        router.push("/blog");
      },
      onError: (error: Error) => {
        toast.error("Failed to create post");
        console.error("Mutation error:", error);
      },
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex flex-col items-center justify-center"
      >
        <div className="h-full bg-white w-full lg:w-[700px] mx-auto rounded-xl shadow-md">
          <AddBlogDetails />
          <div className="h-[400px]">
            <Controller
              name="content"
              control={control}
              render={({ field, fieldState }) => (
                <Tiptap
                  editorContent={field.value}
                  onChange={field.onChange}
                  errors={fieldState?.error?.message}
                />
              )}
            />
          </div>
        </div>
        <Button type="submit" className="w-72 rounded-3xl h-12 mt-10">
          Publish post
        </Button>
      </form>
    </Form>
  );
};

export default CreateBlogPost;
