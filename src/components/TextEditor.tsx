// src/Tiptap.tsx
import { useEditor, EditorContent } from '@tiptap/react'
import { FloatingMenu, BubbleMenu } from '@tiptap/react/menus'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline'
import './../assets/styles/text_editor.css'

import BoldIcon from '@mui/icons-material/FormatBold';
import ItalicIcon from '@mui/icons-material/FormatItalic';
import UnderlineIcon from '@mui/icons-material/FormatUnderlined';
import StrikethroughIcon from '@mui/icons-material/StrikethroughS';
import CodeIcon from '@mui/icons-material/Code';
import QuoteIcon from '@mui/icons-material/FormatQuote';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import NumberedListIcon from '@mui/icons-material/FormatListNumbered';
import { Icon, IconButton } from '@mui/material';

const TextEditor = () => {
  const editor = useEditor({
    extensions: [
        StarterKit,
        Underline,
        Placeholder.configure({
            placeholder: 'Start typing here or press “/” for commands',
            // This class is added to the editor when it's empty
            emptyEditorClass: 'is-editor-empty',
        }),
    ], // define your extension array
    content: '', // initial content
    onUpdate: () => {},
    onSelectionUpdate: () => {},
  })

  if (!editor) {
    return null
  }

  return (
    <>
      <EditorContent editor={editor} />
      {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu> */}
      <BubbleMenu editor={editor} className='bg-mainBg px-4 py-2 rounded-xl border border-border'>
            <IconButton onClick={() => editor.chain().focus().toggleBold().run()}>
                <BoldIcon className={`${editor.isActive('bold') ? 'text-textPrimary' : 'text-textSecondary'} hover:text-textPrimary`} />
            </IconButton>
            <IconButton onClick={() => editor.chain().focus().toggleItalic().run()}>
                <ItalicIcon className={`${editor.isActive('italic') ? 'text-textPrimary' : 'text-textSecondary'} hover:text-textPrimary`} />
            </IconButton>
            <IconButton onClick={() => editor.chain().focus().toggleUnderline().run()}>
                <UnderlineIcon className={`${editor.isActive('underline') ? 'text-textPrimary' : 'text-textSecondary'} hover:text-textPrimary`} />
            </IconButton>
            {/* <IconButton onClick={() => editor.chain().focus().toggleStrikethrough().run()}>
                <StrikethroughIcon className="text-textSecondary hover:text-textPrimary" />
            </IconButton> */}
            <IconButton onClick={() => editor.chain().focus().toggleCode().run()}>
                <CodeIcon className={`${editor.isActive('code') ? 'text-textPrimary' : 'text-textSecondary'} hover:text-textPrimary`} />
            </IconButton>
            {/* <IconButton onClick={() => editor.chain().focus().toggleQuote().run()}>
                <QuoteIcon className="text-textSecondary hover:text-textPrimary" />
            </IconButton> */}
      </BubbleMenu>
    </>
  )
}

export default TextEditor