import { useState, useEffect, useRef } from "react";
import TextEditor from "@/components/TextEditor/index";

const Editor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!titleRef.current?.value) {
      titleRef.current?.focus();
    }
  }, [0]);

  return (
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
        <TextEditor />
      </div>
    </div>
  );
};

export default Editor;
