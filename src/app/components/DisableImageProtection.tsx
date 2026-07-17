// src/app/components/DisableImageProtection.tsx
"use client";

import { useEffect } from "react";

// Blocks the right-click context menu and native image drag everywhere on
// the site — this is a deterrent (raises friction for casual "save image"
// attempts), not an absolute lock: anyone who opens dev tools or views the
// page source can still reach the image files directly.
export default function DisableImageProtection() {
  useEffect(() => {
    const blockContextMenu = (e: MouseEvent) => e.preventDefault();
    const blockDragStart = (e: DragEvent) => e.preventDefault();

    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("dragstart", blockDragStart);

    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("dragstart", blockDragStart);
    };
  }, []);

  return null;
}
