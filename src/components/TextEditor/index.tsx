// src/Tiptap.tsx
import "@/assets/styles/text_editor.css";
import { useState } from 'react'
// icons
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
// tiptap
import { useEditor, EditorContent } from "@tiptap/react";
import DragHandle from '@tiptap/extension-drag-handle-react'
//import { FloatingMenu, BubbleMenu } from "@tiptap/react/menus";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
// components
import BubbleMenuComponent from "@/components/TextEditor/BubbleMenu";
import FloatingMenuComponent from "@/Components/TextEditor/FloatingMenu";

const NESTED_CONFIG = { edgeDetection: { threshold: -16 } }


const TextEditor = () => {
  const [nested, setNested] = useState(true)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Strike,
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

  if (!editor) {
    return null;
  }

  const toggleEditable = () => {
    editor.setEditable(!editor.isEditable)
    editor.view.dispatch(editor.view.state.tr)
  }

  const toggleNested = () => {
    setNested(!nested)
  }

  return (
    <>
      <DragHandle editor={editor} nested={nested ? NESTED_CONFIG : false}>
        <DragIndicatorIcon className="text-textSecondary custom-drag-handle" fontSize="small" />
      </DragHandle>
      <EditorContent editor={editor} />
      {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu> */}

      <BubbleMenuComponent editor={editor} />
      <FloatingMenuComponent editor={editor} />
    </>
  );
};

export default TextEditor;
