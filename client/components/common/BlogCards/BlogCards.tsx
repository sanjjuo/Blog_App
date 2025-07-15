"use client";
import { useUserDetails } from "@/components/Auth/useUserDetailsHook";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useFetchAllBlogs } from "@/services/reactQueryService";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import CreateNewBtn from "./CreateNewBtn";
import { useUser } from "@clerk/nextjs";

const BlogCards = ({ cards }: { cards: string }) => {
  const { data } = useFetchAllBlogs();
  const [imageErrors, setImageErrors] = React.useState<{
    [key: number]: boolean;
  }>({});

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const userDetails = useUserDetails();
  console.log(userDetails.email);

  return (
    <section className="py-10">
      {/* Heading and Description */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">Latest Blog Projects</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-sm md:text-base">
          Browse a curated selection of blog posts showcasing unique coding
          projects, each built with a focus on clean design, modern tools, and
          practical solutions.
        </p>
      </div>
      {/* create new */}
      <div className="mb-5">
        <CreateNewBtn />
      </div>
      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
        {data && data.length > 0 ? (
          (cards === "home" ? data.slice(0, 3) : data).map((item, index) => {
            const imageId = 100 + (index % 100);
            const imageSrc = `https://picsum.photos/id/${imageId}/1000/400`;

            return (
              <Card
                key={item.id}
                className="flex flex-col overflow-hidden justify-between cursor-pointer rounded-tl-3xl rounded-br-3xl group"
              >
                <CardContent className="p-0 flex-1">
                  <Link href={`/blog/blog-details/${item.id}`}>
                    <div className="relative w-full h-[200px] rounded-tl-3xl overflow-hidden m-0">
                      {imageErrors[index] ? (
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm">
                          No image available
                        </div>
                      ) : (
                        <Image
                          src={imageSrc}
                          alt="blog-image"
                          width={1000}
                          height={400}
                          quality={100}
                          onError={() => handleImageError(index)}
                          style={{ objectFit: "cover" }}
                          className="group-hover:scale-105 duration-500"
                        />
                      )}
                    </div>
                  </Link>
                  <div className="px-5">
                    <h1 className="text-center font-bold text-2xl first-letter:uppercase mt-2">
                      {item.title}
                    </h1>
                    <p
                      className="text-xs first-letter:uppercase line-clamp-5 mt-2"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />

                    <ul className="flex items-center gap-2 flex-wrap mt-5">
                      {item?.skills?.map((tech) => (
                        <li key={tech}>
                          <Badge className="rounded-full w-auto h-8">
                            {tech}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="px-5 mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {userDetails.image && (
                      <img
                        src={userDetails.image}
                        alt="user-image"
                        width={30}
                        height={30}
                        className="rounded-full"
                      />
                    )}
                    <p className="text-sm">
                      {userDetails.name || userDetails.email}
                    </p>
                  </div>
                  <div className="flex items-center justify-end gap-1 text-blue-500 capitalize">
                    <Eye className="w-4 h-4" />
                    <span className="text-xs">{item.visibility}</span>
                  </div>
                </CardFooter>
              </Card>
            );
          })
        ) : (
          <p className="text-center text-gray-500">No blogs found.</p>
        )}
      </div>
      {cards === "home" && (
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
