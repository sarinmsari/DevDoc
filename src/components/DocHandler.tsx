import { useState } from "react";
import Dropdown from "./UiComponents/Dropdown";
import GitBranchIcon from "@/assets/svg/git_branch";
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

const DocHandler = ({ editor }: any) => {
  const [selectedBranch, setSelectedBranch] = useState("main");
  const [selectedPage, setSelectedPage] = useState("page_1");
  
  const branchOptions = [
    { label: "main", value: "main", icon: GitBranchIcon },
    { label: "branch_1", value: "branch_1", icon: GitBranchIcon },
    { label: "branch_3", value: "branch_3", icon: GitBranchIcon },
    { label: "branch_2", value: "branch_2", icon: GitBranchIcon },
    { label: "branch_4", value: "branch_4", icon: GitBranchIcon },
  ];

  const changedPages = [
    { label: "page 1", value: "page_1", icon: TextSnippetOutlinedIcon },
    { label: "page 2", value: "page_2", icon: TextSnippetOutlinedIcon },
    { label: "page 3", value: "page_3", icon: TextSnippetOutlinedIcon },
    { label: "page 4", value: "page_4", icon: TextSnippetOutlinedIcon },
    { label: "page 5", value: "page_5", icon: TextSnippetOutlinedIcon },
  ];

  const handleBranchChange = (value: string | number) => {
    setSelectedBranch(String(value));
  };

  const handlePageChange = (value: string | number) => {
    setSelectedPage(String(value));
  };

    const handleDocSave = (event) => {
        event.preventDefault();
        const json = editor.getJSON();
        console.log("Document JSON:", json);
        // Here you can send the JSON to your backend or save it as needed
    }

  const changedPagesHeader = (
    <div className="flex gap-2 items-center">
        <TrackChangesIcon sx={{ fontSize: 18 }} />
        <span className="text-sm font-medium">Changes</span>
        <span className="text-xs bg-secondaryBg group-hover/dropdown-header:bg-border px-1.5 py-0.5 rounded-full">{changedPages.length}</span>
    </div>
  );

  return (
    <div className="py-4 px-8 w-full flex items-center justify-between">
      <div>
        <Dropdown
          options={branchOptions}
          value={selectedBranch}
          onChange={(value)=>handleBranchChange(value)}
        />
      </div>
      <div className="flex gap-6 items-center justify-center">
        <Dropdown
          options={changedPages}
          value={selectedPage}
          onChange={(value)=>handlePageChange(value)}
          headerContent={changedPagesHeader}
        />
        <button onClick={(event)=>handleDocSave(event)} className="px-4 py-1.5 bg-primary text-textPrimary rounded-md hover:bg-opacity-80 transition-colors flex items-center gap-2">
          <SaveOutlinedIcon sx={{ fontSize: 18 }} />
          Save
        </button>
      </div>
    </div>
  );
};

export default DocHandler;
