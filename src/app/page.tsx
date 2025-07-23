"use client";
import { useEffect, useState } from "react";
import DesktopHome from "./components/DekstopHome";
import MobileHome from "./components/MobileHome";

function useMediaQuery(query: string) {
  const [match, setMatch] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatch(e.matches);
    setMatch(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);
  return match;
}

export default function PageClient() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return isMobile ? <MobileHome /> : <DesktopHome />;
}
