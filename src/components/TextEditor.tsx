// src/Tiptap.tsx
import { useEditor, EditorContent } from '@tiptap/react'
import { FloatingMenu, BubbleMenu } from '@tiptap/react/menus'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import './../assets/styles/text_editor.css'

const TextEditor = () => {
  const editor = useEditor({
    extensions: [
        StarterKit,
        Placeholder.configure({
            placeholder: 'Start typing here or press “/” for commands',
            // This class is added to the editor when it's empty
            emptyEditorClass: 'is-editor-empty',
        }),
    ], // define your extension array
    content: '', // initial content
  })

  return (
    <>
      <EditorContent editor={editor} />
      <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
    </>
  )
}

export default TextEditor