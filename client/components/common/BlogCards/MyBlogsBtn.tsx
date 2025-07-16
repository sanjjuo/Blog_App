"use client";
import { Button } from "@/components/ui/button";

const MyBlogsBtn = ({
  fetchUsersBlogs,
  showUserBlogs,
}: {
  fetchUsersBlogs: () => void;
  showUserBlogs: boolean;
}) => {
  return (
    <div>
      <Button onClick={fetchUsersBlogs}>
        {showUserBlogs ? "Show all blogs" : "Show my blogs"}
      </Button>
    </div>
  );
};

export default MyBlogsBtn;
