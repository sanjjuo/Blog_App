import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import { addBlog, fetchAllBlogsApi } from "./apiService";
import { BlogPostFormValues } from "@/types/global";

export const useFetchAllBlogs = (): UseQueryResult<BlogPostFormValues[]> => {
  return useQuery<BlogPostFormValues[]>({
    queryKey: ["blogs"],
    queryFn: fetchAllBlogsApi,
    refetchOnWindowFocus: false,
  });
};

export const useAddBlog = () => {
  return useMutation({
    mutationFn: (addedData: BlogPostFormValues) => addBlog(addedData),
  });
};
