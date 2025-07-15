import { BlogPostFormValues } from "@/types/global";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export const fetchAllBlogsApi = async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
};

export const addBlog = async (addedData: BlogPostFormValues) => {
  await axios.post(`${BASE_URL}`,  addedData );
};
