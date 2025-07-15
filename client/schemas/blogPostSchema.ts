import z from "zod";

export const blogPostSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  skills: z.array(z.string()).min(1, { message: "Select atleast 1 skill" }),
  visibility: z.enum(["private", "public"]),
  content: z.string().min(1, { message: " Content cannot empty" }),
  postedBy: z.string(),
});
