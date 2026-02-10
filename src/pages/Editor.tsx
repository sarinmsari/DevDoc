import { useState, useEffect, useRef } from "react";
import TextEditor from "@/components/TextEditor/index";
import DocHandler from "../components/DocHandler";
// tiptap
import { useEditor } from "@tiptap/react";
//import { FloatingMenu, BubbleMenu } from "@tiptap/react/menus";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

const Editor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Start typing here or press “/” for commands",
        showOnlyCurrent: true, // This ensures the placeholder shows on ANY empty line, 
        includeChildren: true, // This applies the 'is-empty' class to any empty node
      })
    ],
    content: "", // initial content
    onUpdate: () => {},
    onSelectionUpdate: () => {},
  });

  useEffect(() => {
    if (!titleRef.current?.value) {
      titleRef.current?.focus();
    }
  }, [0]);

  return (
    <div className="relative w-full">
      <div className="flex top-10">
        <DocHandler editor={editor} />
      </div>
      <div className="flex-1 p-8">
        {/* Document Title */}
        <input
          type="text"
          ref={titleRef}
          className="w-full p-2 pl-6 text-textPrimary bg-transparent outline-none text-5xl font-medium"
          placeholder="Untitled Document"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Text Editor */}
        <div className="mt-8">
          <TextEditor editor={editor} />
        </div>
      </div>
    </div>
  );
};

export default Editor;
