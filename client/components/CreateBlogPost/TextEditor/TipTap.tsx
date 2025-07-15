"use client";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import React from "react";
import HeaderEditor from "./HeaderEditor";

type TiptapProps = {
  editorContent: string;
  onChange: (content: string) => void;
  errors?: string;
};

const Tiptap = ({ editorContent, onChange, errors }: TiptapProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Link.configure({
        HTMLAttributes: {
          class: "text-blue-700 underline",
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({
        placeholder: "Start typing your content here...",
        emptyEditorClass: "is-editor-empty",
      }),
    ],
    content: editorContent || "",
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
    editorProps: {
      attributes: {
        class: "h-full rounded-xl p-5 focus:!outline-none",
      },
    },
    immediatelyRender: false,
  });

  React.useEffect(() => {
    if (editor && editorContent !== editor.getHTML()) {
      editor.commands.setContent(editorContent || "<p></p>");
    }
  }, [editorContent, editor]);

  return (
    <div className="space-y-5 h-[400px] p-5">
      <HeaderEditor editor={editor} />
      {errors && <div className="text-red-500">{errors}</div>}
      <EditorContent editor={editor} className="editor" />
    </div>
  );
};

export default Tiptap;
