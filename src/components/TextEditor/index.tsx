// src/Tiptap.tsx
import "@/assets/styles/text_editor.css";
// tiptap
import { useEditor, EditorContent } from "@tiptap/react";
//import { FloatingMenu, BubbleMenu } from "@tiptap/react/menus";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
// components
import BubbleMenuComponent from "@/components/TextEditor/BubbleMenu";



const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Strike,
      Placeholder.configure({
        placeholder: "Start typing here or press “/” for commands",
        // This class is added to the editor when it's empty
        emptyEditorClass: "is-editor-empty",
      }),
    ], // define your extension array
    content: "", // initial content
    onUpdate: () => {},
    onSelectionUpdate: () => {},
  });

  if (!editor) {
    return null;
  }

  return (
    <>
      <EditorContent editor={editor} />
      {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu> */}

      <BubbleMenuComponent editor={editor} />

    </>
  );
};

export default TextEditor;
