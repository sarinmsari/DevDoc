// src/Tiptap.tsx
import "@/assets/styles/text_editor.css";
import { useState } from 'react'
// icons
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
// tiptap
import { EditorContent } from "@tiptap/react";
import DragHandle from '@tiptap/extension-drag-handle-react'
// components
import BubbleMenuComponent from "@/components/TextEditor/BubbleMenu";
import FloatingMenuComponent from "@/Components/TextEditor/FloatingMenu";

const NESTED_CONFIG = { edgeDetection: { threshold: -16 } }


const TextEditor = ({ editor }: any) => {
  const [nested, setNested] = useState(true)

  

  if (!editor) {
    return null;
  }

  return (
    <>
      <DragHandle editor={editor} nested={nested ? NESTED_CONFIG : false}>
        <DragIndicatorIcon className="text-textSecondary custom-drag-handle" fontSize="small" />
      </DragHandle>
      <EditorContent editor={editor} />

      <BubbleMenuComponent editor={editor} />
      <FloatingMenuComponent editor={editor} />
    </>
  );
};

export default TextEditor;