import React, { useState } from 'react';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import TextSnippetIcon from '@mui/icons-material/TextSnippetOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface SidebarItem {
  id: number;
  name: string;
  type: "folder" | "file";
  isOpen?: boolean;
  children?: SidebarItem[];
}

const TreeItem = ({ item }: { item: SidebarItem }) => {
  // Local state to manage collapse/expand
  const [isOpen, setIsOpen] = useState(item.isOpen || false);

  const hasChildren = item.type === "folder" && item.children && item.children.length > 0;

  const toggleOpen = (e: React.MouseEvent) => {
    if (item.type === "folder") {
      e.stopPropagation();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="ml-2">
      <div 
        onClick={toggleOpen}
        className="flex items-center gap-2 py-2 px-2 cursor-pointer text-textSecondary hover:text-textPrimary hover:bg-border rounded-md min-w-0 group"
      >
        {/* Icon container */}
        <div className="shrink-0 flex items-center">
          {item.type === "folder" ? (
            // Toggle between open and closed folder icons
            <FolderOpenIcon sx={{ fontSize: 16 }} />
          ) : (
            <TextSnippetIcon sx={{ fontSize: 16 }} />
          )}
        </div>

        {/* Text container */}
        <span className="truncate text-sm font-medium flex-1">
          {item.name}
        </span>

        {/* Chevron Icon for Folders */}
        {item.type === "folder" && (
          <ExpandMoreIcon
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            sx={{ fontSize: 16 }}
          />
        )}
      </div>

      {/* Recursive Render with Animation/Conditional */}
      {item.type === "folder" && hasChildren && isOpen && (
        <div className="border-l border-border ml-4 mt-0.5">
          {item.children!.map((child) => (
            <TreeItem key={child.id} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeItem;