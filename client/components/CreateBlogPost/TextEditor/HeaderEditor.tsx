import { Editor } from "@tiptap/react";
import { Toggle } from "../../ui/toggle";
import { Options } from "./data";
import { cn } from "@/lib/utils";
import React from "react";

const HeaderEditor = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;

  return (
    <div className="flex items-center justify-center bg-primary_color rounded-3xl h-14">
      <div className="flex items-center gap-2 lg:gap-5">
        {Options.map((item) => (
          <Toggle
            key={item.id}
            onClick={() => item.action(editor)}
            className={cn(item.isActive(editor) ? "is-active" : "", "size-8")}
          >
            {item.icon}
          </Toggle>
        ))}
      </div>
    </div>
  );
};

export default HeaderEditor;
