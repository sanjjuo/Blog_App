import { Editor } from "@tiptap/react";
import {
  AlignCenter,
  AlignLeft,
  Bold,
  Heading,
  Italic,
  Link,
  ListOrdered,
} from "lucide-react";

export const Options = [
  {
    id: 1,
    icon: <Heading />,
    action: (editor: Editor) =>
      editor.chain().focus().toggleHeading({ level: 1 }).run(),
    isActive: (editor: Editor) => editor.isActive("heading", { level: 1 }),
  },
  {
    id: 2,
    icon: <Bold />,
    action: (editor: Editor) => editor.chain().focus().toggleBold().run(),
    isActive: (editor: Editor) => editor.isActive("bold"),
  },
  {
    id: 3,
    icon: <Italic />,
    action: (editor: Editor) => editor.chain().focus().toggleItalic().run(),
    isActive: (editor: Editor) => editor.isActive("italic"),
  },
  {
    id: 4,
    icon: <Link />,
    action: (editor: Editor) => {
      const url = window.prompt("Enter URL");

      if (url) {
        editor.chain().focus().setLink({ href: url }).run();
      } else {
        editor.chain().focus().unsetLink().run();
      }
    },
    isActive: (editor: Editor) => editor.isActive("link"),
  },
  {
    id: 5,
    icon: <ListOrdered />,
    action: (editor: Editor) =>
      editor.chain().focus().toggleOrderedList().run(),
    isActive: (editor: Editor) => editor.isActive("orderedList"),
  },
  {
    id: 6,
    icon: <AlignLeft />,
    action: (editor: Editor) =>
      editor.chain().focus().setTextAlign("left").run(),
    isActive: (editor: Editor) => editor.isActive({ textAlign: "left" }),
  },
  {
    id: 7,
    icon: <AlignCenter />,
    action: (editor: Editor) =>
      editor.chain().focus().setTextAlign("center").run(),
    isActive: (editor: Editor) => editor.isActive({ textAlign: "center" }),
  },
];
