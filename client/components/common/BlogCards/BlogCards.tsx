"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useUserDetails } from "@/hooks/UserDetailsHook/useUserDetailsHook";
import { useFetchAllBlogs } from "@/services/reactQueryService";
import { Eye } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import Loader from "../Loader/Loader";
import CreateNewBtn from "./CreateNewBtn";
import MyBlogsBtn from "./MyBlogsBtn";

const BlogCards = ({ cards }: { cards: string }) => {
  const { data } = useFetchAllBlogs();
  const { isSignedIn, name } = useUserDetails();
  const [imageErrors, setImageErrors] = React.useState<{
    [key: number]: boolean;
  }>({});
  const [showUserBlogs, setShowUserBlogs] = React.useState(false);

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const fetchUsersBlogs = () => {
    setShowUserBlogs(!showUserBlogs); // show only user's blogs
  };

  // Filter blogs based on showUserBlogs flag
  const filteredData = React.useMemo(() => {
    if (!data) return null;
    if (showUserBlogs) {
      return data.filter((item) => item.postedBy === name);
    }
    return data;
  }, [data, showUserBlogs, name]);

  return (
    <section className="py-10">
      {/* Heading and Description */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">Latest Blogs</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-sm md:text-base">
          Browse a curated selection of blog posts showcasing unique coding
          projects, each built with a focus on clean design, modern tools, and
          practical solutions.
        </p>
      </div>

      {isSignedIn && (
        <div className="flex items-center justify-between mb-5">
          <MyBlogsBtn
            fetchUsersBlogs={fetchUsersBlogs}
            showUserBlogs={showUserBlogs}
          />
          <CreateNewBtn />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
        {Array.isArray(filteredData) && filteredData.length > 0 ? (
          (cards === "home" ? filteredData.slice(0, 3) : filteredData).map(
            (item) => (
              <Card
                key={item.id}
                className="flex flex-col overflow-hidden justify-between cursor-pointer rounded-tl-3xl rounded-br-3xl group p-5"
              >
                <CardContent className="p-0 flex-1">
                  <div className="px-5">
                    <h1 className="text-center font-bold text-xl lg:text-3xl first-letter:uppercase mt-2">
                      {item.title}
                    </h1>
                    <p
                      className="text-xs first-letter:uppercase line-clamp-5 mt-8"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                    <Link
                      href={`/blog/blog-details/${item.id}`}
                      className="text-sm text-blue-500 hover:underline"
                    >
                      see more
                    </Link>
                    <ul className="flex items-center gap-2 flex-wrap mt-5">
                      {item?.skills?.map((tech) => (
                        <li key={tech}>
                          <Badge className="rounded-full w-auto h-8 capitalize">
                            {tech}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="px-5 mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-gray-400">Posted by</span>
                    <span className="font-bold">{item.postedBy}</span>
                  </div>
                  <div className="flex items-center justify-end gap-1 text-blue-500 capitalize">
                    <Eye className="w-4 h-4" />
                    <span className="text-xs">{item.visibility}</span>
                  </div>
                </CardFooter>
              </Card>
            )
          )
        ) : Array.isArray(filteredData) && filteredData.length === 0 ? (
          <div className="col-span-3 flex items-center justify-center h-[60vh]">
            <p className="text-gray-500 text-sm">No blogs found</p>
          </div>
        ) : (
          <div className="col-span-3 flex items-center justify-center h-[60vh]">
            <Loader />
          </div>
        )}
      </div>

      {cards === "home" &&
        (filteredData?.length ?? 3) > 3 &&
        !showUserBlogs && (
          <Link href="/blog" className="flex items-center justify-center mt-10">
            <Button
              variant="outline"
              className="border-2 bg-transparent border-black"
            >
              View more
            </Button>
          </Link>
        )}
    </section>
  );
};

export default BlogCards;
