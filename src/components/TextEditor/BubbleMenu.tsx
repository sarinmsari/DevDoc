import { BubbleMenu } from "@tiptap/react/menus";
import { IconButton } from "@mui/material";
// icons
import BoldIcon from "@mui/icons-material/FormatBold";
import ItalicIcon from "@mui/icons-material/FormatItalic";
import UnderlineIcon from "@mui/icons-material/FormatUnderlined";
import StrikethroughIcon from "@mui/icons-material/StrikethroughS";
import CodeIcon from "@mui/icons-material/Code";
import QuoteIcon from "@mui/icons-material/FormatQuote";
import ListIcon from "@mui/icons-material/FormatListBulleted";
import NumberedListIcon from "@mui/icons-material/FormatListNumbered";
// components
import Dropdown from "@/Components/UiComponents/Dropdown";

const BubbleMenuComponent = ({ editor }: any) => {

    const headingOptions = [
    { label: 'Paragraph', value: 'p' },
    { label: 'Heading 1', value: '1' },
    { label: 'Heading 2', value: '2' },
    { label: 'Heading 3', value: '3' },
    { label: 'Heading 4', value: '4' },
  ];

  const getCurrentHeading = () => {
    if (editor?.isActive('heading', { level: 1 })) return '1';
    if (editor?.isActive('heading', { level: 2 })) return '2';
    if (editor?.isActive('heading', { level: 3 })) return '3';
    if (editor?.isActive('heading', { level: 4 })) return '4';
    return 'p';
  };

  const handleHeadingChange = (value) => {
    if (value === 'p') {
      editor.chain().focus().setParagraph().run();
    } else {
      editor.chain().focus().toggleHeading({ level: parseInt(value) }).run();
    }
  };

  return (
    <BubbleMenu
      editor={editor}
      className="bg-mainBg px-4 py-2 rounded-xl border border-border"
    >
      <Dropdown options={headingOptions} 
            value={getCurrentHeading()} 
            onChange={handleHeadingChange} />

      <IconButton
        title="Bold"
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <BoldIcon
          className={`${editor.isActive("bold") ? "text-textPrimary" : "text-textSecondary"} hover:text-textPrimary`}
        />
      </IconButton>
      <IconButton
        title="Italic"
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <ItalicIcon
          className={`${editor.isActive("italic") ? "text-textPrimary" : "text-textSecondary"} hover:text-textPrimary`}
        />
      </IconButton>
      <IconButton
        title="Underline"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <UnderlineIcon
          className={`${editor.isActive("underline") ? "text-textPrimary" : "text-textSecondary"} hover:text-textPrimary`}
        />
      </IconButton>
      <IconButton
        title="Strikethrough"
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <StrikethroughIcon
          className={`${editor.isActive("strike") ? "text-textPrimary" : "text-textSecondary"} hover:text-textPrimary`}
        />
      </IconButton>
      <IconButton
        title="Code"
        onClick={() => editor.chain().focus().toggleCode().run()}
      >
        <CodeIcon
          className={`${editor.isActive("code") ? "text-textPrimary" : "text-textSecondary"} hover:text-textPrimary`}
        />
      </IconButton>
      <IconButton
        title="Blockquote"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <QuoteIcon className="text-textSecondary hover:text-textPrimary" />
      </IconButton>
    </BubbleMenu>
  );
};

export default BubbleMenuComponent;
