import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const CreateNewBtn = () => {
  return (
    <Link href="/blog/create-new-blog">
      <Button className="rounded-full w-10 h-10 p-0">
        <Plus className="w-10 h-10" />
      </Button>
    </Link>
  );
};

export default CreateNewBtn;
