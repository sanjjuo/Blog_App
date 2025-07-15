import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Highlighter,
  Italic,
  Strikethrough,
} from "lucide-react";
import { Editor } from "@tiptap/react";

export const Options = [
  {
    id: 1,
    icon: <Heading1Icon />,
    action: (editor: Editor) =>
      editor.chain().focus().toggleHeading({ level: 1 }).run(),
    isActive: (editor: Editor) => editor.isActive("heading", { level: 1 }),
  },
  {
    id: 2,
    icon: <Heading2Icon />,
    action: (editor: Editor) =>
      editor.chain().focus().toggleHeading({ level: 2 }).run(),
    isActive: (editor: Editor) => editor.isActive("heading", { level: 2 }),
  },
  {
    id: 3,
    icon: <Heading3Icon />,
    action: (editor: Editor) =>
      editor.chain().focus().toggleHeading({ level: 3 }).run(),
    isActive: (editor: Editor) => editor.isActive("heading", { level: 3 }),
  },
  {
    id: 4,
    icon: <Bold />,
    action: (editor: Editor) => editor.chain().focus().toggleBold().run(),
    isActive: (editor: Editor) => editor.isActive("bold"),
  },
  {
    id: 5,
    icon: <Italic />,
    action: (editor: Editor) => editor.chain().focus().toggleItalic().run(),
    isActive: (editor: Editor) => editor.isActive("italic"),
  },
  {
    id: 6,
    icon: <Strikethrough />,
    action: (editor: Editor) => editor.chain().focus().toggleStrike().run(),
    isActive: (editor: Editor) => editor.isActive("strike"),
  },
  {
    id: 7,
    icon: <Highlighter />,
    action: (editor: Editor) => editor.chain().focus().toggleHighlight().run(),
    isActive: (editor: Editor) => editor.isActive("highlight"),
  },
  {
    id: 8,
    icon: <AlignLeft />,
    action: (editor: Editor) =>
      editor.chain().focus().setTextAlign("left").run(),
    isActive: (editor: Editor) => editor.isActive({ textAlign: "left" }),
  },
  {
    id: 9,
    icon: <AlignCenter />,
    action: (editor: Editor) =>
      editor.chain().focus().setTextAlign("center").run(),
    isActive: (editor: Editor) => editor.isActive({ textAlign: "center" }),
  },
  {
    id: 10,
    icon: <AlignRight />,
    action: (editor: Editor) =>
      editor.chain().focus().setTextAlign("right").run(),
    isActive: (editor: Editor) => editor.isActive({ textAlign: "right" }),
  },
  {
    id: 11,
    icon: <AlignJustify />,
    action: (editor: Editor) =>
      editor.chain().focus().setTextAlign("justify").run(),
    isActive: (editor: Editor) => editor.isActive({ textAlign: "justify" }),
  },
];
