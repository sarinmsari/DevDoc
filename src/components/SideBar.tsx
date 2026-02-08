import React, { useState, useEffect, useCallback } from "react";

const SideBar = () => {
  const [sidebarWidth, setSidebarWidth] = useState(260);
  const [isResizing, setIsResizing] = useState(false);

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (isResizing) {
        // Calculate new width (Mouse position - Sidebar left offset)
        const newWidth = mouseMoveEvent.clientX;
        if (newWidth > 150 && newWidth < 600) {
          // Min/Max constraints
          setSidebarWidth(newWidth);
        }
      }
    },
    [isResizing],
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div
      className="bg-secondaryBg text-textPrimary relative p-8"
      style={{ width: `${sidebarWidth}px` }}
    >
      <div className="text-primary text-2xl font-medium select-none">Dev Doc</div>





      {/* Resize Handle */}
      <div
        className="absolute top-0 right-0 w-1 h-full cursor-col-resize hover:bg-border transition-colors"
        onMouseDown={startResizing}
      />
    </div>
  );
};

export default SideBar;
