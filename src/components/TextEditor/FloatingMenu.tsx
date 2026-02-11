import { FloatingMenu } from "@tiptap/react/menus";
// icons
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const FloatingMenuComponent = ({ editor }) => {
  // Guard clause: if no editor, don't render anything
  if (!editor) return null;

  const menuOptions = [
    {
      label: "Heading 1",
      icon: "H1",
      command: () =>
        editor
          .chain()
          .focus()
          .deleteRange({
            from: editor.state.selection.from - 1,
            to: editor.state.selection.from,
          })
          .setNode("heading", { level: 1 })
          .run(),
    },
    {
      label: "Heading 2",
      icon: "H2",
      command: () =>
        editor
          .chain()
          .focus()
          .deleteRange({
            from: editor.state.selection.from - 1,
            to: editor.state.selection.from,
          })
          .setNode("heading", { level: 2 })
          .run(),
    },
    {
      label: "Bullet List",
      icon: FormatListBulletedIcon,
      command: () =>
        editor
          .chain()
          .focus()
          .deleteRange({
            from: editor.state.selection.from - 1,
            to: editor.state.selection.from,
          })
          .toggleBulletList()
          .run(),
    },
    {
      label: "Quote",
      icon: FormatQuoteIcon,
      command: () =>
        editor
          .chain()
          .focus()
          .deleteRange({
            from: editor.state.selection.from - 1,
            to: editor.state.selection.from,
          })
          .toggleBlockquote()
          .run(),
    },
  ];

  return (
      <FloatingMenu
        editor={editor}
        shouldShow={({ state }) => {
          const { selection } = state;
          const { $from } = selection;

          // Ensure we are at the end of a line that only contains "/"
          const currentLineText = $from.nodeBefore?.text || "";

          // Check if the text immediately before the cursor is exactly "/"
          return currentLineText === "/";
        }}
      >
        <div className="flex flex-col bg-mainBg border border-border shadow-xl rounded-lg overflow-hidden min-w-[180px]">
          {menuOptions.map((item, index) => (
            <button
              key={index}
              onClick={item.command}
              className="w-full flex items-center gap-3 px-3 py-2 text-sm text-left text-textSecondary hover:bg-secondaryBg hover:text-textPrimary rounded-md transition-colors"
            >
              <div className="flex items-center justify-center w-8 h-8 text-textSecondary group-hover:text-textPrimary group-hover:bg-secondaryBg transition-colors">
                {typeof item.icon !== "string" ? (
                  <item.icon sx={{ fontSize: 18 }} />
                ) : (
                  <span className="text-[10px] font-bold">{item.icon}</span>
                )}
              </div>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </FloatingMenu>
  );
};

export default FloatingMenuComponent;